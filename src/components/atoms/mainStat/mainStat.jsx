import React, { useEffect, useState } from "react"

function mainStat({ amount }) {
  const [incidentText, setIncidentText] = useState('incidents')

  useEffect(() => {
    let text = 'incident'
    if (amount > 1) text += 's'
    setIncidentText(text)
  }, [amount])
  
  return (
    <div className="main-statistic">
      <span className="main-statistic__number">{amount}</span>
      <p className="main-statistic__description">
        <span className="main-statistic__title">{incidentText}</span> au cours du mois de juillet 2021
      </p>
    </div>
  );
}

export default mainStat;
