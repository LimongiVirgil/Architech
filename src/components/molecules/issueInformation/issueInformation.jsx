import React, { useEffect, useState } from 'react';
import IssueMessage from '../../atoms/issueMessage/issueMessage'
import IssueDate from '../../atoms/issueDate/issueDate'

const IssueInformation = () => {
	const [issuesData, setIssuesData] = useState(false)

	useEffect(() => {
    fetch('https://architech-hetic.herokuapp.com/api/dashboard/futureEvent/1')
      .then(response => response.json())
      .then(result => setIssuesData(result));
  }, [])

	return (
		<>
			{issuesData && issuesData.map((issue, index) => (
				<div key={index} className="messageContainer">
					<IssueDate date={"2021-07-04 14:00:00.000000"} />
					<IssueMessage 
						incidentType={issue.incident_type}
						company={issue.intervention_company}
						classroomName={issue.classroom_name}
						classroomZone={issue.classroom_zone}
					/>
				</div>
			))}
		</>
	)
}

export default IssueInformation;
