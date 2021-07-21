import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import CalendarDetailsIssues from '../../molecules/calendarListIssues/calendarListIssues'
import CalendarContactCard from '../../molecules/calendarContactCard/calendarContactCard';

const incidentTitle = {
  high_humidity: 'Haute humidité',
  heat_leak: 'Fuite de châleur',
  defective_air_conditioning: 'Air conditionnée',
};

const CalendarDisclosure = ({ type }) => {

  return (
    <>
      <Menu
        as="div"
        className="disclosure-incidents relative inline-block text-left"
      >
        {({ open }) => (
          <>
            <div className="disclosure-header">
              <div>
                <h3>{incidentTitle[type]}</h3>
                <p> 13 incidents </p>
              </div>
              <Menu.Button className="button-disclosure">
                {open ? "Fermer le détail" : "Voir les détail"}
              </Menu.Button>
            </div>

            <Transition show={open}>
              <Transition.Child
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <CalendarDetailsIssues />
                <CalendarContactCard />
              </Transition.Child>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};

export default CalendarDisclosure;
