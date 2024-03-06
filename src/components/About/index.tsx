import { GrDocumentPdf } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import LetterCarousel from "./LetterCarousel";
import PortfolioImage from "./PortfolioImage";
import WordCarousel from "./WordCarousel";
import { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { SparklesCore } from "../ui/sparkles";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/prithkalai/", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/prithkalai", "_blank");
  };

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1oRBum9r--oL5XEPJW7JV8WuIyqkZkj2M/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col relative space-y-10 lg:flex-row mb-24  items-center justify-between w-full  h-fit pl-4 pr-4 pb-16 sm:pt-7">
      <div className="block sm:hidden w-full absolute inset-0 -z-10 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={2}
          maxSize={2.5}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FEE214"
        />
      </div>
      <BackgroundBeams className="hidden sm:block -z-10 w-full absolute h-full inset-0" />
      <div className="flex flex-col md:ml-8 font-poppins sm:backdrop-blur-xl">
        <p className="text-sm mb-10">Welcome to my Porfolio Website!</p>
        <div className=" flex flex-row  max-[402px]:text-4xl text-5xl max-[402px]:mb-1 mb-3 ">
          Hey Folks, Im
          <LetterCarousel isVisible={isVisible} />
        </div>
        <WordCarousel handleVisibility={(val) => setIsVisible(val)} />
        <p className="text-base  sm:w-[500px] mb-7 ">
          Energetic graduate student eager to solve real world problems and
          achieve better standards everyday. Dedicated to working hard to make
          positive contributions, on time.
        </p>

        <div className="flex flex-row gap-4 justify-center sm:justify-start">
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
      <div className="w-full flex flex-row justify-center lg:justify-end">
        <PortfolioImage />
      </div>
    </div>
  );
};

export default About;
