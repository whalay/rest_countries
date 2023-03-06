import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
  <div className=' md:px-14 p-5 md:w-1/3'>
      <select value={selectedOption} onChange={handleSelect} className="p-3 outline-none md:w-full shadow-md">
      <option value="">Filter by Region</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
  );
}
export default Dropdown;