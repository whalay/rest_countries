import React from "react";
import us from "../assets/us.png";
import { Link } from "react-router-dom";

const Card = ({ id, name, population, Capital, Region, flags }) => {
  return (
    <div className="flex  flex-col  md:justify-between  items-center ">
      <div className="shadow-md  mb-10 ">
        <Link to={`/${name}`}>
          <div className="h-52 w-72">
            <img src={flags} alt="logo" height="350" className="w-full h-full object-fill" />
          </div>

          <div className="p-5">
            <h1 className="py-5 font-bold text-xl">{name}</h1>

            <ul className="pb-5">
              <li>
                {" "}
                <span className="font-bold">Population: </span> {population}
              </li>
              <li>
                {" "}
                <span className="font-bold"> Region: </span>
                {Region}
              </li>
              <li>
                {" "}
                <span className="font-bold"> Capital: </span>
                {Capital}
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
