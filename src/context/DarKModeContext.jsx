// // DarkModeContext.js
// import React, { createContext, useState } from 'react';

// const DarkModeContext = createContext();

// const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export  { DarkModeContext, DarkModeProvider };

import React, { createContext } from 'react';
const DarkModeContext = createContext();

export default DarkModeContext;


