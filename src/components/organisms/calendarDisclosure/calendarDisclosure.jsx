import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import ChevronIcon from '../../../assets/icons/chevron.svg'
import CalendarDetailsIssues from '../../molecules/calendarListIssues/calendarListIssues'
import CalendarContactCard from '../../molecules/calendarContactCard/calendarContactCard'

const incidentTitle = {
  high_humidity: 'Humidité élevée',
  heat_leak: 'Fuite de châleur',
  defective_air_conditioning: 'Climatisation défectueuse',
};

const CalendarDisclosure = ({ issueTypeData, isOpen, type, setter, initialState, actionCallback }) => {

  const numberIncidents = (issueTypeData && issueTypeData.incidents && issueTypeData.incidents.length) || 0
  const showDisclosure = () => {
    setter({
      ...initialState,
      [type]: !isOpen
    })
  }

  return (
    <Disclosure
      as="div"
      className="disclosure-incidents relative inline-block text-left"
    >
      <div className="disclosure-header" onClick={showDisclosure} >
        <div>
          <h3>{incidentTitle[type]}</h3>
          <p>{numberIncidents} {numberIncidents > 1 ? 'incidents' : 'incident'}</p>
        </div>
        <Disclosure.Button className="button-disclosure" >
          {isOpen ? "Fermer le détail" : "Voir le détail"}
          <img src={ChevronIcon} alt="chevron icon" />
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
          <CalendarDetailsIssues issues={issueTypeData.incidents}/>
          <CalendarContactCard company={issueTypeData.company} actionCallback={actionCallback} />
        </Transition.Child>
      </Transition>
    </Disclosure>
  );
};

export default CalendarDisclosure;
