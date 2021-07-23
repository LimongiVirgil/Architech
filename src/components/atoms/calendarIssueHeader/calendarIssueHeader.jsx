import React from 'react'

const issueHeaderAgenda = ({ cssClass, todayEventsNumber = 0 }) => {
  const eventText = todayEventsNumber === 0 ? `pas d'évènement prévu` : todayEventsNumber > 1 ? `évènements prévus` : `évènement prévu`

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
