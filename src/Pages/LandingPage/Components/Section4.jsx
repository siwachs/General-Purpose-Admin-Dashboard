import React from "react";

import WeeklyStats from "./WeeklyStats";
import Branding from "./Branding";
import Updates from "./Updates";

const Section4 = ({ currentColor }) => {
  return (
    <section className="flex flex-wrap justify-center">
      <WeeklyStats currentColor={currentColor}></WeeklyStats>
      <Branding currentColor={currentColor}></Branding>
      <Updates currentColor={currentColor}></Updates>
    </section>
  );
};

export default Section4;
