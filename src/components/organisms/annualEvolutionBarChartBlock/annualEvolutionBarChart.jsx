import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Chart from 'chart.js/auto'
import { capitalizeFirstLetter } from '../../../utils'
import Card from '../../templates/card/Card'
import Title from '../../atoms/title/title'
import Loader from '../../atoms/loader/loader'

const months = {
  0: 0, // monthIndex: numberIssues
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
}

const annualEvolutionBarChart = () => {
  const [numberOfHeatLeakIssuesPerMonthState, setNumberOfHeatLeakIssuesPerMonthState] = useState(false)
  const [dataError, setDataError] = useState(false)

  const ctx = useRef(null)

  useEffect(() => {
    const orderedMonths = orderMonths(Object.keys(months))
    createChart(orderedMonths)
  }, [])

  function orderMonths(monthIndexes) {
    const curentMonth = getMonthFromDate(Date.now())
    const monthsToDisplayFirst = monthIndexes.splice(curentMonth + 1)
    monthIndexes.unshift(...monthsToDisplayFirst)
    return monthIndexes
  }

  async function createChart(orderedMonths) {
    const monthsNames = getMonthsNames(orderedMonths)

    const issues = await getChartData()
    if (!issues) return
    
    const numberOfDefectiveAirConditioningIssuesPerMonth = JSON.parse(JSON.stringify(months))
    const numberOfHighHumidityIssuesPerMonth = JSON.parse(JSON.stringify(months))
    const numberOfHeatLeakIssuesPerMonth = JSON.parse(JSON.stringify(months))
    setNumberOfHeatLeakIssuesPerMonthState(numberOfHeatLeakIssuesPerMonth)

    orderedMonths.map(month => {
      issues.map(issue => {
        if (getMonthFromDate(issue.incident_date.date) === parseInt(month)) {
          incrementIssuesCount(
            issue.incident_type, 
            month,
            numberOfDefectiveAirConditioningIssuesPerMonth, 
            numberOfHighHumidityIssuesPerMonth, 
            numberOfHeatLeakIssuesPerMonth
          )
        }
      })
    })

    const chartDataAir = getTotalIssuesByMonth(numberOfDefectiveAirConditioningIssuesPerMonth, orderedMonths)
    const chartDataHumidity = getTotalIssuesByMonth(numberOfHighHumidityIssuesPerMonth, orderedMonths)
    const chartDataHeat = getTotalIssuesByMonth(numberOfHeatLeakIssuesPerMonth, orderedMonths)

    const data = {
      labels: monthsNames,
      datasets: [
        {
          label: 'Climatisation défectueuse',
          data: chartDataAir,
          backgroundColor: '#9AABC0',
        },
        {
          label: 'Humidité élevée',
          data: chartDataHumidity,
          backgroundColor: '#6881A0',
        },
        {
        label: 'Fuites de chaleur',
        data: chartDataHeat,
        backgroundColor: '#465970',
      },
      ],
    }
  
    const options = {
      plugins: {
        legend: {
          position: 'bottom',
        }
      },
      responsive: true,
      scales: {
        y: {
          stacked: true,
        },
        x: {
          stacked: true,
        },
      },
    }

    var myChart = new Chart(ctx.current, {
      type: "bar",
      data: data,
      options: options
    })
  }

  
  function getMonthsNames(orderedMonths) {
    // returns ['monthName',  ... x 12]
    const monthsNames = orderedMonths.reduce((accumulator, monthIndex) => {
      const date = new Date()
      date.setMonth(monthIndex)

      const monthName = date.toLocaleString('fr-FR', { month: 'long' })
      const formattedMonthName = capitalizeFirstLetter(monthName)
      accumulator.push(formattedMonthName)
      return accumulator
    }, [])

    return monthsNames
  }

  async function getChartData () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/dashboard/annualEvolution/1`)
      if (!response || !response.data) return false
      return response.data
    } catch (error) {
      console.error(error);
      setDataError(true)
      return false
    }
  }

  function incrementIssuesCount (issueType, month, airConditioningIssues, humidityIssues, heatIssues) {
    if (issueType === 'defective_air_conditioning') airConditioningIssues[month] += 1
    else if (issueType === 'high_humidity') humidityIssues[month] += 1
    else if (issueType === 'heat_leak') heatIssues[month] += 1
  }
  

  function getMonthFromDate(date) {
    return new Date(date).getMonth()
  }

  function getTotalIssuesByMonth(issuesByMonth, orderedMonths) {
    // returns [23, 33, 67, 89, 12, 90, 3, 2, 5, 78, 23, 21]
    const formattedIssuesByMonth = orderedMonths.reduce((accumulator, currentMonth) => {
      accumulator.push(issuesByMonth[currentMonth])
      return accumulator
    }, [])
    return formattedIssuesByMonth
  }

  return (
    <Card>
      <Title cssClass="card-title">Évolution annuelle des incidents</Title>
      {numberOfHeatLeakIssuesPerMonthState && <canvas ref={ctx} />}
      {!numberOfHeatLeakIssuesPerMonthState && <Loader error={dataError}/>}
    </Card>
  )
}

export default annualEvolutionBarChart
