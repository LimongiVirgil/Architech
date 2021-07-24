import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../templates/card/Card'
import CalendarListMonth from '../../molecules/calendarListMonth/CalendarListMonth'

function CalendarList() {
  const [interventionsByMonth, setInterventionsByMonth] = useState(null)

  useEffect(() => {
    getinterventionsByMonth()
  }, [])

  async function getinterventionsByMonth () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/dashboard/allFutureEvent/1`)
      if (!response || !response.data) return
      const interventionsByMonth = response.data
      setInterventionsByMonth(interventionsByMonth)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Card scroll={true}>
      {interventionsByMonth && Object.entries(interventionsByMonth).map(([monthYear, interventions]) => (
        <CalendarListMonth key={monthYear} monthYear={monthYear} interventions={interventions}/>
      ))}
    </Card>
  )
}

export default CalendarList
