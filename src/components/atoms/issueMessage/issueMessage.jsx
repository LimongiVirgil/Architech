import React from 'react'

const IssueMessage = ({incidentType, company, classroomZone}) => {
  let text;

  if (incidentType === "heat_leak" ) {
    text = `Intervention salle ${classroomZone}par l’entreprise ${company} pour consultation suite à une différence de température importante`;
  } else if (incidentType === "defective_air_conditioning" ) {
    text = `Intervention salle ${classroomZone}par l’entreprise ${company} pour consultation de la climatisation défectueuse`;
  } else if (incidentType === "high_humidity" ) {
    text = `Intervention salle ${classroomZone}par l’entreprise ${company} pour consultation suite à un taux d’humidité élevé`;
  }

  return (
    <p className="issueMessage">
      {text}
    </p>
  )
}

export default IssueMessage;
