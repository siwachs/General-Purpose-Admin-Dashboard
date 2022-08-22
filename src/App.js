import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  Navbar,
  Sidebar,
  Footer,
  ThemeSettings,
} from "./Components/Components";

import {
  Ecommerce,
  Orders,
  Calendar,
  Employess,
  ColorPicker,
  Editor,
  Customers,
  Kanban,
  Line,
  Pyramid,
  Bar,
  Pie,
  ColorMapping,
  Area,
  Financial,
  Stacked,
} from "./Pages/Pages";

//Context API
import { useStateContext } from "./Contexts/ContextProvider";
import SettingButton from "./Components/SettingButton";

const App = () => {
  //Get from Context
  const {
    activeMenu,
    themeSettingsOpen,
    setThemeSettingsOpen,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    //Container
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <SettingButton
            currentColor={currentColor}
            setThemeSettingsOpen={setThemeSettingsOpen}
          ></SettingButton>

          {/* Sidebar Menu */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* Site Container or Content */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full ${
              activeMenu ? "md:ml-72" : "flex-1"
            }`}
          >
            {/* NavBar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar></Navbar>
            </div>

            {/* Main Component */}
            <main className="mt-12 overflow-auto">
              {themeSettingsOpen && <ThemeSettings></ThemeSettings>}

              <Routes>
                {/* Pages */}
                <Route exact path="/" element={<Ecommerce></Ecommerce>}></Route>

                <Route
                  exact
                  path="/ecommerce"
                  element={<Ecommerce></Ecommerce>}
                ></Route>

                <Route exact path="/orders" element={<Orders></Orders>}></Route>

                <Route
                  exact
                  path="/employees"
                  element={<Employess></Employess>}
                ></Route>

                <Route
                  exact
                  path="/customers"
                  element={<Customers></Customers>}
                ></Route>

                {/* Apps */}
                <Route exact path="/kanban" element={<Kanban></Kanban>}></Route>

                <Route exact path="/editor" element={<Editor></Editor>}></Route>

                <Route
                  exact
                  path="/calendar"
                  element={<Calendar></Calendar>}
                ></Route>

                <Route
                  exact
                  path="/color-picker"
                  element={<ColorPicker></ColorPicker>}
                ></Route>

                {/* Charts */}
                <Route exact path="/line" element={<Line></Line>}></Route>

                <Route exact path="/bar" element={<Bar></Bar>}></Route>

                <Route exact path="/pie" element={<Pie></Pie>}></Route>

                <Route exact path="/area" element={<Area></Area>}></Route>

                <Route
                  exact
                  path="/financial"
                  element={<Financial></Financial>}
                ></Route>

                <Route
                  exact
                  path="/color-mapping"
                  element={<ColorMapping></ColorMapping>}
                ></Route>

                <Route
                  exact
                  path="/pyramid"
                  element={<Pyramid></Pyramid>}
                ></Route>

                <Route
                  exact
                  path="/stacked"
                  element={<Stacked></Stacked>}
                ></Route>
              </Routes>
            </main>
            <Footer></Footer>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
