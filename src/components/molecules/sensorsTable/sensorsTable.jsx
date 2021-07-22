import React, {useEffect, useState} from 'react';
import CellTable from '../../atoms/cellTable/cellTable'

const SensorsTable = ({handleClick, graphOpened, nodeID}) => {
  const [sensorsData, setSensorsData] = useState(false)

  const hydratation = (objectData) => {
    var hydratedData = [];

    for (const [key, value] of Object.entries(objectData)) {
      hydratedData.push(value)
    }

    return hydratedData;
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/influx`)
    .then(response => response.json())
    .then(result => setSensorsData(hydratation(result)));
  }, [])

  return (
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
        {(!sensorsData || typeof sensorsData[0] === 'string') && 
          <tr className="noDataFound">
            <td colSpan="4">Aucune donnée trouvé</td>
          </tr>
        }
      </tbody>
    </table>
  )
}

export default SensorsTable;
