import React from 'react'

const issueHeaderAgenda = ({ cssClass }) => {
  return (
    <div className={`${cssClass}`}>
      <p className="headerMessage">Aujourd'hui, <span>15 juillet 2021</span> pas d'évènements prévue </p>
      <span className="totalIssues"> 6 incidents à examiner</span>
    </div>
  )
}

export default issueHeaderAgenda;
