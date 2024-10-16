
import "./App.css";

export default function Task({
  index,
  status,
  title,
  isDarkMode,
  toggleComplete,
  handleDelete
}) {
  // console.log(isDarkMode + "===dark mode");
  // console.log(status + "===status");
  return (
    <>
      <div
      className={` ${index === 0 ? "rounded-t-lg" : ""} text-neutral-darkGrayishBlue shadow-lg flex justify-start items-center py-2 border-b-[0.5px] border-b-darkTheme-veryDarkGrayishBlue1 ${
        isDarkMode ? "bg-darkTheme-veryDarkDesaturatedBlue" : "bg-white"
      }`}
      >
      <input
        className={`size-7 rounded-full ml-5 checkbox border-[1px] ${isDarkMode ? "bg-darkTheme-veryDarkDesaturatedBlue border-darkTheme-veryDarkGrayishBlue1" : "border-neutral-veryLightGrayishBlue"}`}
        type="checkbox"
        name="state"
        id="state"
        onChange={() => toggleComplete(index)}
        checked={status === "completed"}
      />
      <span
        className={`ml-5 py-3 text-2xl ${(isDarkMode && status != "completed") ? "text-darkTheme-lightGrayishBlue" : "text-neutral-veryDarkGrayishBlue"} ${
        status === "completed" ? (isDarkMode ? 'line-through text-darkTheme-darkGrayishBlue' : 'line-through text-lightTheme-darkGrayishBlue') : ""
        }`}
      >
        {" "}
        {title}{" "}
      </span>
      <div className="flex justify-end items-center flex-grow mr-5">
        <button
        onClick={() => handleDelete(index)}
        className="bg-[url('./assets/images/icon-cross.svg')] w-[18px] h-[18px]"
        ></button>
      </div>
      </div>
    </>
    );
}
