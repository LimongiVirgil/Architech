import React from 'react'
import CalendarIcon  from '../../../assets/icons/calendar.svg'

const CalendarContactCard = () => {

return (
  <div className="calendar-contact-card">
    <div className="company-infos">
      <span>Entre prise en charge de ce type d'incident</span>
      <h3>Doolet LLC</h3>
      <p>05 45 03 35 99</p>
      <p>jp@doolet.com</p>
    </div>
    <div className="intervention-program">
    <img src={CalendarIcon} alt="Calendar icon"/>
      <p>Programmer une intervention</p>
    </div>
  </div>
    )
}

export default CalendarContactCard;
