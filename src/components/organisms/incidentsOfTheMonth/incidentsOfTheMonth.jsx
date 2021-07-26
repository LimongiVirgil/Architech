import React, { useState, useEffect } from 'react'
import { formatPercentage } from '../../../utils'
import MonthlySensorChart from '../../molecules/currentMonthChart/currentMonthChart'
import VariationStat from '../../atoms/variationStat/variationStat'
import MainStat from '../../atoms/mainStat/mainStat'

function IncidentsOfTheMonth({ incidentsOfTheMonth, numberIncidentsPrevMonth, numberIncidentsThisMonth }) {
  const [variationWithPrevMonth, setVariationWithPrevMonth] = useState(undefined);
  const [variationText, setVariationText] = useState(undefined);

  useEffect(() => {
    calculateVariation();
  }, [numberIncidentsPrevMonth, numberIncidentsThisMonth]);

  async function calculateVariation() {
    const variation = (numberIncidentsThisMonth - numberIncidentsPrevMonth) / numberIncidentsPrevMonth
    const formattedVariation = formatPercentage(variation)

    if (variation >= 0) setVariationWithPrevMonth('+' + formattedVariation)
    else setVariationWithPrevMonth(formattedVariation)

    if (variation === 0) setVariationText('Stable depuis le mois précédent')
    else if (variation > 0) setVariationText('En hausse depuis le mois précédent')
    else setVariationText('En baisse depuis le mois précédent')
  }
  return (
    <div className="month-incidents-chart">
      <div className="month-incidents-chart__header">
        <MainStat amount={numberIncidentsThisMonth}/>
        <VariationStat variation={variationWithPrevMonth} variationText={variationText}/>
      </div>
      <MonthlySensorChart chartData={incidentsOfTheMonth} numberIncident={numberIncidentsThisMonth}/>
    </div>
  );
}

export default IncidentsOfTheMonth;
