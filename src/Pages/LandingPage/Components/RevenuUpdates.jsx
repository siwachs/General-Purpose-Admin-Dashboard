import React from "react";

import { GoPrimitiveDot } from "react-icons/go";

import Button from "../../../Components/Button";

//Dummy Data
import { SparklineAreaData } from "../../../Data/dummy";

//Charts
import Stacked from "../../../Components/Charts/Stacked";
import SparkLine from "../../../Components/Charts/SparkLine";

const RevenuUpdates = ({ currentColor }) => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
      {/* Header */}
      <div className="flex justify-between">
        <p className="font-semibold text-xl">Revenue Updates</p>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
            <span>
              <GoPrimitiveDot />
            </span>
            <span>Expense</span>
          </p>

          <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
            <span>
              <GoPrimitiveDot />
            </span>
            <span>Budget</span>
          </p>
        </div>
      </div>

      <div className="mt-10 flex gap-10 justify-center flex-wrap">
        {/* Left Side of Revenue Updates */}
        <div className="border-r-1 border-color m-4 pr-10">
          <div>
            <p>
              <span className="text-3xl font-semibold">$9303940</span>
              <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 ml-3 text-xs">
                23%
              </span>
            </p>

            <p className="text-gray-500 mt-1">Budget</p>
          </div>

          <div className="mt-8">
            <p>
              <span className="text-3xl font-semibold">$69439</span>
            </p>

            <p className="text-gray-500 mt-1">Expense</p>
          </div>

          {/* Sparkline Graph (Currently Not Showing) */}
          <div className="mt-5">
            <SparkLine
              currentColor={currentColor}
              id="line-sparkLine"
              type="Line"
              height="80px"
              width="250px"
              data={SparklineAreaData}
              color={currentColor}
            />
          </div>

          {/* Report Download Button */}
          <div className="mt-10">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download Report"
              borderRadius="10px"
            ></Button>
          </div>
        </div>

        {/* Right Side Of Revenue Updates SparkLine Graph */}
        <div>
          <Stacked width="320px" height="360px"></Stacked>
        </div>

        {/* Revenue Updates End Here */}
      </div>
    </div>
  );
};

export default RevenuUpdates;
