import React from 'react'
import Page from '../templates/page/Page'
import LiveSensorsData from '../organisms/liveSensorsData/liveSensorsData'
import Title from '../atoms/title/title'

const Monitoring = () => {
  return (
    <Page>
      <Title tag="h1" cssClass="page-title">Surveillance en temps réel</Title>
      <LiveSensorsData/>
    </Page>
  );
}

export default Monitoring
