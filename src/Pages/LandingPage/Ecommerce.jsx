import React from "react";

import { useStateContext } from "../../Contexts/ContextProvider";

import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div>
      <Section1 currentColor={currentColor}></Section1>
      <Section2 currentColor={currentColor}></Section2>
      <Section3
        currentColor={currentColor}
        currentMode={currentMode}
      ></Section3>
      <Section4 currentColor={currentColor}></Section4>
    </div>
  );
};

export default Ecommerce;
