import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";

interface Props {
  handleScroll: (sectionKey: string) => void;
}

const DropDown = ({ handleScroll }: Props) => {
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropDown(!dropDown);

  //Close dropdown when clicking outside
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropDown(false);
      }
    };

    // Close dropdown on scroll
    const handleScroll = () => {
      setDropDown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative md:hidden font-poppins" ref={dropdownRef}>
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
            className="px-4 py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={() => {
              setDropDown(false);
              handleScroll("projects");
            }}
          >
            Projects
          </a>
          <a
            className="px-4 py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={() => {
              setDropDown(false);
              handleScroll("myexp");
            }}
          >
            My Experience
          </a>
          <a
            className="px-4 py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={() => {
              setDropDown(false);
              handleScroll("about");
            }}
          >
            About
          </a>
          <a
            className="px-4 py-2 cursor-pointer text-blue-600 hover:text-yellow-400 transition-colors duration-300"
            onClick={() => {
              setDropDown(false);
              handleScroll("contact");
            }}
          >
            Contact Me
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDown;
