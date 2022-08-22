import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

//Dummy Data
import {
  areaCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis,
} from "../../Data/dummy";

//Context API
import { useStateContext } from "../../Contexts/ContextProvider";
import Header from "../../Components/Header";

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        title="Inflation Rate in Percentage"
        category="Area Chart"
      ></Header>
      <div className="w-full">
        <ChartComponent
          id="area-chart"
          height="420px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
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
          <Inject services={[SplineAreaSeries, DateTime, Legend]}></Inject>
          <SeriesCollectionDirective>
            {areaCustomSeries.map((data, index) => (
              <SeriesDirective key={index} {...data}></SeriesDirective>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
