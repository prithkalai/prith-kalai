import { useState } from "react";
import { IoMenu } from "react-icons/io5";

//TODO: Design the dropdown

const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropdown = () => setDropDown(!dropDown);
  return (
    <div className="relative lg:hidden font-poppins">
      {" "}
      {/* Make the parent div relative */}
      <button onClick={toggleDropdown} className="z-10">
        <IoMenu />
      </button>
      {dropDown && (
        <div
          className={`absolute right-0 z-10 mt-2 w-48 bg-white shadow-md flex flex-col space-y-2 py-2`}
        >
          <a
            href="#about"
            className="px-4 py-2 hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 py-2 hover:text-yellow-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-4 py-2 hover:text-yellow-400 transition-colors duration-300"
          >
            My Experience
          </a>
          <a
            href="#schedule"
            className="px-4 py-2 text-blue-600 hover:text-yellow-400 transition-colors duration-300"
          >
            Schedule a meet with me
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDown;
