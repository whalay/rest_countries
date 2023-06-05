import React, { useState, useEffect, useContext } from "react";
// import DarkModeContext from "../context/DarkModeContext";
// import { DarkModeContext } from "../context/DarkModeContext";
import DarkModeContext from "../context/DarkModeContext";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
// import { Country } from "../assets/Data";
import Card from "../components/Card";

const Homepage = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);


  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(true);

  const regionList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']



  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: This status is ${response.status}`
        );
      }
      let actualData = await response.json();
      console.log(actualData);
      setItems(actualData);
      console.log(items);
      setIsLoad(false);
      // } catch (err) {
      //   setError(err.message);
      // }
    };
    getData();
  }, []);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    const result = items.filter(
      item =>
        (!searchInput || item.name.common.toLowerCase().includes(searchInput.toLowerCase())) &&
        (!selectedOption || item.region === selectedOption)
    );
    setFilteredItems(result);
    console.log(result);
  }, [searchInput, items, selectedOption]);
  return (
    // {isLoad ? (
    //   <p className="text-center text-xl font-semibold py-10">Loading... Please wait ...</p>
    // ) : (
    <div className={`${darkMode ? "bg-Dark-Mode text-White" : "bg-Light-Mode text-Very-Dark-Blue"}`}>
      <div className="md:flex items-center justify-between">
        <Search handleChangeInput={handleChangeInput} searchInput={searchInput} darkMode={darkMode} />
        <Dropdown handleSelect={handleSelect} selectedOption={selectedOption} regionList={regionList} darkMode={darkMode} />
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row justify-between  sm:gap-5 sm:px-14  ">
        {filteredItems?.map((country, index) => {
          return (

            <Card
            key={index}
              // key={country.ccn3}
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
