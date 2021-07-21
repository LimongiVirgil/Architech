import React, { useEffect, useState, useRef } from "react";
import { Line } from 'react-chartjs-2';
import Title from '../../atoms/title/title'

const sensorsHistoryLineChart = ({nodeID}) => {
	const [dataSensors, setDataSensors] = useState(false)
	const [timeXAxe, setTimeXAxe] = useState(false)
	const [humidityDataGraph, setHumidityDataGraph] = useState(false)
	const [heatDataGraph, setHeatDataGraph] = useState(false)
	const [windDataGraph, setWindDataGraph] = useState(false)
	const [whichGraph, setWhichGraph] = useState("Température")

	const humidityButton = useRef();
	const heatButton = useRef();
	const windButton = useRef();

  useEffect(() => {
		Promise.all([
			fetch(`${import.meta.env.VITE_API_URL}api/influx/graphSensor/${nodeID}/Pression`), 
			fetch(`${import.meta.env.VITE_API_URL}api/influx/graphSensor/${nodeID}/Humidité`), 
			fetch(`${import.meta.env.VITE_API_URL}api/influx/graphSensor/${nodeID}/Temperature`) 
		]).then((responses) => (
			Promise.all(responses.map((response) => (
				response.json()
			)))
		)).then(hydratedData => (
			setDataSensors(hydratedData)
		)).catch((error) => (
			console.log(error)
		));
  }, []);

	useEffect(() => {
		var time = [];
		var humidityDataArray = [];
		var heatDataArray = [];
		var windDataArray = [];

		if (dataSensors[0]) {
			dataSensors[0][`${nodeID}`].map(item => {
				let splitedDate = item.date.indexOf(" ");
				let dateTime = item.date.substr(splitedDate + 1);
				let formatedTime = dateTime.substring(0, 5);

				time.push(formatedTime)
				windDataArray.push(item.value)
			})
			dataSensors[1][`${nodeID}`].map(item => {
				humidityDataArray.push(item.value)
			})
			dataSensors[2][`${nodeID}`].map(item => {
				heatDataArray.push(item.value)
			})
			setTimeXAxe(time)
			setHumidityDataGraph(humidityDataArray)
			setHeatDataGraph(heatDataArray)
			setWindDataGraph(windDataArray)
		}
	}, [dataSensors])

	const dataHeatGraph = {
		labels: timeXAxe,
		datasets: [
			{
				label: 'Température',
				data: heatDataGraph,
				fill: true,
				backgroundColor: '#FF6384',
				borderColor: 'rgba(255, 99, 132, 0.2)',
			}
		],
	};

	const dataHumidityGraph = {
		labels: timeXAxe,
		datasets: [
			{
				label: 'Humidité',
				data: humidityDataGraph,
				fill: true,
				backgroundColor: '#EFE362',
				borderColor: 'rgba(255, 99, 132, 0.2)',
			}
		],
	};

	const dataWindGraph = {
		labels: timeXAxe,
		datasets: [
			{
				label: 'Vent',
				data: windDataGraph,
				fill: true,
				backgroundColor: '#626EEF',
				borderColor: 'rgba(255, 99, 132, 0.2)',
			},
		],
	};
	
	const options = {
		plugins: {
			legend: {
        display: false
			}
		},
		scales: {
			y: {
				display: true,
				title: {
					display: true,
					text: whichGraph,
				}
			}
		}
	};

	const changeGraph = (name, currRef) => {
		setWhichGraph(name);
		heatButton.current.className = '';
		humidityButton.current.className = '';
		windButton.current.className = '';
		currRef.className = "active";
	}

  return (
		<div className="chartLine">
			<div className="headChart">
				<Title cssClass="card-title">Salle {nodeID.substring(nodeID.length - 3)}</Title>
				<div className="chartButtons">
					<div ref={heatButton} className="active" onClick={() => changeGraph('Température', heatButton.current)}>
						<p>Température</p>
					</div>
					<div ref={humidityButton} onClick={() => changeGraph('Humidité', humidityButton.current)}>
						<p>Humidité</p>
					</div>
					<div ref={windButton} onClick={() => changeGraph('Vent', windButton.current)}>
						<p>Vent</p>
					</div>
				</div>
				<span>Fermer le volet</span>
			</div>
			{whichGraph === "Température" && <Line data={dataHeatGraph} options={options} />}
			{whichGraph === "Humidité" && <Line data={dataHumidityGraph} options={options} />}
			{whichGraph === "Vent" && <Line data={dataWindGraph} options={options} />}
		</div>
  );
};

export default sensorsHistoryLineChart
