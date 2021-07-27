import React, { useRef, useEffect } from 'react'

const CellTable = ({node, cssClass, handleClick, nodeID}) => {
  const cell = useRef()

  useEffect(() => {
    customSelectedSensor();
  }, [nodeID, node])

  const customSelectedSensor = () => {
    if (nodeID === node[0].node_id) {
      cell.current.setAttribute('active', 'active');
    } else {
      cell.current.setAttribute('active', '');
    }
  }

  var classRoom = node[0].node_id.substring(node[0].node_id.length - 3)
  var heat = 0;
  var humidity = 0;
  var wind = 0;

  node.map((sensor) => {
    if (sensor.type === "Temperature") {
      heat = sensor.value
    } else if (sensor.type === "Humidité") {
      humidity = sensor.value
    } else {
      wind = sensor.value
    }
  })

  return (
    <tr
      ref={cell} 
      className={`sensorCell${cssClass ? ' ' + cssClass : ''}`}
      onClick={() => { 
        handleClick(node[0].node_id);
      }}
    >
      <td>{classRoom}</td>
      <td>{heat}°C</td>
      <td>{humidity} %</td>
      <td>{wind} hPa</td>
    </tr>
  )
}

export default CellTable;
