import React from 'react';
import IncidentsOfTheMonth from '../organisms/incidentsOfTheMonth/incidentsOfTheMonth'
import CommingIssue from '../organisms/commingIssue/commingIssue'
import EstablishmentInfo from '../organisms/establishmentInfo/establishmentInfo'
import { DropdownContainer } from '../organisms/DropDownIncidentsTypes/DropdownContainer'
import AnnualEvolutionBarChart from '../molecules/annualEvolutionBarChartBlock/annualEvolutionBarChart';
import Card from '../templates/card';

const Home = () => {
  return (
    <div className="home">
      <Card>
        <IncidentsOfTheMonth />
        <DropdownContainer />
      </Card>
      <div className="card-container">
        <CommingIssue />
        <AnnualEvolutionBarChart/>
        <EstablishmentInfo />
      </div>
    </div>
  );
}

export default Home;
