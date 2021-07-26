import React from 'react'

const issueHeaderAgenda = ({ cssClass, todayEventsNumber = 0, interventionsNumber = 0 }) => {
  const eventText = interventionsNumber === 0 ? `pas d'intervention prévue` : 
    interventionsNumber > 1 ? `${interventionsNumber} interventions prévues` : `${interventionsNumber} intervention prévue`

  const today = new Date()
  const todayDate = today.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className={cssClass}>
      <p className="hearder-message">Aujourd'hui, <span>{todayDate}</span> {eventText}</p>
      <span className="total-issues">{todayEventsNumber} {todayEventsNumber > 1 ? 'incidents à examiner' : 'incident à examiner'}</span>
    </div>
  )
}

export default issueHeaderAgenda;
