import { GrDocumentPdf } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import LetterCarousel from "./LetterCarousel";
import PortfolioImage from "./PortfolioImage";
import WordCarousel from "./WordCarousel";

const About = () => {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/prithkalai/", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/prithkalai", "_blank");
  };

  const handleResume = () => {
    window.open(
      "https://docs.google.com/document/d/12bxcr1Ki2jVT4J0bsRQrseDWqdkBTT6CUbK73YVitNw/edit?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col space-y-10 lg:flex-row mb-24  items-center justify-between w-full  h-fit pl-4 pr-4 ">
      <div className="flex flex-col ml-8 font-poppins flex-shrink-0">
        <p className="text-sm mb-10">Welcome to my Porfolio Website!</p>
        <div className=" flex flex-row text-5xl mb-3">
          Hey Folks, Im
          <LetterCarousel />
        </div>
        <WordCarousel />
        <p className="text-base w-[400px] sm:w-[500px] mb-7">
          Energetic graduate student eager to solve real world problems and
          achieve better standards everyday. Dedicated to working hard to make
          positive contributions, on time.
        </p>

        <div className="flex flex-row gap-4 ">
          <button
            className="flex flex-row items-center gap-2 p-1 sm:p-2 border-2 hover:text-white active: border-yellow-400 hover:bg-yellow-400 transition-colors text-xs sm:text-sm rounded-2xl"
            onClick={handleResume}
          >
            Resume
            <GrDocumentPdf className="text-md sm:text-lg " />
          </button>
          <button
            className="flex flex-row items-center gap-2 p-1 sm:p-2 border-2 hover:text-white border-blue-500 hover:bg-blue-500 transition-colors text-xs sm:text-sm rounded-2xl"
            onClick={handleLinkedIn}
          >
            LinkedIn
            <FaLinkedin className="text-md sm:text-lg " />
          </button>
          <button
            className="flex flex-row items-center gap-2 p-1 sm:p-2 border-2 hover:text-white border-blue-900 hover:bg-blue-900 transition-colors text-xs sm:text-sm rounded-2xl"
            onClick={handleGitHub}
          >
            GitHub
            <BsGithub className="text-md sm:text-lg " />
          </button>
        </div>
      </div>
      <PortfolioImage />
    </div>
  );
};

export default About;
