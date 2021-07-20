import React from "react";
import IncidentsOfTheMonth from "./components/organisms/incidentsOfTheMonth/incidentsOfTheMonth";
import CommingIssue from './components/organisms/commingIssue/commingIssue'
import EstablishmentInfo from './components/organisms/establishmentInfo/establishmentInfo'

function App() {
  return (
    <div className="App">
      <IncidentsOfTheMonth />
      <CommingIssue />
      <EstablishmentInfo />
    </div>
  );
}

export default App;
