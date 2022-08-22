import React from "react";

//Fusion Components
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

//Dummy Data
import { dropdownData } from "../../../Data/dummy";

import RecentTransactions from "./RecentTransactions";
import SalesOverview from "./SalesOverview";

//DropDown Component
const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Section3 = ({ currentColor, currentMode }) => {
  return (
    <section className="flex gap-10 m-4 flex-wrap justify-center">
      <RecentTransactions
        currentColor={currentColor}
        DropDown={DropDown}
        currentMode={currentMode}
      ></RecentTransactions>

      <SalesOverview
        currentMode={currentMode}
        DropDown={DropDown}
      ></SalesOverview>
    </section>
  );
};

export default Section3;
