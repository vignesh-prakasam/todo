import React, { useState } from 'react';
import sun from './assets/images/icon-sun.svg';
import moon from './assets/images/icon-moon.svg';
import bgDark from './assets/images/bg-desktop-dark.jpg';
import bgLight from './assets/images/bg-desktop-light.jpg';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`relative flex flex-col justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        
        <div className={`absolute top-0 w-full h-[300px] ${isDarkMode ? "bg-[url('./assets/images/bg-desktop-dark.jpg')]" : "bg-[url('./assets/images/bg-desktop-light.jpg')]"}`}></div>
        <div className='absolute top-14 w-1/3 h-96  items-center border-orange-400 border-2'>
          <header className={`flex justify-between bg-image ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
            <h1 className={`text-2xl ${isDarkMode ? ' text-white' : ' text-black'}`}> T O D O </h1>
            <button
              className={` w-6 h-7 mr-2  rounded ${isDarkMode ? "bg-[url('./assets/images/icon-sun.svg')]" : "bg-[url('./assets/images/icon-moon.svg')]"}`}
              onClick={toggleTheme}
            >
              
            </button>
          </header>
          <main className="p-4">
            <h1 className="text-2xl font-bold">Welcome to the Todo App</h1>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;