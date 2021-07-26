import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CellTable from '../../atoms/cellTable/cellTable'
import Loader from '../../atoms/loader/loader'
import { hydratation } from '../../../utils'

const SensorsTable = ({handleClick, graphOpened, nodeID}) => {
  const [sensorsData, setSensorsData] = useState(false)
  const [dataError, setDataError] = useState(false)

  useEffect(() => {
    getSensors()
  }, [])

  const getSensors = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/influx`)
      if (!response || !response.data) return
      setSensorsData(hydratation(response.data))
    } catch (error) {
      console.log(error)
      setDataError(true)
    }
  };

  return (
    <>
      <table className={`sensorTable ${graphOpened ? 'graphOpened' : ''} `}>
        <thead>
          <tr>
            <th>Localisation</th>
            <th>Température</th>
            <th>Humidité</th>
            <th>Vent</th>
          </tr>
        </thead>
        <tbody>
          {sensorsData && typeof sensorsData[0] !== 'string' &&
            sensorsData.map((node, index) => (
              <CellTable 
                node={node} 
                nodeID={nodeID} 
                handleClick={handleClick} 
                key={index} 
                cssClass={index % 2 === 0 ? '' : 'gray'}
              />
            ))
          }
        </tbody>
      </table>
      {(!sensorsData || typeof sensorsData[0] === 'string') && 
        <Loader error={dataError}/>
      }
    </>
  )
}

export default SensorsTable;
