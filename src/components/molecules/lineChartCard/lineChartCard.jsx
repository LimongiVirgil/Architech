import React, { useState, useRef } from 'react'
import Title from '../../atoms/title/title'
import SensorsHistoryLineChart from '../../atoms/sensorsHistoryLineChart/sensorsHistoryLineChart'
import CrossCloseIcon from '../../../assets/icons/crossClose.svg'

const sensorsHistoryLineChart = ({nodeID, handleCloseGraph}) => {
  const [whichGraph, setWhichGraph] = useState("Température")

  const humidityButton = useRef();
  const heatButton = useRef();
  const windButton = useRef();

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
        <Title tage="h2" cssClass="card-title">Salle {nodeID.substring(nodeID.length - 3)}</Title>
        <div className="chartButtons">
          <div ref={heatButton} className="active" onClick={() => changeGraph('Température', heatButton.current)}>
            <p>Température</p>
          </div>
          <div ref={humidityButton} onClick={() => changeGraph('Humidité', humidityButton.current)}>
            <p>Humidité</p>
          </div>
          <div ref={windButton} onClick={() => changeGraph('Vent', windButton.current)}>
            <p>Pression</p>
          </div>
        </div>
        <div onClick={() => handleCloseGraph()}>
          <span>Fermer le volet</span>
          <img src={CrossCloseIcon} alt="cross close icon"/>
        </div>
      </div>
      <SensorsHistoryLineChart nodeID={nodeID} graph={whichGraph}/>
    </div>
  );
};

export default sensorsHistoryLineChart
