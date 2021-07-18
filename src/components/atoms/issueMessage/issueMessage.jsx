import React from 'react';

const IssueMessage = ({incidentType, company, classroomName, classroomZone}) => {
	let text;

	if (incidentType === "heat_leak" ) {
		text = `Intervention salle ${classroomZone}${classroomName} par l’entreprise ${company}, pour consultation suite à des différences de températures importantes`;
	} else if (incidentType === "defective_air_conditioning" ) {
		text = `Intervention salle ${classroomZone}${classroomName} par l’entreprise ${company}, pour consultation de la climatisation défectueuse`;
	} else if (incidentType === "high_humidity" ) {
		text = `Intervention salle ${classroomZone}${classroomName} par l’entreprise ${company}, pour consultation suite à un taux d’humidité élevé`;
	}

	return (
		<p className="issueMessage">
			{text}
		</p>
	)
}

export default IssueMessage;