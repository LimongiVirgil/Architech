import React, { useState } from 'react'
import { Menu } from '@headlessui/react'
import TagsIncidents from './../../atoms/tagsIncidents/TagsIncidents';
import DateIncidents from './../../atoms/dateIncidents/DateIncidents';
import LocalisationIncidents from "./../../atoms/localisationIncidents/LocalisationIncidents";


const ListIncidentsTypes = () =>{

return(
  <Menu.Items
  static
  className="listIncidents relative focus:outline-none"
>
  <div>
    <Menu.Item>
      
        <div
          className="incidents"
        >
          <DateIncidents cssClass="date-incidents" text="Jeu 15 juil. à 15h45" />
          <LocalisationIncidents cssClass="localisation-incidents" text="A103" />
          <div className="tagContainer">
            <TagsIncidents cssClass="tag-status" text="Nouvel incident" />
          </div>
        </div>
    </Menu.Item>
  </div>
  <div>
    <Menu.Item>
      
        <div
          className="incidents"
        >
          <DateIncidents cssClass="date-incidents" text="Jeu 15 juil. à 14h45" />
          <LocalisationIncidents cssClass="localisation-incidents" text="A103" />
          <div className="tagContainer">
            <TagsIncidents cssClass="tag-status" text="en cours de traitement" />
          </div>
        </div>
    </Menu.Item>
  </div>
  
  <div>
    <Menu.Item>
      
        <div
          className="incidents"
        >
          <DateIncidents cssClass="date-incidents" text="Jeu 15 juil. à 13h45" />
          <LocalisationIncidents cssClass="localisation-incidents" text="A103" />
          <div className="tagContainer">
            <TagsIncidents cssClass="tag-status" text="Intervention prévue" />
          </div>
        </div>
    </Menu.Item>
  </div>
</Menu.Items>
    )
}

export default ListIncidentsTypes;