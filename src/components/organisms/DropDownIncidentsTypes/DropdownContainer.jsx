import React, { useEffect ,useState  } from 'react'
import axios from 'axios';
import DropDownIncidentsTypes from './DropDownIncidentsTypes';

export const DropdownContainer = () => {
  const [incidentsTypeData, setIncidentsTypeData ] = useState([])
  const SENSOR_TYPES  = ['high_humidity',
    'heat_leak',
    'defective_air_conditioning'
  ]

  useEffect(() => {
    getIncindentsType()
  }, [])

  const getIncindentsType =  async () => {
    try {
      const response = await axios.get(`https://architech-hetic.herokuapp.com/api/dashboard/statsincidents/1`)
      setIncidentsTypeData(response.data.incidents)
    }
    catch (err) {
      console.log(err)
    }
  }
  console.log(incidentsTypeData)

 
return (
    <>
        {
            SENSOR_TYPES.map((sensorType, key) => 
                <DropDownIncidentsTypes key={key} type={sensorType} incidents={incidentsTypeData} />
                // <div key={key}>
                //     {sensorType}
                // </div>
            )
        }
    </>
)
}
