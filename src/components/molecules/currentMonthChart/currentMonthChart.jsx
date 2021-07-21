import React, { useState, useEffect } from "react";
import SingleBarChart from "../../atoms/singleBarChart/singleBarChart";
import { formatPercentage } from "../../../utils";

function MonthlySensorChart({chartData, numberIncident}) {
  const [numberHeatLeak, setNumberHeatLeak] = useState(0);
  const [numberHighHumidity, setNumberHighHumidity] = useState(0);
  const [numberDefectiveAirConditioning, setNumberDefectiveAirConditioning] = useState(0);

  useEffect(() => {
    if (!chartData) return
    setNumberHeatLeak(chartData.heat_leak.length)
    setNumberHighHumidity(chartData.high_humidity.length)
    setNumberDefectiveAirConditioning(chartData.defective_air_conditioning.length)
  }, [chartData])

  return (
    <div className="current-month-chart">
      <div className="current-month-chart__chart-wrapper">
        <SingleBarChart chartData={chartData} />
      </div>
      {chartData && (
        <div className="current-month-chart__statistics-details">
          <p>{formatPercentage(numberHeatLeak / numberIncident)} Fuite de châleur</p>
          <p>{formatPercentage(numberHighHumidity / numberIncident)} Humidité élevée</p>
          <p>{formatPercentage(numberDefectiveAirConditioning / numberIncident)} Climatisation défectueuse</p>
        </div>
      )}
    </div>
  );
}

export default MonthlySensorChart;
