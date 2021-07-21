import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DropDownIncidentsTypes from './DropdownIncidentsTypes'
import Card from './../../templates/card'

export const DropdownContainer = () => {
  const [dataTypeIncidents, setDataTypeIncidents] = useState([]);
  const SENSOR_TYPES = [
    'high_humidity',
    'heat_leak',
    'defective_air_conditioning',
  ];

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
    <Card>
      {dataTypeIncidents &&
        SENSOR_TYPES.map(
          (sensorType, key) => (
            <DropDownIncidentsTypes
              key={key}
              type={sensorType}
              incidents={dataTypeIncidents}
            />
          )
        )}
    </Card>
  );
};
