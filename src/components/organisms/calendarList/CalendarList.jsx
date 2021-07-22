import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../templates/card/Card'
import CalendarListMonth from '../../molecules/calendarListMonth/CalendarListMonth'

function CalendarList() {
  const [issuesByMonth, setIssuesByMonth] = useState(null)

  useEffect(() => {
    getIssuesByMonth()
  }, [])

  async function getIssuesByMonth () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/dashboard/futureEvent/1`)
      if (!response || !response.data) return
      const issues = response.data
      sortIssuesByMonth(issues)
    } catch (error) {
      console.log(error)
    }
  }

  function sortIssuesByMonth (issues) {
    const issuesByMonths = [] // [[issue], [issue], [issue]]
    let currentMonth;
    let currentIndex = 0

    issues.forEach(issue => {
      const issueMonth = new Date(issue.intervention_datetime.date).getMonth()
      if (!currentMonth || currentMonth !== issueMonth) {
        currentMonth = issueMonth
        currentIndex++
      }

      if (!issuesByMonths[currentIndex]) issuesByMonths[currentIndex] = []
      issuesByMonths[currentIndex].push(issue)
    })
    setIssuesByMonth(issuesByMonths)
  }

  return (
    <Card scroll={true}>
      {issuesByMonth && issuesByMonth.map((issues, index) => (
        <CalendarListMonth key={index} issues={issues}/>
      ))}
    </Card>
  )
}

export default CalendarList
