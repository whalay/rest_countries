import React from "react";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
// import { Country } from "../assets/Data";
import Card from "../components/Card";

const Homepage = ({ data }) => {
  return (
    <div className="bg-Light-Mode text-Very-Dark-Blue">
      <div className="md:flex items-center justify-between">
        <Search className=" " />
        <Dropdown />
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row justify-between  sm:gap-5 sm:px-14  ">
        {data?.map((country) => {
          return (
          
            <Card
              id={country.ccn3}
              name={country.name.common}
              population={country.population}
              Region={country.region}
              Capital={country.capital}
              flags={country.flags.svg}
            />
          );
        })}
       
      </div>
    </div>
  );
};

export default Homepage;
