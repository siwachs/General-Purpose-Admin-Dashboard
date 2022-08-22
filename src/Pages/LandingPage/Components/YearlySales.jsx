import React from "react";

//Charts
import Pie from "../../../Components/Charts/Pie";

//Dummy Data
import { ecomPieChartData } from "../../../Data/dummy";

const YearlySales = () => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
      <div>
        <p className="text-2xl font-semibold ">$43,246</p>
        <p className="text-gray-400">Yearly sales</p>
      </div>

      <div className="w-40">
        <Pie
          id="pie-chart"
          data={ecomPieChartData}
          legendVisiblity={false}
          height="160px"
        />
      </div>
    </div>
  );
};

export default YearlySales;
