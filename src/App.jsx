import React, { useState } from "react";
import Task from "./Task";
import sun from "./assets/images/icon-sun.svg";
import moon from "./assets/images/icon-moon.svg";
import bgDark from "./assets/images/bg-desktop-dark.jpg";
import bgLight from "./assets/images/bg-desktop-light.jpg";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dragElement, setdragElement] = useState(false);
  const [draggedOver, setDraggedOver] = useState(false);
  const [tasks, setTasks] = useState([
    {
      title: "Complete online JavaScript course", status: "completed"
    },
    {
      title: "Jog around the park 3x", status: "active"
    },
    {
      title: "10 minutes meditation", status: "active"
    },
    {
      title: "Read for 1 hour", status: "active"
    },
    {
      title: "Pick up groceries", status: "active"
    },
    {
      title: "Complete Todo App on Frontend Mentor", status: "active"
    },
  ]);
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

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const clearCompleted = () => {
    const newTasks = tasks.filter((task) => task.status === "active");
    setTasks(newTasks);
  };

  const itemsLeft = tasks.filter((task) => task.status === "active").length;

  const onDragStart = (e, index) => {
    setdragElement(index)
  }

  const onDragEnter = (e, index) => {
    setDraggedOver(index);
  }

  // on drag end
const handleSort = (e, index) => {
  setdragElement(false);
  console.log("drag end", index);
  const newTasks = [...tasks];
  const draggedTask = newTasks[dragElement];
  newTasks.splice(dragElement, 1);
  newTasks.splice(draggedOver, 0, draggedTask);
  setTasks(newTasks);
}

  return (
    <>
      <div
        className={`relative flex flex-col justify-center items-center min-h-screen ${
          isDarkMode
            ? "bg-darkTheme-veryDarkBlue text-darkTheme-darkGrayishBlue"
            : "bg-white text-black"
        }`}
      >
        <div
          className={`absolute top-0  w-full h-[300px] ${
            isDarkMode
              ? "bg-[url('./assets/images/bg-desktop-dark.jpg')]"
              : "bg-[url('./assets/images/bg-desktop-light.jpg')]"
          }`}
        ></div>
        <div className="absolute top-12 sm:w-1/2 w-full px-10 h-96  items-center">
          <header
            className={`flex justify-between`}
          >
            <h1 className={`text-5xl text-white`}> T O D O </h1>
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
              className={`h-14 text-2xl  w-full pl-11 rounded-md ${
                isDarkMode
                  ? "bg-darkTheme-veryDarkDesaturatedBlue text-darkTheme-lightGrayishBlue"
                  : "bg-white"
              }`}
              name="newTask"
              id="newTask"
              placeholder="Create a new todo.."
              onKeyDown={handleKeyDown}
            />
            <div className="mt-4 ">
              {tasks
                .filter((task) => task.status == filter || filter == "all")
                .map((task, index) => (
                  <Task
                    key={index}
                    index={index}
                    status={task.status}
                    title={task.title}
                    isDarkMode={isDarkMode}
                    toggleComplete={toggleComplete}
                    handleDelete={handleDelete}
                    onDragStart={onDragStart}
                    onDragEnter={onDragEnter}
                    onDragEnd={handleSort}
                  />
                ))}
              <div
                className={`sm:hidden text-neutral-darkGrayishBlue py-5 mt-0 shadow-xl flex justify-between items-center rounded-b-lg  border-b-neutral-lightGrayishBlue ${
                  isDarkMode
                    ? "bg-darkTheme-veryDarkDesaturatedBlue"
                    : "bg-white"
                }`}
              >
                  <div className="ml-5">
                    <a href="#" className="">
                      {itemsLeft} Items left
                    </a>
                  </div>

                  <div className="mr-5">
                  <a
                    href="#"
                    className=""
                    onClick={clearCompleted}
                  >
                    Clear completed
                  </a>
                </div>

              </div>
              {/* FOOTER */}
              <footer
                className={` text-neutral-darkGrayishBlue sm:mt-0 mt-5  shadow-lg flex justify-between items-center py-3 rounded-b-lg sm:rounded-t-none  rounded-t-lg  border-b-neutral-lightGrayishBlue ${
                  isDarkMode ? "bg-darkTheme-veryDarkDesaturatedBlue" : "bg-white"
                }`}
              >
                <div className="ml-5">
                  <a href="#" className="hidden sm:block">
                    {itemsLeft} Items left
                  </a>
                </div>
                <div className="flex justify-center items-center sm:gap-2 gap-10 text-xl sm:text-md">
                  <a
                    href="#"
                    className={`${
                      filter == "all" ? "text-primary-brightBlue" : ""
                    } hover:text-neutral-veryDarkGrayishBlue`}
                    onClick={() => setFilter("all")}
                  >
                    All
                  </a>
                  <a
                    href="#"
                    className={`${
                      filter == "active" ? "text-primary-brightBlue" : ""
                    } hover:text-neutral-veryDarkGrayishBlue`}
                    onClick={() => setFilter("active")}
                  >
                    Active
                  </a>
                  <a
                    href="#"
                    className={`${
                      filter == "completed" ? "text-primary-brightBlue" : ""
                    } hover:text-neutral-veryDarkGrayishBlue`}
                    onClick={() => setFilter("completed")}
                  >
                    Completed
                  </a>
                </div>
                <div className="mr-5">
                  <a
                    href="#"
                    className="hidden sm:block"
                    onClick={clearCompleted}
                  >
                    Clear completed
                  </a>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
