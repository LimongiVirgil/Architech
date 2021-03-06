import React, { useState } from 'react'
import Card from '../../templates/card/Card'
import SensorsTable from '../../molecules/sensorsTable/sensorsTable'
import LineChartCard from '../../molecules/lineChartCard/lineChartCard'

const LiveSensorsData = () => {
  const [node, setNode] = useState(false)
  const [graphOpened, setGraphOpened] = useState(false)

  const handleCellClick = (currNode) => {
    setNode(currNode)
    setGraphOpened(true)
  }

  const handleCloseGraph = () => {
    setGraphOpened(false)
    setNode(false)
  }

  return(
    <>
      <Card className='sensorsCard'>
        <SensorsTable 
          handleClick={handleCellClick} 
          graphOpened={graphOpened} 
          nodeID={node}
        />
      </Card>
      {node && graphOpened &&
        <Card>
          <LineChartCard 
            nodeID={node} 
            handleCloseGraph={handleCloseGraph}
          />
        </Card>
      }
    </>
  )
}

export default LiveSensorsData;
