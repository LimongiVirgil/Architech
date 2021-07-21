import React from 'react';
import Card from '../../templates/card'
import SensorsTable from '../../molecules/sensorsTable/sensorsTable';
import SensorsHistoryLineChart from '../../atoms/sensorsHistoryLineChart/sensorsHistoryLineChart';

const LiveSensorsData = () => {

	return(
		<>
			<Card>
				<SensorsTable />
			</Card>
			<Card>
				<SensorsHistoryLineChart nodeID="042101"/>
			</Card>
		</>
	)
}

export default LiveSensorsData;