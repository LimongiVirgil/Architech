import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

export const SingleBarChart = () => {
  useEffect(() => {
    var ctx = document.getElementById("myChart");

    const data = {
      labels: [""],
      datasets: [
        {
          label: "Climatisation défectueuse",
          data: [3],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
        },
        {
          label: "Humidité élevée",
          data: [8],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
        },
        {
          label: "Fuite de châleur",
          data: [7],
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
        },
      ],
    };

    var myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        responsive: true,
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
  }, []);

  return (
    <div>
      <div className="monthlyChart">
        <canvas id="myChart" width="100" height="400"></canvas>
      </div>
    </div>
  );
};
