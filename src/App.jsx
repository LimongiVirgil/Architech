import React, { useState } from 'react'
import CommingIssue from './components/organismes/commingIssue/commingIssue'
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
    </div>
  )
}

export default App
