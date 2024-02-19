import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";

const NavBar = () => {
  // TODO: Create a dropdown menu

  const [visible, setVisible] = useState(true);

  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currScrollY = window.scrollY;
      setVisible(currScrollY < lastScroll.current || currScrollY <= 0);
      lastScroll.current = currScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex flex-row h-20  items-center justify-between mb-6 pl-4 pr-4 transition-transform duration-300 ${
          !visible ? "-translate-y-full" : ""
        }`}
      >
        <p className="font-poppins font-semibold text-lg">
          Prithviraj Kalaiselvan
        </p>

        <DropDown />

        <div className="hidden lg:flex flex-row space-x-8 font-poppins font-medium text-md text-gray-500">
          <a className="hover:text-yellow-400 transition-colors duration-300">
            About
          </a>
          <a className="hover:text-yellow-400 transition-colors duration-300">
            Projects
          </a>
          <a className="hover:text-yellow-400 transition-colors duration-300">
            My Experience
          </a>
          <a className="text-blue-600 hover:text-yellow-400 transition-colors duration-300">
            Schedule a meet with me
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
