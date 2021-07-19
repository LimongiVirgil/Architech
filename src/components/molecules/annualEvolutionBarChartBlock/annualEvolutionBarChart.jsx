import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const annualEvolutionBarChart = () => {
  const months = {
    0: {
      name :'Janvier',
      count: 0,
    },
    1: {
      name: 'Février',
      count: 0,
    },
    2: {
      name: 'Mars',
      count: 0,
    },
    3: {
      name: 'Avril',
      count: 0,
    },
    4: {
      name: 'Mai',
      count: 0,
    },
    5: {
      name: 'Juin',
      count: 0,
    },
    6: {
      name: 'Juillet',
      count: 0,
    },
    7: {
      name: 'Aout',
      count: 0,
    },
    8: {
      name: 'Septembre',
      count: 0,
    },
    9: {
      name: 'Octobre',
      count: 0,
    },
    10: {
      name: 'Novembre',
      count: 0,
    },
    11: {
      name: 'Decembre',
      count: 0,
    },
  }
  const [numberOfDefectiveAirConditioningIssuesPerMonth, setNumberOfDefectiveAirConditioningIssuesPerMonth] = useState();
  const [numberOfHighHumidityIssuesPerMonth, setNumberOfHighHumidityIssuesPerMonth] = useState();
  const [numberOfHeatLeakIssuesPerMonth, setNumberOfHeatLeakIssuesPerMonth] = useState();
  const [monthsNames, setMonthNames] = useState();
  const [monthsOrder, setMonthsOrder] = useState(Object.keys(months));

  useEffect(() => {
    orderMonths();
  }, []);
  
  useEffect(() => {
    sortMonthsNames();
    getAnnualEvolutionData();
  }, [monthsOrder]);
  
  function orderMonths() {
    const curentMonth = handleDate(Date.now());
    const dateToMove = monthsOrder.splice(curentMonth + 1);
    monthsOrder.unshift(...dateToMove);
  }

  function sortMonthsNames() {
    const sortedMonths = monthsOrder.reduce((accumulator, monthIndex) => {
      accumulator.push(months[monthIndex].name);
      return accumulator;
    }, []);
    setMonthNames(sortedMonths);
  }

  async function getAnnualEvolutionData() {
    try {
      const response = await axios.get(`https://architech-hetic.herokuapp.com/api/dashboard/annualEvolution/1`);
      if (response && response.data) {
        const issues = response.data;

        let numberOfDefectiveAirConditioningIssuesPerMonth = JSON.parse(JSON.stringify(months));
        let numberOfHighHumidityIssuesPerMonth = JSON.parse(JSON.stringify(months));
        let numberOfHeatLeakIssuesPerMonth = JSON.parse(JSON.stringify(months));

        monthsOrder.map((month) => {
          issues.map((issue) => {
            if(handleDate(issue.incident_date.date) === parseInt(month)) {
              if(issue.incident_type === 'defective_air_conditioning') {
                numberOfDefectiveAirConditioningIssuesPerMonth[month].count += 1;
              }
              else if(issue.incident_type === 'high_humidity') {
                numberOfHighHumidityIssuesPerMonth[month].count += 1;
              }
              else if(issue.incident_type === 'heat_leak') {
                numberOfHeatLeakIssuesPerMonth[month].count += 1;
              }
            }
          });
        });

        setIssueData(numberOfDefectiveAirConditioningIssuesPerMonth, setNumberOfDefectiveAirConditioningIssuesPerMonth);
        setIssueData(numberOfHighHumidityIssuesPerMonth, setNumberOfHighHumidityIssuesPerMonth);
        setIssueData(numberOfHeatLeakIssuesPerMonth, setNumberOfHeatLeakIssuesPerMonth);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handleDate(date) {
    return new Date(date).getMonth();
  }

  function setIssueData(issueType, setIssueType) {
    issueType = monthsOrder.reduce((accumulator, current) => {
      accumulator.push(issueType[current].count);
      return accumulator;
    }, []);
    setIssueType(issueType);
  };

  const data = {
    labels: monthsNames,
    datasets: [
      {
        label: 'Climatisation defectueuse',
        data: numberOfDefectiveAirConditioningIssuesPerMonth,
        backgroundColor: '#9AABC0',
      },
      {
        label: 'Humidité élevée',
        data: numberOfHighHumidityIssuesPerMonth,
        backgroundColor: '#6881A0',
      },
      {
      label: 'Fuites de chaleur',
      data: numberOfHeatLeakIssuesPerMonth,
      backgroundColor: '#465970',
    },
    ],
  };

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
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default annualEvolutionBarChart;
