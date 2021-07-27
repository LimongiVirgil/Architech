import React from 'react'
import Card from '../../templates/card/Card'
import CalendarListMonth from '../../molecules/calendarListMonth/CalendarListMonth'
import Loader from '../../atoms/loader/loader'
import Title from '../../atoms/title/title'


function CalendarList({ interventionsByMonth, dataError }) {
  return (
    <Card>
      {interventionsByMonth && Object.entries(interventionsByMonth).map(([monthYear, interventions]) => (
        <CalendarListMonth key={monthYear} monthYear={monthYear} interventions={interventions}/>
      ))}
      {!interventionsByMonth &&
        <>
          <Title tag="h2" cssClass="card-title">Interventions à venir</Title>
          <Loader error={dataError} />
        </>
      }
    </Card>
  )
}

export default CalendarList
