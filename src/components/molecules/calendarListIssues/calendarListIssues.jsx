import React from 'react'
import { Menu } from '@headlessui/react'
import LocalisationIncidents from '../../atoms/localisationIncidents/LocalisationIncidents'

const AgendaListIssues = () => {

return(
  <Menu.Items
    static
    className="list-issues relative focus:outline-none"
  >
    <div>
        <Menu.Item >
          <div className="issues">
            <LocalisationIncidents 
              cssClass="localisation-incidents" 
              text="A103" 
            />
            <span className="issues-report">2 incidents relevés</span>
          </div>
        </Menu.Item>
      </div>
  </Menu.Items>
    )
}

export default AgendaListIssues;
