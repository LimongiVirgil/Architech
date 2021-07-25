import React, { useEffect, useState } from 'react'
import { capitalizeFirstLetter } from '../../../utils'
import InterventionDescription from '../interventionDescription/InterventionDescription'
import Title from '../../atoms/title/title'

function CalendarListMonth({ monthYear, interventions }) {
  const monthIndex = monthYear.split('-')[0]
  const year = monthYear.split('-')[1]
  const monthDate = new Date().setMonth(parseInt(monthIndex) - 1)
  const month = new Date(monthDate).toLocaleString('fr-FR', { month: 'long' })
  const monthName = capitalizeFirstLetter(month)

  const [numberInterventions, setNumberInterventions] = useState(0)

  useEffect(() => {
    getNumberInterventions()
  }, [])

  function getNumberInterventions() {
    const numberInterventions = interventions.length
    setNumberInterventions(numberInterventions)
  }

  return (
    <div className="month-events">
      {monthName && <Title cssClass="card-title">{monthName} {year}</Title>}
      {numberInterventions && 
        <p className="month-events__subtitle">
          {numberInterventions > 1 ?
          `${numberInterventions} interventions à venir` :
          `${numberInterventions} intervention à venir`}
        </p>}

      {interventions && interventions.map((intervention, index) => (
        <InterventionDescription issue={intervention} key={index}/>
      ))}
    </div>
  )
}

export default CalendarListMonth
