import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import CountryDetail from "./pages/CountryDetail";
import Homepage from "./pages/Homepage";

function App() {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoad, setIsLoad] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     // const response = await fetch(`https://restcountries.com/v3.1/all`);
  //     // const actualData = await response.json();

  //     // setData(actualData);
  //     // console.log(actualData);

  //     // setIsLoad(false);
     
  //       const response = await fetch(`https://restcountries.com/v3.1/all`);
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: This status is ${response.status}`
  //         );
  //       }
  //       let actualData = await response.json();
  //       console.log(actualData);
  //       setData(actualData);
  //       console.log(data);
  //       setIsLoad(false);
  //     // } catch (err) {
  //     //   setError(err.message);
  //     // }
  //   };
  //   getData();
  // }, []);

  // const getData = () => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((results) => {

  //       setData(results);
  //       console.log(data);
  //       console.log(results);
  //       setIsLoad(false);

  //     });
  //     console.log(data);
  // };

  return (
    <div>
      <Header />
      
        <Routes>
          <Route path="/" element={<Homepage  />} />
          <Route path="/:name" element={<CountryDetail  />} />
        </Routes>
      
    </div>
  );
}

export default App;
