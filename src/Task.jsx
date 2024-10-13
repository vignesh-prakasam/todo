export default function Task({ index, status, title, isDarkMode, toggleComplete }) {
  return (
    <>
      <div className={`flex justify-start items-center border-b-[1px] border-b-neutral-lightGrayishBlue ${isDarkMode ? 'bg-neutral-veryDarkGrayishBlue': 'bg-white' }`}>
        <input className={`size-10 rounded-full`} type="checkbox" name="state" id="state" onChange={() => toggleComplete(index)}/>
        <span className={`text-xl ${isDarkMode ? "text-white" : "text-black"} ${status === 'completed' ? 'line-through' : ''}`}>
          {" "}
          {title}{" "}
        </span>
      </div>
    </>
  );
}
