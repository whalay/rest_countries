
import { Routes, Route} from "react-router";
import { DarkModeProvider } from "./context/DarkModeContext";
// import {DarkModeProvider} from './context/DarkModeContext.js';


import Header from "./components/Header";
import CountryDetail from "./pages/CountryDetail";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <DarkModeProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:name" element={<CountryDetail />} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
