export default function Task({
  index,
  status,
  title,
  isDarkMode,
  toggleComplete,
  handleDelete
}) {
  return (
    <>
      <div
        className={` ${index === 0 ? "rounded-t-lg" : ""}  flex justify-start items-center py-2 border-b-[1px] border-b-neutral-lightGrayishBlue ${
          isDarkMode ? "bg-neutral-veryDarkGrayishBlue" : "bg-white"
        }`}
      >
        <input
          className={`size-10 rounded-full ml-5`}
          type="checkbox"
          name="state"
          id="state"
          onChange={() => toggleComplete(index)}
        />
        <span
          className={`text-xl ${isDarkMode ? "text-white" : "text-black"} ${
            status === "completed" ? "line-through" : ""
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
