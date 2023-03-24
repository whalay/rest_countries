import { Input } from "postcss";
import React from "react";
import { GrSearch } from "react-icons/gr";

const Search = ({searchInput, handleChangeInput}) => {
  return (
    <div className="md:px-14 p-5 md:w-full  ">
      <span className="flex items-center gap-5 p-3 px-4 md:w-1/2 w-full bg-white shadow-md">
        <GrSearch />
        <input
          type="search"
          value={searchInput}
          onChange={handleChangeInput}
          name=""
          id=""
          placeholder="Search for a country..."
          className="outline-none w-full"
        />
      </span>
    </div>
  );
};

export default Search;
