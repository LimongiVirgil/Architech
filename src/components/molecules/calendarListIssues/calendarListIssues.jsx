import React from 'react'
import { Disclosure } from '@headlessui/react'
import LocalisationIncidents from '../../atoms/localisationIssues/localisationIssues'

const calendarListIssues = ({ issues }) => {
  return(
    <Disclosure.Panel
      className="list-issues relative focus:outline-none"
    >
      <div className="issues issues--agenda">
        {issues.length === 0 
          ? <p className="issues-messages"> Aucun incident à examiner </p>
          : issues.map(issue => {
            const issueDate = new Date(issue.incident_date)
            return (
            <div key={issue.incident_id} className="issues__issue">
              <LocalisationIncidents 
                cssClass="localisation-incidents" 
                text={issue.classroom_zone + issue.classroom_name}
              />
              <span className="issues-report">
                {' '} {issueDate.toLocaleDateString('fr-FR', { weekday: 'short',  day: 'numeric', month: 'long',  year: 'numeric'})}
                {' '} à {issueDate.getHours()}h{issueDate.getMinutes()}
              </span>
            </div>
          )})
        }
      </div>
    </Disclosure.Panel>
  )
}

export default calendarListIssues;
