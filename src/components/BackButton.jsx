import React from "react";
// import { useHistory } from "react-router-dom";

const BackButton = () => {
  //   const history = useHistory();

  const handleClick = () => {
    window.history.back();
  };
  return <button  onClick={handleClick} className="shadow-md px-5 py-1 border-2">Back</button>;
};

export default BackButton;
