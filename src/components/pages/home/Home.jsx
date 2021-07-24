import React from 'react'
import IncidentsOfTheMonth from '../../organisms/incidentsOfTheMonth/incidentsOfTheMonth'
import CommingInterventions from '../../organisms/commingInterventions/CommingInterventions'
import EstablishmentInfo from '../../organisms/establishmentInfo/establishmentInfo'
import AnnualEvolutionBarChart from '../../organisms/annualEvolutionBarChartBlock/annualEvolutionBarChart'
import DasboardDisclosure from '../../organisms/dasboardDisclosure/dasboardDisclosure'
import Card from '../../templates/card/Card'
import Page from '../../templates/page/Page'

const Home = () => {
  return (
    <Page className="home">
      <Card>
        <IncidentsOfTheMonth />
        <DasboardDisclosure />
      </Card>
      <div className="card-container">
        <CommingInterventions />
        <AnnualEvolutionBarChart/>
        <EstablishmentInfo />
      </div>
    </Page>
  );
}

export default Home;
