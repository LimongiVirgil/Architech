import React, { useEffect, useState } from 'react'
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

const DasboardDisclosure = () => {
  const [dataTypeIssues, setDataTypeIssues] = useState([]);
  const [disclosureIds, setDisclosureIds] = useState(initialOpeningState)

  const disclosureCallback = (value) => {
    setDisclosureIds(value)
  }

  useEffect(() => {
    getIncindentsType()
  }, [])

  const getIncindentsType = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/dashboard/statsincidents/1`)
      if (!response || !response.data) return
      setDataTypeIssues(response.data.incidents)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      {dataTypeIssues &&
        Object.entries(disclosureIds).map(
          ([key, value]) => (
            <DisclosureTypesIssues
              key={key}
              type={key}
              isOpen={value}
              setter={disclosureCallback}
              initialState={neutralOpeningState}
              incidents={dataTypeIssues}
            />
          )
        )}
    </div>
  );
};

export default DasboardDisclosure
