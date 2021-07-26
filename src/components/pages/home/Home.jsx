import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IncidentsOfTheMonth from '../../organisms/incidentsOfTheMonth/incidentsOfTheMonth'
import CommingInterventions from '../../organisms/commingInterventions/CommingInterventions'
import EstablishmentInfo from '../../organisms/establishmentInfo/establishmentInfo'
import AnnualEvolutionBarChart from '../../organisms/annualEvolutionBarChartBlock/annualEvolutionBarChart'
import DasboardDisclosure from '../../organisms/dasboardDisclosure/dasboardDisclosure'
import Card from '../../templates/card/Card'
import Page from '../../templates/page/Page'
import Loader from '../../atoms/loader/loader'
import Title from '../../atoms/title/title'

const Home = () => {
  // api incident data = incidents of all time.
  // just keep incidents of the current month regardless of incidents status.
  // The date corresponds to de incident creation date.

  const [incidentsOfAllTime, setIncidentsOfAllTime] = useState(null)
  const [incidentsInfo, setIncidentsInfo] = useState(null)
  const [incidentsOfTheMonth, setIncidentsOfTheMonth] = useState(null)
  const [incidentsPrevMonth, setIncidentsPrevMonth] = useState(0)
  const [incidentsThisMonth, setIncidentsThisMonth] = useState(0)
  const [dataError, setDataError] = useState(false)

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
      setDataError(true)
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
        {incidentsOfAllTime &&
          <>
            <IncidentsOfTheMonth incidentsOfTheMonth={incidentsOfTheMonth} numberIncidentsPrevMonth={incidentsPrevMonth} numberIncidentsThisMonth={incidentsThisMonth} />
            <DasboardDisclosure incidentsOfAllTime={incidentsOfAllTime} />
          </>
        }
        {!incidentsOfAllTime &&
          <>
            <Title cssClass='titleIncidentsOfAllTimeLoader'>
              Pas d'intervention au cours de ce mois
            </Title>
            <Loader error={dataError}/>
          </>
        }
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
