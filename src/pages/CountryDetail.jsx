import React from "react";
import { useParams, useNavigate } from "react-router";

import BackButton from "../components/BackButton";

const CountryDetail = ({ data }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  const country = data.find((country) => country.name.common === name);

  console.log(country);
  console.log(data);

  return (
    <div className=" md:px-14 p-5 h-screen">
      <div className="my-10">
        <BackButton />
        {/* <button className="shadow-md px-5 py-1 border-2">Back</button> */}
      </div>

      <div className="flex flex-col md:flex-row md:items-center   md:justify-between md:gap-20 ">
        {/* <div className="flex justify-center mb-5 md:flex-grow"> */}
        <img src={country.flags.png} alt="" className="basis-1/2" />
        {/* </div> */}
        <div className="basis-1/2">
          <div className="flex flex-col     md:px-0">
            <h1 className="text-2xl font-bold py-5"> {country.name.common}</h1>
            <div className="flex flex-col  md:flex-row  gap-5 md:gap-20 mb-5">
              <ul className="">
                <li>
                  {" "}
                  <span className="font-bold">Native name: </span>{" "}
                  {country?.name?.official}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Population : </span>{" "}
                  {country?.population}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Region : </span> {country?.region}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Sub-region: </span>{" "}
                  {country?.region}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Capital: </span>{" "}
                  {country?.capital}
                </li>
              </ul>
              <ul className="">
                <li>
                  {" "}
                  <span className="font-bold"> Top Level Domain:</span>{" "}
                  {country?.tld[0]}
                </li>
                <li>
                  {" "}
                  <span className="font-bold"> Currencies :</span>{" "}
                  {
                    country?.currencies[Object?.keys(country?.currencies)[0]]
                      ?.name
                  }
                </li>
                <li>
                  {" "}
                  <span className="font-bold"> Language :</span>
                  {country?.languages[Object?.keys(country?.languages)[0]]}
                </li>
              </ul>
            </div>
            <h2 className="font-bold">Border Countries</h2>
            <div className="flex flex-row gap-2">
              {country?.borders?.map((border, key) => {
                return (
                  <button
                    key={key}
                    onClick={() => navigate(`/${border}`)}
                    className="shadow-md px-2 py-1 border-2"
                  >
                    {border}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
