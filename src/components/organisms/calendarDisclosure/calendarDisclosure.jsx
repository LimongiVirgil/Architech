import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import CalendarDetailsIssues from '../../molecules/calendarListIssues/calendarListIssues'
import CalendarContactCard from '../../molecules/calendarContactCard/calendarContactCard';

const incidentTitle = {
  high_humidity: 'Haute humidité',
  heat_leak: 'Fuite de châleur',
  defective_air_conditioning: 'Air conditionnée',
};

const CalendarDisclosure = ({ isOpen,  type, setter, initialState }) => {

  const showDisclosure = () => {
    setter({
      ...initialState,
      [type]: !isOpen
    })
  }
  return (
    <>
      <Disclosure
        as="div"
        className="disclosure-incidents relative inline-block text-left"
      >
          <>
            <div className="disclosure-header" onClick={showDisclosure} >
              <div>
                <h3>{incidentTitle[type]}</h3>
                <p> 13 incidents </p>
              </div>
              <Disclosure.Button className="button-disclosure" >
                {isOpen ? "Fermer le détail" : "Voir les détail"}
              </Disclosure.Button>
            </div>

            <Transition 
              show={isOpen}
            >
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
      </Disclosure>
    </>
  );
};

export default CalendarDisclosure;
