import React from 'react'
import { Disclosure } from '@headlessui/react'
import TagsIncidents from '../../atoms/tagIssues/tagIssues'
import LocalisationIncidents from '../../atoms/localisationIssues/localisationIssues'
import IssueDate from '../../atoms/issueDate/issueDate'

const tagTitle = {
  assign: 'Intervention programmée',
  in_progress: 'Nouvel incident',
  finish: 'Intervention terminée',
};

const ListIssuesTypes = ({ incidents, type }) => {
return (
  <Disclosure.Panel
    static
    className="list-issues relative focus:outline-none"
  >
  <div>
    {incidents[type] && incidents[type].map((item, key) => (
      <div className="issues" key={key}>
        <IssueDate size="small" date={item.incident_date} />
        <LocalisationIncidents 
          cssClass="localisation-issues" 
          text={item.classroom_zone + item.classroom_floor} 
        />
          <TagsIncidents 
            cssClass={`tag-status ${item.incident_status}`} 
            text={tagTitle[item.incident_status]} 
          />
      </div>
    ))}
    </div>
  </Disclosure.Panel>
  )
}

export default ListIssuesTypes;
