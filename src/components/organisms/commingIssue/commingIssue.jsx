import React from 'react';
import Title from '../../atoms/title/title'
import IssueInformation from '../../molecules/issueInformation/issueInformation';
import Card from '../../templates/card'

const CommingIssue = () => {
	return (
	<Card className="commingIssue">
		<Title text="2 évènements à venir" cssClass="card-title"/>
		<IssueInformation />
	</Card>
	)
}

export default CommingIssue
