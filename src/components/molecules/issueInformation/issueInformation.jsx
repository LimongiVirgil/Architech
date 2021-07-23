import React, {useEffect, useState} from 'react'
import IssueMessage from '../../atoms/issueMessage/issueMessage'
import IssueDate from '../../atoms/issueDate/issueDate'

const IssueInformation = ({ issue }) => {
  const [classrooms, setClassrooms] = useState(false)

  useEffect(() => {
    let listClassrooms = "";

    issue.incidents.map(incident => {
      listClassrooms += `${incident.classroom_zone}${incident.classroom_name} `;
    })

    setClassrooms(listClassrooms)
  })

  return (
    <>
      {issue && (
        <div className="messageContainer">
          <IssueDate date={issue.intervention_datetime} />
          <IssueMessage 
            incidentType={issue.intervention_type}
            company={issue.intervention_company}
            classroomZone={classrooms}
          />
        </div>
      )}
    </>
  )
}

export default IssueInformation;
