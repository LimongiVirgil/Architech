import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { formatPercentage } from '../../../utils'
import MonthlySensorChart from '../../molecules/currentMonthChart/currentMonthChart'
import VariationStat from '../../atoms/variationStat/variationStat'
import MainStat from '../../atoms/mainStat/mainStat'

function IncidentsOfTheMonth() {
  // api incident data = incidents of all time.
  // just keep incidents of the current month regardless of incidents status.
  // The date corresponds to de incident creation date.

  const [chartData, setChartData] = useState(undefined);
  const [numberIncidentThisMonth, setNumberIncidentThisMonth] = useState(undefined);
  const [variationWithPrevMonth, setVariationWithPrevMonth] = useState(undefined);
  const [variationText, setVariationText] = useState(undefined);

  useEffect(async () => {
    await getChartData();
  }, []);

  async function getChartData() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/dashboard/statsincidents/1`)
      if (!response || !response.data) return
      
      const statsIncidents = response.data
      const currentMonthIncidents = {}
      const currentMonth = new Date().getMonth()

      Object.entries(statsIncidents.incidents).forEach(([key, value]) => {
        currentMonthIncidents[key] = value.filter(
          (incident) =>
            new Date(incident.incident_date).getMonth() === currentMonth
        );
      });

      const countIncidentsPreviousMonth = statsIncidents.info.total_incidents_prev_month
      const countIncidentsCurrentMonth = statsIncidents.info.total_incidents_current_month
      const variation = (countIncidentsCurrentMonth - countIncidentsPreviousMonth) / countIncidentsPreviousMonth
      const formattedVariation = formatPercentage(variation)

      if (variation >= 0) setVariationWithPrevMonth('+' + formattedVariation)
      else setVariationWithPrevMonth(formattedVariation)

      if (variation === 0) setVariationText('Stable depuis le mois précédent')
      else if (variation > 0) setVariationText('En hausse depuis le mois précédent')
      else setVariationText('En baisse depuis le mois précédent')

      setChartData(currentMonthIncidents)
      setNumberIncidentThisMonth(countIncidentsCurrentMonth)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="month-incidents-chart">
      <div className="month-incidents-chart__header">
        <MainStat amount={numberIncidentThisMonth}/>
        <VariationStat variation={variationWithPrevMonth} variationText={variationText}/>
      </div>
      <MonthlySensorChart chartData={chartData} numberIncident={numberIncidentThisMonth}/>
    </div>
  );
}

export default IncidentsOfTheMonth;
