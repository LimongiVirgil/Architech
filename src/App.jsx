import React from "react";
import IncidentsOfTheMonth from "./components/organisms/incidentsOfTheMonth/incidentsOfTheMonth";
import CommingIssue from './components/organisms/commingIssue/commingIssue'
import EstablishmentInfo from './components/organisms/establishmentInfo/establishmentInfo'
import DropDownIncidentsTypes from './components/organisms/DropDownIncidentsTypes/DropdownIncidentsTypes'

function App() {
  return (
    <div className="App">
      <IncidentsOfTheMonth />
      <CommingIssue />
      <EstablishmentInfo />
      <DropDownIncidentsTypes />
    </div>
  );
}

export default App;
