import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="md:px-14 p-5 flex items-center justify-between shadow-lg">
      <p onClick={() => navigate('/')} className="cursor-pointer">Where in the world?</p>
      <span className="flex items-center gap-1">
        <HiOutlineMoon /> <p>Dark Mode</p>
      </span>
    </div>
  );
};

export default Header;
