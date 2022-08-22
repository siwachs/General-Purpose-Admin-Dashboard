import React from "react";

import { MdOutlineCancel } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import Button from "./Button";

//Dummy Data
import { chatData } from "../Data/dummy";

import { useStateContext } from "../Contexts/ContextProvider";

const Notifications = () => {
  const { currentColor, close } = useStateContext();

  return (
    <div className="nav-item absolute right-1 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">
          Notifications
        </p>
        <TooltipComponent content="Close Notifications" position="BottomCenter">
          <button
            type="button"
            onClick={() => close("notifications")}
            className="text-xl p-3 rounded-full hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5" onClick={() => close("notifications")}>
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
