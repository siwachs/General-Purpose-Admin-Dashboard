import React from "react";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const SettingButton = ({ currentColor, setThemeSettingsOpen }) => {
  return (
    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
      <TooltipComponent content="Settings" position="top">
        <button
          type="button"
          className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
          style={{ background: currentColor, borderRadius: "50%" }}
          onClick={() => setThemeSettingsOpen(true)}
        >
          <FiSettings />
        </button>
      </TooltipComponent>
    </div>
  );
};

export default SettingButton;
