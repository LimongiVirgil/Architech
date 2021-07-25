import React from 'react'
import Card from '../../templates/card/Card'
import CalendarListMonth from '../../molecules/calendarListMonth/CalendarListMonth'

function CalendarList({ interventionsByMonth }) {
  return (
    <Card scroll={true}>
      {interventionsByMonth && Object.entries(interventionsByMonth).map(([monthYear, interventions]) => (
        <CalendarListMonth key={monthYear} monthYear={monthYear} interventions={interventions}/>
      ))}
    </Card>
  )
}

export default CalendarList
