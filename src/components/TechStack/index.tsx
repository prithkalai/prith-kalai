import { ReactNode } from "react";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import TechCard from "./TechCard";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";

type TechIcons = {
  id: number;
  name: string;
  Icon: ReactNode;
};

interface Props {
  techRef: React.RefObject<HTMLDivElement>;
}

const TechStack = ({ techRef }: Props) => {
  const tech: TechIcons[] = [
    {
      id: 1,
      name: "React",
      Icon: <FaReact />,
    },
    {
      id: 2,
      name: "Mongo",
      Icon: <BiLogoMongodb />,
    },
    {
      id: 3,
      name: "Node",
      Icon: <FaNodeJs />,
    },
    {
      id: 4,
      name: "Express",
      Icon: <SiExpress />,
    },
    {
      id: 5,
      name: "JavaScript",
      Icon: <RiJavascriptFill />,
    },
    {
      id: 6,
      name: "TypeScript",
      Icon: <BiLogoTypescript />,
    },
    {
      id: 7,
      name: "TailwindCSS",
      Icon: <SiTailwindcss />,
    },
    {
      id: 8,
      name: "HTML5",
      Icon: <IoLogoHtml5 />,
    },
    {
      id: 9,
      name: "CSS3",
      Icon: <FaCss3Alt />,
    },
    {
      id: 10,
      name: "Python",
      Icon: <FaPython />,
    },
  ];

  return (
    <div className="w-full h-fit mb-16" ref={techRef}>
      <p className="font-poppins text-4xl w-fit mx-auto pt-2 mb-5">
        Tech Stack
      </p>
      <div className="w-full flex h-fit justify-center">
        <div className="w-[600px] grid grid-cols-2 gap-y-6 bg-yellow-400 bg-opacity-80 rounded-xl justify-items-center items-center mr-4 ml-4 pt-7 pb-7">
          {tech.map((icon) => (
            <TechCard key={icon.id} name={icon.name} Icon={icon.Icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
