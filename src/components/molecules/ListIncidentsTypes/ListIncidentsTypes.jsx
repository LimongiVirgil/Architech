import React from 'react'
import { Menu } from '@headlessui/react'
import TagsIncidents from './../../atoms/tagsIncidents/TagsIncidents';
import LocalisationIncidents from "./../../atoms/localisationIncidents/LocalisationIncidents";
import IssueDate from "./../../atoms/issueDate/IssueDate";


const ListIncidentsTypes = () =>{

return(
  <Menu.Items
  static
  className="list-incidents relative focus:outline-none"
>
  <div>
    <Menu.Item>
        <div
          className="incidents"
        >
            <IssueDate size="small" date="2021-07-04 14:00:00.000000" />
          <LocalisationIncidents cssClass="localisation-incidents" text={"mock"} />
          <div className="tagContainer">
            <TagsIncidents cssClass="tag-status" text={"mock"} />
          </div>
        </div>
    </Menu.Item>
  </div>
</Menu.Items>
    )
}

export default ListIncidentsTypes;