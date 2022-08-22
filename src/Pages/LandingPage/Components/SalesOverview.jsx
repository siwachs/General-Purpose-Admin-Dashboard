import React from "react";

// Charts
import LineChart from "../../../Components/Charts/LineChart";

const SalesOverview = ({ DropDown, currentMode }) => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
      <div className="flex justify-between items-center gap-2 mb-10">
        <p className="text-xl font-semibold">Sales Overview</p>
        <DropDown currentMode={currentMode} />
      </div>
      <div className="md:w-full overflow-auto">
        <LineChart />
      </div>
    </div>
  );
};

export default SalesOverview;
