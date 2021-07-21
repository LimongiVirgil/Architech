import React from 'react'
import { Disclosure } from '@headlessui/react'
import LocalisationIncidents from '../../atoms/localisationIncidents/LocalisationIncidents'

const AgendaListIssues = () => {
return(
  <Disclosure.Panel
    className="list-issues relative focus:outline-none"
  >
    <div>
      <div className="issues">
        <LocalisationIncidents 
          cssClass="localisation-incidents" 
          text="A103" 
        />
        <span className="issues-report">2 incidents relevés</span>
      </div>
    </div>
  </Disclosure.Panel>
    )
}

export default AgendaListIssues;
