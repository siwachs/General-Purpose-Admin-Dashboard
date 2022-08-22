import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

//Dummy Data
import {
  LinePrimaryXAxis,
  lineCustomSeries,
  LinePrimaryYAxis,
} from "../../Data/dummy";

//Context API
import { useStateContext } from "../../Contexts/ContextProvider";

const LineChart = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="w-full">
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{
          border: {
            width: 0,
          },
        }}
        tooltip={{
          enable: true,
        }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]}></Inject>
        <SeriesCollectionDirective>
          {lineCustomSeries.map((data, index) => (
            <SeriesDirective key={index} {...data}></SeriesDirective>
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
