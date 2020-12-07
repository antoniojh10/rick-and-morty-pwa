import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const BasicLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const LayoutClasses = theme
    ? "min-h-full flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8"
    : "min-h-full flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8";

  return <div className={LayoutClasses}>{children}</div>;
};

export default BasicLayout;
