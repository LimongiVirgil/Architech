import React, { useRef ,useState  } from 'react'
import ListIncidentsTypes from './../../molecules/ListIncidentsTypes/ListIncidentsTypes';
import { Menu, Transition } from '@headlessui/react'

const DropDownIncidentsTypes = () => {
return (
    <Menu as="div" className="dropdownIncidents relative inline-block text-left">
      {({ open }) => (
        <>
          <div className="dropdownHeader">
            <div>
              <h3>Fuite de châleur</h3>
              <p>13 incidents</p>
            </div>
            <Menu.Button className="dropdownButton">
              Ouvrir le volet
            </Menu.Button>
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
              < ListIncidentsTypes />
            </Transition.Child>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default DropDownIncidentsTypes;