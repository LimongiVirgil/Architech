import React, { useEffect, useState } from "react"

const today = new Date()
const currentMonthName = today.toLocaleString('fr-FR', { month: 'long' })
const currentYear = today.getFullYear()

function mainStat({ amount }) {
  const [incidentText, setIncidentText] = useState('incident')

  useEffect(() => {
    adjustTextPlural()
  }, [amount])
  
  function adjustTextPlural () {
    let text = 'incident'
    if (amount > 1) text += 's'
    setIncidentText(text)
  }
  
  return (
    <div className="main-statistic">
      <span className="main-statistic__number">{amount}</span>
      <p className="main-statistic__description">
        <span className="main-statistic__title">{incidentText}</span>
        {`au cours du mois de ${currentMonthName} ${currentYear}`}
      </p>
    </div>
  );
}

export default mainStat;
