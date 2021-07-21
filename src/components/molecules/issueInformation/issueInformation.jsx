import React from 'react'
import IssueMessage from '../../atoms/issueMessage/issueMessage'
import IssueDate from '../../atoms/issueDate/issueDate'

const IssueInformation = ({ issue }) => {
  return (
    <>
      {issue && (
        <div className="messageContainer">
          <IssueDate date={issue.intervention_datetime.date} />
          <IssueMessage 
            incidentType={issue.incident_type}
            company={issue.intervention_company}
            classroomName={issue.classroom_name}
            classroomZone={issue.classroom_zone}
          />
        </div>
      )}
    </>
  )
}

export default IssueInformation;
