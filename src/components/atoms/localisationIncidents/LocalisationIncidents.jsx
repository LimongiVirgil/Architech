import React from 'react'

const LocalisationIncidents = ({cssClass, text }) => {
  return <span className={`localisation-component ${cssClass}`}>{text}</span>
}

export default LocalisationIncidents;
