import React from "react";

import Earnings from "./Earnings";
import RevenuUpdates from "./RevenuUpdates";
import YearlySales from "./YearlySales";

const Section2 = ({ currentColor }) => {
  return (
    <section className="flex gap-10 flex-wrap justify-center">
      <div>
        <RevenuUpdates currentColor={currentColor}></RevenuUpdates>
      </div>

      <div>
        <Earnings currentColor={currentColor}></Earnings>

        <YearlySales currentColor={currentColor}></YearlySales>
      </div>
    </section>
  );
};

export default Section2;
