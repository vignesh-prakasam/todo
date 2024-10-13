import React, { useState } from "react";
import Task from "./Task";
import sun from "./assets/images/icon-sun.svg";
import moon from "./assets/images/icon-moon.svg";
import bgDark from "./assets/images/bg-desktop-dark.jpg";
import bgLight from "./assets/images/bg-desktop-light.jpg";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status =
      newTasks[index].status === "active" ? "completed" : "active";
    setTasks(newTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newTask = { title: e.target.value, status: "active" };
      setTasks([...tasks, newTask]);
      e.target.value = "";
    }
  };

  const filterTasks = (status) => {
    return tasks.filter((task) => task.status === status);
  }

  const clearCompleted = () => {
    const newTasks = tasks.filter((task) => task.status === "active");
    setTasks(newTasks);
  };

  const itemsLeft = tasks.filter((task) => task.status === "active").length;

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
              className={` w-6 h-[26px] rounded ${
                isDarkMode
                  ? "bg-[url('./assets/images/icon-sun.svg')]"
                  : "bg-[url('./assets/images/icon-moon.svg')]"
              }`}
              onClick={toggleTheme}
            ></button>
          </header>
          <main className="mt-4">
            <input
              type="text"
              className={`h-10 w-full pl-10 rounded-md ${
                isDarkMode ? "bg-black" : "bg-white"
              }`}
              name="newTask"
              id="newTask"
              placeholder="Create a new todo.."
              onKeyDown={handleKeyDown}
            />
            <div className="mt-4">
              {tasks.filter((task) => (task.status == filter) || (filter == 'all') ).map((task, index) => (
                <Task
                  key={index}
                  index={index}
                  status={task.status}
                  title={task.title}
                  isDarkMode={isDarkMode}
                  toggleComplete={toggleComplete}
                />
              ))}
              <div className="flex justify-between items-center">
                <div>
                  <a href="#">{itemsLeft} Items left</a>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <a href="#" onClick={() => setFilter('all')}>All</a>
                  <a href="#" onClick={() => setFilter('active')}>Active</a>
                  <a href="#" onClick={() => setFilter('completed')}>Completed</a>
                </div>
                <div>
                  <a href="#" onClick={clearCompleted}>Clear completed</a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
