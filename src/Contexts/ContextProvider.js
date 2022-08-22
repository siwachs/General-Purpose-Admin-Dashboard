import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  //Theme
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettingsOpen, setThemeSettingsOpen] = useState(false);

  const setMode = (event) => {
    setCurrentMode(event.target.value);
    localStorage.setItem("themeMode", event.target.value);

    setThemeSettingsOpen(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);

    setThemeSettingsOpen(false);
  };

  //Navbar Buttons Handler
  const handleClick = (clickedElement) => {
    setIsClicked({
      ...initialState,
      [clickedElement]: true,
    });
  };

  //Close Dialog
  const close = (clickedElement) => {
    setIsClicked({
      ...initialState,
      [clickedElement]: false,
    });
  };

  //SideBar Responsiveness
  const [screenSize, setScreenSize] = useState(undefined);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettingsOpen,
        setThemeSettingsOpen,
        close,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//Which Context we want to Use and also we need to wrap that context with our app
export const useStateContext = () => useContext(StateContext);
