import React from 'react'
import CalendarIcon from '../../../assets/icons/calendar.svg'
import ContactInfo from '../../atoms/contactInfo/ContactInfo'

const CalendarContactCard = ({ company, issues, incidentTypeText, actionCallback, showButton }) => {
  function handleInterventionRequest () {
    const issuesIds = issues.reduce((acc, issue) => {
      acc.push(issue.incident_id)
      return acc
    }, [])

    const classRooms = issues.map(issue => (issue.classroom_zone + issue.classroom_name))
    actionCallback(company, classRooms, incidentTypeText, issuesIds)
  }

return (
  <div className="calendar-contact-card">
    <div className={`company-infos${showButton ? ' company-infos--with-button' : ''}`}>
      <span>Entreprise en charge de ce type d'incident</span>
      <h3>{company.name}</h3>
      <ContactInfo type="tel" contactInfo={company.phone}/>
      <ContactInfo type="mail" contactInfo={company.mail}/>
    </div>
    
    { showButton && 
    <div className="intervention-program" onClick={handleInterventionRequest}>
      <img src={CalendarIcon} alt="Calendar icon"/>
      <p>Programmer une intervention</p>
    </div>
    }
  </div>
    )
}

export default CalendarContactCard;
