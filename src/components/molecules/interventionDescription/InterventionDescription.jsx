import React, {useEffect, useState} from 'react'
import InterventionMessage from '../../atoms/interventionMessage/InterventionMessage'
import EventDate from '../../atoms/eventDate/EventDate'

const InterventionDescription = ({ issue }) => {
  const [classrooms, setClassrooms] = useState(false)

  useEffect(() => {
    let listClassrooms = "";

    issue.incidents.forEach(incident => {
      listClassrooms += `${incident.classroom_zone}${incident.classroom_name}, `;
    })
    listClassrooms = listClassrooms.slice(0, -2) + ' '

    setClassrooms(listClassrooms)
  })

  return (
    <>
      {issue && (
        <div className="messageContainer">
          <EventDate date={issue.intervention_datetime.date ? issue.intervention_datetime.date : issue.intervention_datetime} />
          <InterventionMessage 
            incidentType={issue.intervention_type}
            company={issue.intervention_company}
            classroomsList={classrooms}
          />
        </div>
      )}
    </>
  )
}

export default InterventionDescription;
