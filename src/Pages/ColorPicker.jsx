import React from "react";

import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import Header from "../Components/Header";

//Change Pen Color
const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 p-2 mt-24 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker"></Header>

      <div className="text-center">
        <div id="preview"></div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallet</p>
            <ColorPickerComponent
              id="inline-pallet"
              mode="Palette"
              inline
              change={change}
              modeSwitcher={false}
              showButtons={false}
            ></ColorPickerComponent>
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallet</p>
            <ColorPickerComponent
              id="inline-pallet"
              mode="Picker"
              inline
              change={change}
              modeSwitcher={false}
              showButtons={false}
            ></ColorPickerComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
