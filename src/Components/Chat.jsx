import React from "react";

import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import Button from "./Button";

//Dummy Data From SyncFusion
import { chatData } from "../Data/dummy";

import { useStateContext } from "../Contexts/ContextProvider";

const Chat = () => {
  const { currentColor, close } = useStateContext();

  return (
    <div className="nav-item absolute right-1 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
        <TooltipComponent content="Close Messages" position="BottomCenter">
          <button
            type="button"
            onClick={() => close("chat")}
            className="text-xl p-3 rounded-full hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      {/* Messages Rows */}
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
          >
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">
                {item.message}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-5" onClick={() => close("chat")}>
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
