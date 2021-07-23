import React, { useEffect, useState } from 'react'
import IssueInformation from '../issueInformation/issueInformation'
import Title from '../../atoms/title/title'

function CalendarListMonth({issues}) {
  const [month, setMonth] = useState('')
  const [numberIssues, setNumberIssues] = useState(0)

  useEffect(() => {
    getIssueMonthName()
    getNumberIssues()
  }, [])

  function getIssueMonthName() {
    const issueMonth = new Date(issues[0].intervention_datetime.date).toLocaleString('fr-FR', { month: 'long' })
    const issueMonthCapitalized = capitalizeFirstLetter(issueMonth)
    setMonth(issueMonthCapitalized)
  }

  function getNumberIssues() {
    const numberIssues = issues.length
    setNumberIssues(numberIssues)
  }

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <div className="month-events">
      {month && <Title cssClass="card-title">{month}</Title>}
      {numberIssues && <p className="month-events__subtitle">{numberIssues > 1 ? `${numberIssues} évènements à venir` : `${numberIssues} évènement à venir`}</p>}

      {issues && issues.map((issue, index) => (
        <IssueInformation issue={issue} key={index}/>
      ))}
    </div>
  )
}

export default CalendarListMonth
