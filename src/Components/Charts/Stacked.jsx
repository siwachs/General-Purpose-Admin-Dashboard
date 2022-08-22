import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

//Dummy Data
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../Data/dummy";

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{
        border: {
          width: 0,
        },
      }}
      tooltip={{ enable: true }}
      legendSettings={{
        background: "white",
      }}
    >
      <Inject
        services={[Legend, Category, StackingColumnSeries, Tooltip]}
      ></Inject>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((data, index) => (
          <SeriesDirective key={index} {...data}></SeriesDirective>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
