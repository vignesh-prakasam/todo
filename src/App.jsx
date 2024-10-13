import React, { useState } from "react";
import Task from "./Task";
import sun from "./assets/images/icon-sun.svg";
import moon from "./assets/images/icon-moon.svg";
import bgDark from "./assets/images/bg-desktop-dark.jpg";
import bgLight from "./assets/images/bg-desktop-light.jpg";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newTask = { title: e.target.value, status: "active" };
      setTasks([...tasks, newTask]);
      e.target.value = "";
    }
  }

  return (
    <>
      <div
        className={`relative flex flex-col justify-center items-center min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div
          className={`absolute top-0 w-full h-[300px] ${
            isDarkMode
              ? "bg-[url('./assets/images/bg-desktop-dark.jpg')]"
              : "bg-[url('./assets/images/bg-desktop-light.jpg')]"
          }`}
        ></div>
        <div className="absolute top-14 w-1/3 h-96  items-center">
          <header
            className={`flex justify-between bg-image ${
              isDarkMode ? "bg-dark" : "bg-light"
            }`}
          >
            <h1
              className={`text-4xl ${
                isDarkMode ? " text-white" : " text-black"
              }`}
            >
              {" "}
              T O D O{" "}
            </h1>
            <button
              className={` w-6 h-7 mr-2  rounded ${
                isDarkMode
                  ? "bg-[url('./assets/images/icon-sun.svg')]"
                  : "bg-[url('./assets/images/icon-moon.svg')]"
              }`}
              onClick={toggleTheme}
            ></button>
          </header>
          <main className="p-4">
            <input
              type="text"
              className={`h-10 w-full pl-10 ${
                isDarkMode ? "bg-black" : "bg-white"
              }`}
              name="newTask"
              id="newTask"
              placeholder="Create a new todo.."
              onKeyDown={handleKeyDown}
            />
            <div className="mt-4">
              {tasks.map((task, index) => (
                <Task key={index} status={task.status} title={task.title} isDarkMode={isDarkMode} />
              ))}
            </div>

          </main>
        </div>
      </div>
    </>
  );
};

export default App;
