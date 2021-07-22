import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisclosureTypesIssues from './disclosureTypesIssues'

const SENSOR_TYPES = [
  'high_humidity',
  'heat_leak',
  'defective_air_conditioning',
];

const initialOpeningState = SENSOR_TYPES.reduce((accu, sensor) => ({
  ...accu,
  [sensor] : false
}), {}) 

const DasboardDisclosure = () => {
  const [dataTypeIncidents, setDataTypeIncidents] = useState([]);
  const [disclosureIds, setDisclosureIds] = useState(initialOpeningState)

  const disclosureCallback = (value) => {
    setDisclosureIds(value)
  }

  useEffect(() => {
    getIncindentsType();
  }, []);

  const getIncindentsType = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}api/dashboard/statsincidents/1`
      );
      setDataTypeIncidents(response.data.incidents);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {dataTypeIncidents &&
        Object.entries(disclosureIds).map(
          ([key, value]) => (
            <DisclosureTypesIssues
              key={key}
              type={key}
              isOpen={value}
              setter={disclosureCallback}
              initialState={initialOpeningState}
              incidents={dataTypeIncidents}
            />
          )
        )}
    </div>
  );
};

export default DasboardDisclosure;
