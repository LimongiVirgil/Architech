import React, { useEffect, useState } from 'react';
import IssueMessage from '../../atoms/issueMessage/issueMessage'
import IssueDate from '../../atoms/issueDate/issueDate'

const IssueInformation = () => {
	const [issuesData, setIssuesData] = useState(false)

	useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/dashboard/futureEvent/1`)
      .then(response => response.json())
      .then(result => setIssuesData(result));
  }, [])

	return (
		<>
			{issuesData && issuesData.map((issue, index) => (
				<div key={index} className="messageContainer">
					<IssueDate date={issue.intervention_datetime.date} />
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
