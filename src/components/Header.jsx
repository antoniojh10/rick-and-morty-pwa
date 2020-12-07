import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(!theme);
  };

  const HeaderClasses = theme
    ? "Header relative bg-gray-800 text-white"
    : "Header relative bg-white";

  return (
    <div className={HeaderClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h1 className="text-3xl font-extrabold">ReactHooks</h1>
          </div>
          <div className="flex justify-end lg:w-0 lg:flex-1">
            <button
              type="button"
              onClick={handleClick}
              className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            >
              {theme ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
