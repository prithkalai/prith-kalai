import PortfolioImage from "./PortfolioImage";
import WordCarousel from "./WordCarousel";

const About = () => {
  return (
    <div className="flex flex-col space-y-10 lg:flex-row mb-24  items-center justify-between w-full  h-fit pl-4 pr-4 ">
      <div className="flex flex-col ml-8 font-poppins flex-shrink-0">
        <p className="text-sm mb-10">Welcome to my Porfolio Website!</p>
        <p className="text-5xl mb-3">Hey Folks, Im</p>
        <WordCarousel />
        <p className="text-base w-[400px] sm:w-[500px]">
          Energetic graduate student eager to solve real world problems and
          achieve better standards everyday. Dedicated to working hard to make
          positive contributions, on time.
        </p>
      </div>
      <PortfolioImage />
    </div>
  );
};

export default About;
