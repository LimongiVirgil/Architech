import React from 'react';
import IncidentsOfTheMonth from '../organisms/incidentsOfTheMonth/incidentsOfTheMonth'
import CommingIssue from '../organisms/commingIssue/commingIssue'
import EstablishmentInfo from '../organisms/establishmentInfo/establishmentInfo'
import { DropdownContainer } from '../organisms/DropDownIncidentsTypes/DropdownContainer'
import AnnualEvolutionBarChart from '../molecules/annualEvolutionBarChartBlock/annualEvolutionBarChart';

const Home = () => {
  return (
    <div className="Home">
      <IncidentsOfTheMonth />
      <CommingIssue />
      <EstablishmentInfo />
      <AnnualEvolutionBarChart/>
      <DropdownContainer />
    </div>
  );
}

export default Home;
