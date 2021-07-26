import React from 'react'
import CalendarIcon from '../../../assets/icons/calendar.svg'

const CalendarContactCard = ({ company, actionCallback }) => {

  function handleInterventionRequest () {
    actionCallback(company)
  }

return (
  <div className="calendar-contact-card">
    <div className="company-infos">
      <span>Entreprise en charge de ce type d'incident</span>
      <h3>{company.name}</h3>
      <p>{company.phone}</p>
      <p>{company.mail}</p>
    </div>
    <div className="intervention-wrapper">
      <div className="intervention-program" onClick={handleInterventionRequest}>
        <img src={CalendarIcon} alt="Calendar icon"/>
        <p>Programmer une intervention</p>
      </div>
    </div>
  </div>
    )
}

export default CalendarContactCard;
