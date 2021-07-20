import React from 'react';
import Title from '../../atoms/title/title'
import IssueInformation from '../../molecules/issueInformation/issueInformation';

const CommingIssue = () => {
	return (
		<div className="commingIssue">
			<Title cssClass="card-title">
				2 évènements à venir
			</Title>
			<IssueInformation />
		</div>
	)
}

export default CommingIssue
