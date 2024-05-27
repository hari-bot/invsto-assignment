import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../actions";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
    if (darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    <button
      onClick={handleToggleDarkMode}
      className={`${
        darkMode ? "bg-gray-800" : "bg-gray-400"
      } w-10 h-6 rounded-full p-1 flex items-center focus:outline-none`}
    >
      <div
        className={`${
          darkMode ? "transform translate-x-4" : "transform-none"
        } bg-white w-4 h-4 rounded-full transition-transform duration-300`}
      ></div>
    </button>
  );
};

export default DarkModeToggle;
