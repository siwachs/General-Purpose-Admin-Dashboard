import React from "react";

//Dummy Data
import { recentTransactions } from "../../../Data/dummy";

import Button from "../../../Components/Button";

const RecentTransactions = ({ currentColor, DropDown, currentMode }) => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
      {/* Drop-down */}
      <div className="flex justify-between items-center gap-2">
        <p className="text-xl font-semibold">Recent Transactions</p>
        <DropDown currentMode={currentMode} />
      </div>

      {/* Transactions Details */}
      <div className="mt-10 w-72 md:w-400">
        {recentTransactions.map((item) => (
          <div key={item.title} className="flex justify-between mt-4">
            <div className="flex gap-4">
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <div>
                <p className="text-md font-semibold">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
            <p className={`text-${item.pcColor}`}>{item.amount}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-between items-center mt-5 border-t-1 border-color">
        <div className="mt-3">
          <Button
            color="white"
            bgColor={currentColor}
            text="Add"
            borderRadius="10px"
          />
        </div>

        <p className="text-gray-400 text-sm">200 Recent Transactions</p>
      </div>
    </div>
  );
};

export default RecentTransactions;
