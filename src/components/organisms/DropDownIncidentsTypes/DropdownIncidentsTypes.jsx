import React, { useRef ,useState  } from 'react'
import ListIncidentsTypes from '../../molecules/listIncidentsTypes/ListIncidentsTypes';
import { Menu, Transition } from '@headlessui/react'

const DropDownIncidentsTypes = () => {
  const mockHeatLeakIncidents = [
    {
      incident_id: 3,
      incident_title: "incident salle B106",
      incident_date:"2021-07-07 08:05:06",
      incident_type: "heat_leak",
      incident_status: "finish",
      classroom_name: "106",
      classroom_floor: 1,
      classroom_zone: "B",
    },
    {
      incident_id: 22,
      incident_title: "incident salle A204",
      incident_date:"2020-07-07 15:06:56",
      incident_type: "heat_leak",
      incident_status: "assign",
      classroom_name: "204",
      classroom_floor: 2,
      classroom_zone: "A",
    },
    {
      incident_id: 23,
      incident_title: "incident salle A205",
      incident_date:"2020-07-07 13:06:56",
      incident_type: "heat_leak",
      incident_status: "finish",
      classroom_name: "205",
      classroom_floor: 2,
      classroom_zone: "A",
    },

  ]
return (
    <Menu as="div" className="dropdown-incidents relative inline-block text-left">
      {({ open }) => (
        <>
          <div className="dropdown-header">
            <div>
              <h3>Fuite de châleur</h3>
              <p>{mockHeatLeakIncidents.length} incidents</p>
            </div>
            <Menu.Button className="button-dropdown">
              { open ? "Ouvrir le volet" : "Fermer le volet"}
            </Menu.Button>
          </div>

          <div className="detailed-informations">
            <span className="statement-date"> Date de relevé </span> 
            <span> Localisation </span> 
            <span> Statut </span>
          </div>

          <Transition
            show={open}
          >
            <Transition.Child
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            > 
            {
              mockHeatLeakIncidents.map((incidentItem)=>{
                return(
                  < ListIncidentsTypes incidents={incidentItem} key={incidentItem.incident_id} />
                )
              })
            }
            
            </Transition.Child>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default DropDownIncidentsTypes;