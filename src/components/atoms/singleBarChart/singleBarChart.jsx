import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const SingleBarChart = ({ chartData }) => {
  useEffect(() => {
    createChart();
  }, [chartData]);

  function createChart() {
    if (!chartData) return;
    var ctx = document.getElementById("myChart");

    const data = {
      labels: [""],
      datasets: [
        {
          label: "Climatisation défectueuse",
          data: [chartData.defective_air_conditioning.length],
          backgroundColor: "#CDD5DF",
        },
        {
          label: "Humidité élevée",
          data: [chartData.high_humidity.length],
          backgroundColor: "#9AABC0",
        },
        {
          label: "Fuite de châleur",
          data: [chartData.heat_leak.length],
          backgroundColor: "#6881A0",
        },
      ],
    };

    var myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
  }

  return (
    <canvas id="myChart"/>
  );
};

export default SingleBarChart
