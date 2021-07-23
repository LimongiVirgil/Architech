import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../../atoms/title/title'
import IssueInformation from '../../molecules/issueInformation/issueInformation'
import Card from '../../templates/card/Card'

const CommingIssue = () => {
  const [issuesData, setIssuesData] = useState(false)

  useEffect(() => {
    getIssues()
  }, [])

  async function getIssues () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/dashboard/futureEvent/1`)
      if (!response || !response.data) return
      setIssuesData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card>
      {issuesData && 
        <Title cssClass="card-title">
          {`${issuesData.length} évènement${issuesData.length > 1 ? 's' : ''} à venir`}
        </Title>
      }
      
      {issuesData && issuesData.map((issue, index) => (
        <IssueInformation issue={issue} key={index}/>
      ))}
    </Card>
  );
};

export default CommingIssue
