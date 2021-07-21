import React from 'react'
import IncidentsOfTheMonth from './components/organisms/incidentsOfTheMonth/incidentsOfTheMonth'
import CommingIssue from './components/organisms/commingIssue/commingIssue'
import EstablishmentInfo from './components/organisms/establishmentInfo/establishmentInfo'
import { DropdownContainer } from './components/organisms/DropDownIncidentsTypes/DropdownContainer'
import AnnualEvolutionBarChart from './components/molecules/annualEvolutionBarChartBlock/annualEvolutionBarChart';

function App() {
  return (
    <div className="App">
      <IncidentsOfTheMonth />
      <CommingIssue />
      <EstablishmentInfo />
      <DropdownContainer />
      <AnnualEvolutionBarChart/>
    </div>
  );
}

export default App;
