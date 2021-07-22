import React, { useEffect, useState, useRef } from "react";
import { Line } from 'react-chartjs-2';

const sensorsHistoryLineChart = ({ nodeID, graph }) => {
  const [dataSensors, setDataSensors] = useState(false)
  const [timeXAxe, setTimeXAxe] = useState(false)
  const [humidityDataGraph, setHumidityDataGraph] = useState(false)
  const [heatDataGraph, setHeatDataGraph] = useState(false)
  const [windDataGraph, setWindDataGraph] = useState(false)
  const [dataGraph, setDataGraph] = useState([])

  useEffect(() => {
    Promise.all([
      fetch(`${import.meta.env.VITE_API_URL}api/influx/graphSensor/${nodeID}/Pression`),
      fetch(`${import.meta.env.VITE_API_URL}api/influx/graphSensor/${nodeID}/Humidité`),
      fetch(`${import.meta.env.VITE_API_URL}api/influx/graphSensor/${nodeID}/Temperature`)
    ]).then((responses) => (
      Promise.all(responses.map((response) => (
        response.json()
      )))
    )).then(json => (
      setDataSensors(json)
    )).catch((error) => (
      console.log(error)
    ));
  }, [nodeID]);

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

  const dataGraphObject = {
    labels: timeXAxe,
    datasets: [{
      label: graph,
      data: '',
      fill: true,
      backgroundColor: '',
      borderColor: '',
    }],
  };

  useEffect(() => {
    if (graph === "Température") {
      dataGraphObject.datasets[0].data = heatDataGraph;
      dataGraphObject.datasets[0].backgroundColor = '#FF6384';
      dataGraphObject.datasets[0].borderColor = 'rgba(255, 99, 132, 0.2)';
    } else if (graph === "Humidité") {
      dataGraphObject.datasets[0].data = humidityDataGraph;
      dataGraphObject.datasets[0].backgroundColor = '#EFE362';
      dataGraphObject.datasets[0].borderColor = 'rgba(255, 99, 132, 0.2)';
    } else {
      dataGraphObject.datasets[0].data = windDataGraph;
      dataGraphObject.datasets[0].backgroundColor = '#626EEF';
      dataGraphObject.datasets[0].borderColor = 'rgba(255, 99, 132, 0.2)';
    }
    setDataGraph(dataGraphObject)
  }, [graph, heatDataGraph, humidityDataGraph, windDataGraph])

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
        displayColors: false,
        callbacks: {
          label: function (label) {
            if (graph === "Température") {
              return `${label.dataset.label}: ${label.formattedValue}°C`;
            } else if (graph === "Humidité") {
              return `${label.dataset.label}: ${label.formattedValue}%`;
            } else {
              return `${label.dataset.label}: ${label.formattedValue} hPa`;
            }
          }
        }
      }
    },
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: function () {
            if (graph === "Température") {
              return `${graph} en °C`;
            } else if (graph === "Humidité") {
              return `${graph} en %`;
            } else {
              return `${graph} en hPa`;
            }
          },
          align: 'end',
          color: '#040726',
          font: {
            size: 13,
            style: 'normal',
            weight: 'bold'
          },
        }
      }
    },
  };

  return (
    <>
      <Line height={120} data={dataGraph} options={options} />
    </>
  );
};

export default sensorsHistoryLineChart
