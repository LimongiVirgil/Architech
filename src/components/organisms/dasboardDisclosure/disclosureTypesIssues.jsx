import React from 'react'
import ListIncidentsTypes from '../../molecules/listIssuesTypes/listIssuesTypes' 
import { Disclosure, Transition } from '@headlessui/react'

const incidentTitle = {
  high_humidity: 'Haute humidité',
  heat_leak: 'Fuite de châleur',
  defective_air_conditioning: 'Air conditionnée',
};

const DisclosureTypesIssues = ({ incidents, isOpen, type, setter, initialState }) => {
  const showDisclosure = () => {
    setter({
      ...initialState,
      [type]: true
    })
  }

  return (
    <>
      <Disclosure
        as="div"
        className="disclosure-issues relative inline-block text-left"
      >
        <>
          <div className="disclosure-header">
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
            <div onClick={showDisclosure} >
              <Disclosure.Button className="button-disclosure">
                {isOpen ? "Fermer le volet" : "Ouvrir le volet"}
              </Disclosure.Button>
            </div>
          </div>
          <div className="detailed-informations">
            <span className="statement-date">Date de relevé</span>
            <span className="localisation-incidents">Localisation</span>
            <span className="status-incidents">Statut</span>
          </div>

          <Transition show={ type === 'high_humidity' ? !isOpen : isOpen}>
            <Transition.Child
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <ListIncidentsTypes type={type} incidents={incidents} />
            </Transition.Child>
          </Transition>
        </>
      </Disclosure>
    </>
  );
};

export default DisclosureTypesIssues;
