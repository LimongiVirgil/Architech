import React, { useState } from 'react'
import { Menu } from '@headlessui/react'


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
          <span>Jeu 15 juil. à 15h45 </span>
          <span>A103</span>
          <span className="tagStatus">Nouvel incident</span>
        </div>
    </Menu.Item>
  </div>
  <div>
    <Menu.Item>
      
        <div
          className="incidents"
        >
          <span>Jeu 15 juil. à 14h45</span>
          <span>A103</span>
          <span className="tagStatus">en cours de traitement</span>
        </div>
    </Menu.Item>
  </div>
  
  <div>
    <Menu.Item>
      
        <div
          className="incidents"
        >
          <span>Jeu 15 juil. à 13h45</span>
          <span>A103</span>
          <span className="tagStatus">Intervention prévue</span>
        </div>
    </Menu.Item>
  </div>
</Menu.Items>
    )
}

export default ListIncidentsTypes;