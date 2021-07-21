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