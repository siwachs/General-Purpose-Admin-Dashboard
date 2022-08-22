import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Cart, Chat, Notifications, UserProfile } from "./Components";

//DummyData
import Avatar from "../Data/avatar3.png";

//Import Custom Hook
import { useStateContext } from "../Contexts/ContextProvider";

const NavButton = ({ title, customFunction, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunction}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {/* Dot */}
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  //Moniter ScreenSize
  useEffect(() => {
    const handelResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handelResize);

    handelResize();

    return () => window.removeEventListener("resize", handelResize);
  });

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunction={() => setActiveMenu((prevValue) => !prevValue)}
        color={currentColor}
        icon={<AiOutlineMenu></AiOutlineMenu>}
      ></NavButton>

      <div className="flex">
        <NavButton
          title="Cart"
          customFunction={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart></FiShoppingCart>}
        ></NavButton>

        <NavButton
          title="Chat"
          customFunction={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft></BsChatLeft>}
          dotColor="#03C9D7"
        ></NavButton>

        <NavButton
          title="Notifications"
          customFunction={() => handleClick("notifications")}
          color={currentColor}
          icon={<RiNotification3Line></RiNotification3Line>}
          dotColor="#fec90f"
        ></NavButton>

        {/* Profile Component */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 p-1 cursor-pointer hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img alt="" src={Avatar} className="rounded-full w-8 h-8"></img>
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Shubham
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"></MdKeyboardArrowDown>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart></Cart>}
        {isClicked.chat && <Chat></Chat>}
        {isClicked.userProfile && <UserProfile></UserProfile>}
        {isClicked.notifications && <Notifications></Notifications>}
      </div>
    </div>
  );
};

export default Navbar;
