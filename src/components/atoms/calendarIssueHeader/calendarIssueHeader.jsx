import React from 'react'

const issueHeaderAgenda = ({ cssClass }) => {
const months = [
  "Janvier", 
  "Février", 
  "Mars", 
  "Avril", 
  "Mai", 
  "Juin", 
  "Juillet", 
  "Août", 
  "Septembre", 
  "Octobre", 
  "Novembre",
  "Décembre"
]

const today = new Date()
const day = String(today.getDate()).padStart(2, '0')
const monthName = months[today.getMonth()]
const years = today.getFullYear()
const date = day + ' ' + monthName + ' ' + years

  return (
    <div className={cssClass}>
      <p className="hearder-message">Aujourd'hui, <span>{date}</span> pas d'évènements prévus </p>
      <span className="total-issues"> 6 incidents à examiner</span>
    </div>
  )
}

export default issueHeaderAgenda;
