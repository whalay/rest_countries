import { Input } from "postcss";
import React from "react";
import { GrSearch } from "react-icons/gr";

const Search = ({ searchInput, handleChangeInput, darkMode }) => {
  return (
    <div className="md:px-14 p-5 md:w-full  ">
      <span className={`${darkMode ? "bg-Dark-Mode text-White " : "bg-Light-Mode text-Very-Dark-Blue drop-shadow-xl  border"} flex items-center gap-5 p-3 px-4 md:w-1/2 w-full  shadow-md`}>
        <GrSearch className="text-white"/>

        <input
          type="search"
          value={searchInput}
          onChange={handleChangeInput}
          name=""
          id=""
          placeholder="Search for a country..."
          className={`${darkMode ? "bg-Dark-Mode text-White placeholder-white" : "bg-Light-Mode text-Dark-Gray placeholder-Very-Dark-Blue "}  outline-none w-full  text-white`}
        />
      </span>
    </div>
  );
};

export default Search;
