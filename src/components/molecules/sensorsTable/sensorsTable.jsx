import React, {useEffect, useState} from 'react';
import CellTable from '../../atoms/cellTable/cellTable'

const SensorsTable = () => {
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

	const sensorsDatas = {
		"042102": [
			{
				"id": 0,
				"sensor_id": 116,
				"type": "Pression",
				"node_id": "042102",
				"value": 1035.01
			},
			{
				"id": 2,
				"sensor_id": 112,
				"type": "Temperature",
				"node_id": "042102",
				"value": 18.22
			},
			{
				"id": 20,
				"sensor_id": 114,
				"type": "Humidité",
				"node_id": "042102",
				"value": 54.31
			}
		],
		"042207": [
			{
				"id": 0,
				"sensor_id": 201,
				"type": "Pression",
				"node_id": "042107",
				"value": 922.12
			},
			{
				"id": 2,
				"sensor_id": 211,
				"type": "Temperature",
				"node_id": "042107",
				"value": 17.44
			},
			{
				"id": 1,
				"sensor_id": 214,
				"type": "Humidité",
				"node_id": "042107",
				"value": 49.09
			}
		],
		"042208": [
			{
				"id": 0,
				"sensor_id": 201,
				"type": "Pression",
				"node_id": "042108",
				"value": 905.01
			},
			{
				"id": 2,
				"sensor_id": 211,
				"type": "Temperature",
				"node_id": "042108",
				"value": 12
			},
			{
				"id": 1,
				"sensor_id": 214,
				"type": "Humidité",
				"node_id": "042108",
				"value": 64.31
			}
		]
	}

	return (
		<table className="sensorTable">
			<thead>
				<tr>
					<th>Localisation</th>
					<th>Température</th>
					<th>Humidité</th>
					<th>Vent</th>
				</tr>
			</thead>
			<tbody>
				{sensorsData &&
					sensorsData.map((node, index) => (
						<CellTable node={node} key={index} cssClass={index % 2 === 0 ? '' : 'gray'}/>
					))
				}
			</tbody>
		</table>
	)
}

export default SensorsTable;