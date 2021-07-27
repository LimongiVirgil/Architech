import React, {useEffect, useState, useRef, useReducer} from 'react'
import axios from 'axios'
import CellTable from '../../atoms/cellTable/cellTable'
import Loader from '../../atoms/loader/loader'
import { hydratation } from '../../../utils'
import SwapInactive from '../../../assets/icons/swapInactive.svg'
import SwapActive from '../../../assets/icons/swapActive.svg'

const SensorsTable = ({handleClick, graphOpened, nodeID}) => {
  const [sensorsData, setSensorsData] = useState(false)
  const [dataError, setDataError] = useState(false)
  const [orderdBy, setOrderdBy] = useState()
  const [prevOrderedType, setPrevOrderedType] = useState("")
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const heatIcon = useRef();
  const humidityIcon = useRef();
  const windIcon = useRef();

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

  const sortData = (type) => (
    sensorsData.sort((a, b) => {
      let valueA;
      let valueB;

      a.forEach(sensor => {
        if (sensor.type === type) {
          return valueA = sensor.value
        }
      })

      b.forEach(sensor => {
        if (sensor.type === type) {
          return valueB = sensor.value
        }
      })

      return valueA - valueB
    }
  ))

  const sortTable = (type, orderBy) => {
    let sortedData = [];

    if (orderBy) {
      sortedData = sortData(type);
    } else {
      sortedData = sortData(type);
      sortedData.reverse();
    }

    setSensorsData(sortedData)
    forceUpdate();
  }

  const handleSortTable = (type, currRef) => {
    if (sensorsData) {
      heatIcon.current.src = SwapInactive;
      humidityIcon.current.src = SwapInactive;
      windIcon.current.src = SwapInactive;
      currRef.src = SwapActive

      if (prevOrderedType === "" || prevOrderedType !== type) {
        setPrevOrderedType(type);
        setOrderdBy(true);
      } else {
        setOrderdBy(!orderdBy)
      }

      if (orderdBy) {
        currRef.style.transform = "rotate(0deg)"
      } else {
        currRef.style.transform = "rotate(180deg)"
      }

      sortTable(type, orderdBy)
    }
  }

  return (
    <>
      <table className={`sensorTable ${graphOpened ? 'graphOpened' : ''} `}>
        <thead>
          <tr>
            <th>Localisation</th>
            <th onClick={() => handleSortTable('Temperature', heatIcon.current)}>
              Température
              <img ref={heatIcon} src={SwapInactive} alt='icone trie'/>
            </th>
            <th onClick={() => handleSortTable('Humidité', humidityIcon.current)}>
              Humidité
              <img ref={humidityIcon} src={SwapInactive} alt='icone trie'/>
            </th>
            <th onClick={() => handleSortTable('Pression', windIcon.current)}>
              Vent
              <img ref={windIcon} src={SwapInactive} alt='icone trie'/>
            </th>
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
