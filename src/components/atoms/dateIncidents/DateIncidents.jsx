import React from 'react'

const DateIncidents = ({cssClass, text }) => {

return <span className={`date-component ${cssClass}`}>{text}</span> 
}

export default DateIncidents;