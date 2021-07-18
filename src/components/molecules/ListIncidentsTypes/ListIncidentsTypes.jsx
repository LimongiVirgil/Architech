import React, { useState } from 'react'
import { Menu } from '@headlessui/react'
import TagsIncidents from './../../atoms/tagsIncidents/TagsIncidents';
import DateIncidents from './../../atoms/dateIncidents/DateIncidents';
import LocalisationIncidents from "./../../atoms/localisationIncidents/LocalisationIncidents";


const ListIncidentsTypes = ({ incidents }) =>{

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
          <DateIncidents cssClass="date-incidents" text="Jeu 15 juil. à 15h45" />
          <LocalisationIncidents cssClass="localisation-incidents" text={incidents.classroom_zone + incidents.classroom_floor} />
          <div className="tagContainer">
            <TagsIncidents cssClass="tag-status" text={incidents.incident_status  } />
          </div>
        </div>
    </Menu.Item>
  </div>
</Menu.Items>
    )
}

export default ListIncidentsTypes;