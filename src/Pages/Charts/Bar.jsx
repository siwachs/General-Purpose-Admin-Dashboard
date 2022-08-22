import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Legend,
  Tooltip,
  ColumnSeries,
  DataLabel,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

//Dummy Data
import {
  barChartData,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../Data/dummy";

//Context API
import { useStateContext } from "../../Contexts/ContextProvider";
import Header from "../../Components/Header";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Bar" category="Chart"></Header>

      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{
            border: {
              width: 0,
            },
          }}
          tooltip={{
            enable: true,
          }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{
            background: "white",
          }}
          title="Olympic Medals Count"
        >
          <Inject
            services={[
              ColumnSeries,
              Legend,
              Tooltip,
              Category,
              DataLabel,
              LineSeries,
            ]}
          ></Inject>
          <SeriesCollectionDirective>
            {barChartData.map((data, index) => (
              <SeriesDirective key={index} {...data}></SeriesDirective>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
