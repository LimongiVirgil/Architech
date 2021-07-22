import React from 'react'
import IncidentsOfTheMonth from '../../organisms/incidentsOfTheMonth/incidentsOfTheMonth'
import CommingIssue from '../../organisms/commingIssue/commingIssue'
import EstablishmentInfo from '../../organisms/establishmentInfo/establishmentInfo'
import DropdownContainer from '../../organisms/DropDownIncidentsTypes/DropdownContainer'
import AnnualEvolutionBarChart from '../../organisms/annualEvolutionBarChartBlock/annualEvolutionBarChart'
import Card from '../../templates/card/Card'
import Page from '../../templates/page/Page'

const Home = () => {
  return (
    <Page className="home">
      <Card>
        <IncidentsOfTheMonth />
        <DropdownContainer />
      </Card>
      <div className="card-container">
        <CommingIssue />
        <AnnualEvolutionBarChart/>
        <EstablishmentInfo />
      </div>
    </Page>
  );
}

export default Home;
