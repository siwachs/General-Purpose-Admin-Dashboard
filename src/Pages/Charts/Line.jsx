import React from "react";

import { Header } from "../../Components/Components";
import LineChart from "../../Components/Charts/LineChart";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Inflation Rate" category="Line Chart"></Header>

      <LineChart></LineChart>
    </div>
  );
};

export default Line;
