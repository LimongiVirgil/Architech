import React from 'react'
import { Menu } from '@headlessui/react'
import TagsIncidents from './../../atoms/tagsIncidents/TagsIncidents';
import LocalisationIncidents from "./../../atoms/localisationIncidents/LocalisationIncidents";
import IssueDate from "./../../atoms/issueDate/IssueDate";


const ListIncidentsTypes = ({ incidents, type }) => {
  console.log("type: ", type)
  console.log("list classroom zone: ", incidents[type][0].classroom_zone)
  console.log("incidents: ", incidents)

  
return(
  <Menu.Items
  static
  className="list-incidents relative focus:outline-none"
>
  <div>
  {incidents[type].map((item, key) => (
    <Menu.Item key={key}>
        <div className="incidents">
          <IssueDate size="small" date={item.incident_date} />
          <LocalisationIncidents 
            cssClass="localisation-incidents" 
            text={`${item.classroom_zone} + ${item.classroom_floor}`} 
          />
          <div className="tagContainer">
            <TagsIncidents cssClass="tag-status" text={item.incident_status} />
          </div>
        </div>
    </Menu.Item>
  ))}
  </div>
</Menu.Items>
    )
}

export default ListIncidentsTypes;