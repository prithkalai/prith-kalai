import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropdown = () => setDropDown(!dropDown);
  return (
    <div className="relative md:hidden font-poppins">
      {" "}
      {/* Make the parent div relative */}
      <button onClick={toggleDropdown} className="z-10">
        <IoMenu className="hover:text-yellow-400 transition-colors duration-300" />
      </button>
      {dropDown && (
        <div
          className={`absolute right-0 z-10 mt-2 w-48 bg-white shadow-md flex flex-col space-y-2 py-2`}
        >
          <a
            href="#about"
            className="px-4 py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setDropDown(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setDropDown(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-4 py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setDropDown(false)}
          >
            My Experience
          </a>
          <a
            href="#schedule"
            className="px-4 py-2 cursor-pointer text-blue-600 hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setDropDown(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDown;
