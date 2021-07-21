import React from 'react';

const CellTable = ({node, cssClass}) => {
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
    <tr className={`sensorCell ${cssClass}`}>
      <td>{classRoom}</td>
			<td>{heat}°</td>
			<td>{humidity} %</td>
			<td>{wind} hPa</td>
    </tr>
	)
}

export default CellTable;