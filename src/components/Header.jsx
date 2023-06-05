import React, {useContext} from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { useNavigate } from "react-router";

import DarkModeContext from "../context/DarkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  return (
    <div className="md:px-14 p-5 flex items-center justify-between shadow-lg">
      <p onClick={() => navigate('/')} className="cursor-pointer">Where in the world?</p>
      <span className="flex items-center gap-1">
        <button onClick={toggleDarkMode} className="flex items-center gap-1"><HiOutlineMoon /> Dark Mode</button>
      </span>
    </div>
  );
};

export default Header;
