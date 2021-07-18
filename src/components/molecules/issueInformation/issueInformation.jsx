import React, { useEffect, useState } from 'react';
import IssueMessage from '../../atoms/issueMessage/issueMessage'
import IssueDate from '../../atoms/issueDate/issueDate'

const IssueInformation = () => {
	const [issuesData, setIssuesData] = useState([])

	useEffect(() => {
    fetch('http://127.0.0.1:8000/api/dashboard/futureEvent/1')
      .then(response => response.json())
			.then(result => console.log(result));
      //.then(result => setIssuesData(result));
  })

	return (
		<div>
			<IssueDate date="2021-07-08 16:00:00.000000"/>
			<IssueMessage incidentType="defective_air_conditioning" company="Solar" classroomName="110" classroomZone="B"/>
		</div>
	)
}

export default IssueInformation;