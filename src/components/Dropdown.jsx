import React, { useState } from 'react';


function Dropdown({regionList, selectedOption, handleSelect}) {
  // const [selectedOption, setSelectedOption] = useState("");
  // const regionList = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']

  // const handleSelect = (event) => {
  //   setSelectedOption(event.target.value);
  // }

  return (
    <div className=' md:px-14 p-5 md:w-1/3'>
      <select value={selectedOption} onChange={handleSelect} className="p-3 outline-none md:w-full shadow-md">
        {/* <option value="">Filter by Region</option>
      <option value="option1">Africa</option>
      <option value="option2">America</option>
      <option value="option3">Asia</option>
      <option value="option4">Europe</option>
      <option value="option5">Oceania</option> */}
      <option value="">All</option>
        {regionList.map((region) => (
          <option value={region} key={region}> {region}</option>
        )
        )}
      </select>
    </div>
  );
}
export default Dropdown;