import React from "react";

import Button from "../../../Components/Button";

//Dummy Data from FusionSync
import { earningData } from "../../../Data/dummy";

const Section1 = ({ currentColor }) => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap justify-center">
      {/* Left Section Begin */}
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl">$3890943.00</p>
          </div>
        </div>
        <div className="mt-6">
          <Button
            color="white"
            bgColor={currentColor}
            text="Download"
            borderRadius="10px"
            size="md"
          ></Button>
        </div>
      </div>
      {/* Left Section End */}

      {/* Right Section begin */}
      <div className="flex m-3 flex-wrap justify-center items-center gap-1">
        {earningData.map((data, index) => (
          <div
            key={index}
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 md:w-56 pt-9 rounded-2xl"
          >
            <button
              type="button"
              style={{ color: data.iconColor, background: data.iconBg }}
              className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
            >
              {data.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{data.amount}</span>
              <span className={`text-sm ml-2 text-${data.pcColor}`}>
                {data.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-1">{data.title}</p>
          </div>
        ))}
      </div>

      {/* End */}
    </section>
  );
};

export default Section1;
