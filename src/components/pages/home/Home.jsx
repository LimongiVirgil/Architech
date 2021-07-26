import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IncidentsOfTheMonth from '../../organisms/incidentsOfTheMonth/incidentsOfTheMonth'
import CommingInterventions from '../../organisms/commingInterventions/CommingInterventions'
import EstablishmentInfo from '../../organisms/establishmentInfo/establishmentInfo'
import AnnualEvolutionBarChart from '../../organisms/annualEvolutionBarChartBlock/annualEvolutionBarChart'
import DasboardDisclosure from '../../organisms/dasboardDisclosure/dasboardDisclosure'
import Card from '../../templates/card/Card'
import Page from '../../templates/page/Page'

const Home = () => {
  // api incident data = incidents of all time.
  // just keep incidents of the current month regardless of incidents status.
  // The date corresponds to de incident creation date.

  const [incidentsOfAllTime, setIncidentsOfAllTime] = useState(null)
  const [incidentsInfo, setIncidentsInfo] = useState(null)
  const [incidentsOfTheMonth, setIncidentsOfTheMonth] = useState(null)
  const [incidentsPrevMonth, setIncidentsPrevMonth] = useState(0)
  const [incidentsThisMonth, setIncidentsThisMonth] = useState(0)

  useEffect(() => {
    getIncidentsOfAllTime()
  }, [])

  useEffect(() => {
    getIncidentsOfTheMonth()
  }, [incidentsOfAllTime])

  useEffect(() => {
    getNumberIncidentsPrevAndCurrentMonth()
  }, [incidentsInfo])

  async function getIncidentsOfAllTime () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/dashboard/statsincidents/1`)
      if (!response || !response.data) return
      setIncidentsOfAllTime(response.data.incidents)
      setIncidentsInfo(response.data.info)
    } catch (error) {
      console.log(error)
    }
  }

  function getIncidentsOfTheMonth () {
    if (!incidentsOfAllTime) return
    const currentMonthIncidents = {}
    const currentMonth = new Date().getMonth()

    Object.entries(incidentsOfAllTime).forEach(([key, value]) => {
      currentMonthIncidents[key] = value.filter(
        (incident) => new Date(incident.incident_date).getMonth() === currentMonth
      )
    })
    setIncidentsOfTheMonth(currentMonthIncidents)
  }

  function getNumberIncidentsPrevAndCurrentMonth () {
    if (!incidentsInfo) return
    setIncidentsPrevMonth(incidentsInfo.total_incidents_prev_month)
    setIncidentsThisMonth(incidentsInfo.total_incidents_current_month)
  }

  return (
    <Page className="home">
      <Card>
        <IncidentsOfTheMonth incidentsOfTheMonth={incidentsOfTheMonth} numberIncidentsPrevMonth={incidentsPrevMonth} numberIncidentsThisMonth={incidentsThisMonth} />
       
        {/* TODO: confirm that we should display the current month data only in the disclosure
        if yes, change the displayed data to only show current month data
        if no, everything is fine */}
        <DasboardDisclosure incidentsOfAllTime={incidentsOfAllTime} />
      </Card>
      <div className="card-container">
        <CommingInterventions />
        <AnnualEvolutionBarChart/>
        <EstablishmentInfo />
      </div>
    </Page>
  );
}

export default Home;
