import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../Data/dummy";

//Context API
import { useStateContext } from "../Contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
      "flex items-center gap-5 pt-3 pl-4 pb-2.5 rounded-lg text-white text-md m-2",
    notActiveLinks =
      "flex items-center gap-5 pt-3 pl-4 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 duration-1000 ease-in-out transition-all">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold dark:text-white tracking-tight text-slate-900"
            >
              <SiShopware></SiShopware>
              <span>General Puropose Admin Panel</span>
            </Link>

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevValue) => !prevValue)}
                className="text-xl p-3 rounded-full hover:bg-light-gray mt-4"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          {/* Items */}
          <div className="mt-10">
            {links.map((item, index) => (
              <div key={index} className=" cursor-pointer">
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>

                {/* Render Dropdown */}
                {item.links.map((link, _index) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={_index}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : notActiveLinks
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
