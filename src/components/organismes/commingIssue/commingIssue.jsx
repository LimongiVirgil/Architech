import React from 'react';
import Title from '../../atoms/title/title'
import IssueInformation from '../../molecules/issueInformation/issueInformation';

const CommingIssue = () => {
	return (
		<div>
			<Title text="2 évènements à venir" cssClass="card-title"/>
			<IssueInformation />
		</div>
	)
}

export default CommingIssue