import React, { useState } from 'react'
import CommingIssue from './components/organismes/commingIssue/commingIssue'
import { DropdownContainer } from './components/organismes/DropDownIncidentsTypes/DropdownContainer'
import EstablishmentInfo from './components/organismes/establishmentInfo/establishmentInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
      </header>
      <CommingIssue />
      <EstablishmentInfo />
      <DropdownContainer />
    </div>
  )
}

export default App
