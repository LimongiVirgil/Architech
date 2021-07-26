import React, { useState } from 'react'
import axios from 'axios'
import DisclosureTypesIssues from './disclosureTypesIssues'

const SENSOR_TYPES = [
  'high_humidity',
  'heat_leak',
  'defective_air_conditioning',
]

const neutralOpeningState = SENSOR_TYPES.reduce((accu, sensor) => ({
  ...accu,
  [sensor] : false
}), {}) 

const initialOpeningState = SENSOR_TYPES.reduce((accu, sensor) => ({
  ...accu,
  [sensor] : sensor === 'high_humidity' ? true : false
}), {}) 

const DasboardDisclosure = ({ incidentsOfTheMonth }) => {
  const [disclosureIds, setDisclosureIds] = useState(initialOpeningState)

  const disclosureCallback = (value) => {
    setDisclosureIds(value)
  }

  return (
    <div>
      {incidentsOfTheMonth &&
        Object.entries(disclosureIds).map(
          ([key, value]) => (
            <DisclosureTypesIssues
              key={key}
              type={key}
              isOpen={value}
              setter={disclosureCallback}
              initialState={neutralOpeningState}
              incidents={incidentsOfTheMonth}
            />
          )
        )}
    </div>
  )
}

export default DasboardDisclosure
