import React from 'react';
import IssueMessage from '../../atoms/issueMessage/issueMessage'
import IssueDate from '../../atoms/issueDate/issueDate'

const IssueInformation = () => {
	return (
		<div>
			<IssueDate date="Ven 16 juil." time="8h30"/>
			<IssueMessage text="Intervention salle B008 par S. Baudu, pour consultation suite à un taux d’humidité élevé"/>
		</div>
	)
}

export default IssueInformation;