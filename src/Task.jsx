export default function Task({ status, title, isDarkMode }) {
  return (
    <>
      <div className={`flex justify-start items-center border-b-[1px] border-b-neutral-lightGrayishBlue shadow-2xl ${isDarkMode ? 'bg-neutral-veryDarkGrayishBlue': 'bg-white' }`}>
        <input className={`size-10 rounded-full`} type="checkbox" name="state" id="state" />
        <span className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>
          {" "}
          {title}{" "}
        </span>
      </div>
    </>
  );
}
