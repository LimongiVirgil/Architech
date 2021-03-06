import React from 'react'
import ListIncidentsTypes from '../../molecules/listIssuesTypes/listIssuesTypes' 
import ChevronIcon  from '../../../assets/icons/chevron.svg'
import { Disclosure, Transition } from '@headlessui/react'

const incidentTitle = {
  high_humidity: 'Humidité élevée',
  heat_leak: 'Fuite de châleur',
  defective_air_conditioning: 'Climatisation défectueuse',
};

const DisclosureTypesIssues = ({ incidents, isOpen, type, setter, initialState }) => {
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
        className="disclosure-issues relative inline-block text-left"
      >
        <div className="disclosure-header" onClick={showDisclosure}>
          <div>
            <h3>{incidentTitle[type]}</h3>
            <p>
              {incidents[type] &&
                `${
                  incidents[type].length > 1
                    ? `${incidents[type].length} incidents`
                    : `${incidents[type].length} incident`
                }`}
            </p>
          </div>
          <Disclosure.Button className="button-disclosure">
            {isOpen ? "Fermer le détail" : "Voir le détail"}
            <img src={ChevronIcon} alt="Calendar icon"/>
          </Disclosure.Button>
        </div>
          <Transition show={isOpen}>
            <Transition.Child
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="detailed-informations">
                <span className="statement-date">Date de relevé</span>
                <span className="localisation-incidents">Localisation</span>
                <span className="status-incidents">Statut</span>
              </div>
              <ListIncidentsTypes type={type} incidents={incidents} />
            </Transition.Child>
          </Transition>
      </Disclosure>
    </>
  );
};

export default DisclosureTypesIssues;
