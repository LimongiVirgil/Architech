import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../../atoms/title/title'
import InterventionDescription from '../../molecules/interventionDescription/InterventionDescription'
import Card from '../../templates/card/Card'
import Loader from '../../atoms/loader/loader'
import { hydratation } from '../../../utils'

const CommingInterventions = () => {
  const [issuesData, setIssuesData] = useState([])
  const [dataError, setDataError] = useState(false)

  useEffect(() => {
    getIssues()
  }, [])

  async function getIssues () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/dashboard/futureEvent/1`)
      if (!response || !response.data) return
      setIssuesData(hydratation(response.data))
    } catch (error) {
      // maybe not a "real" 404, could be the case where no event was found for the month
      console.log(error)
      setDataError(true)
    }
  }

  return (
    <Card className="commingIssueCard">
      <Title cssClass="card-title">
        {issuesData.length === 0 ? `Pas d'intervention ce mois-ci` :
        issuesData.length > 1 ? `${issuesData.length} interventions ce mois-ci` :
        `${issuesData.length} intervention ce mois-ci`}
      </Title>
      {issuesData && issuesData.map((issue, index) => (
        <InterventionDescription issue={issue} key={index}/>
      ))}
      {!issuesData.length && <Loader error={dataError}/>}
    </Card>
  );
};
export default CommingInterventions
