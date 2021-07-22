import React from 'react'

const issueHeaderAgenda = ({ cssClass }) => {
  return (
    <div className={cssClass}>
      <p className="hearder-message">Aujourd'hui, <span>15 juillet 2021</span> pas d'évènements prévus </p>
      <span className="total-issues"> 6 incidents à examiner</span>
    </div>
  )
}

export default issueHeaderAgenda;
