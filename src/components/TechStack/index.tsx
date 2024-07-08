import { ReactNode } from "react";
import {
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  FaCss3Alt,
  FaDocker,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiHibernate,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import TechCard from "./TechCard";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiSpring } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

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
    // Frontend
    {
      id: 1,
      name: "React",
      Icon: <FaReact />,
    },
    {
      id: 2,
      name: "TailwindCSS",
      Icon: <SiTailwindcss />,
    },
    {
      id: 3,
      name: "HTML5",
      Icon: <IoLogoHtml5 />,
    },
    {
      id: 4,
      name: "CSS3",
      Icon: <FaCss3Alt />,
    },

    // Middleware
    {
      id: 5,
      name: "Express",
      Icon: <SiExpress />,
    },

    // Backend
    {
      id: 6,
      name: "NodeJS",
      Icon: <FaNodeJs />,
    },
    {
      id: 7,
      name: "Spring",
      Icon: <SiSpring />,
    },
    {
      id: 8,
      name: "Spring Boot",
      Icon: <SiSpringboot />,
    },
    {
      id: 9,
      name: "Hibernate",
      Icon: <SiHibernate />,
    },

    // Databases
    {
      id: 10,
      name: "MongoDB",
      Icon: <BiLogoMongodb />,
    },
    {
      id: 11,
      name: "MySQL",
      Icon: <GrMysql />,
    },
    {
      id: 12,
      name: "PostgreSQL",
      Icon: <BiLogoPostgresql />,
    },

    // Cloud
    {
      id: 13,
      name: "Docker",
      Icon: <FaDocker />,
    },

    // Programming Languages
    {
      id: 14,
      name: "JavaScript",
      Icon: <RiJavascriptFill />,
    },
    {
      id: 15,
      name: "TypeScript",
      Icon: <BiLogoTypescript />,
    },
    {
      id: 16,
      name: "Python",
      Icon: <FaPython />,
    },
    {
      id: 17,
      name: "Java",
      Icon: <FaJava />,
    },
  ];

  return (
    <div className="w-full h-fit mb-16" ref={techRef}>
      <p className="font-poppins text-4xl w-fit mx-auto pt-2 mb-5">
        Tech Stack
      </p>
      <div className="w-full flex h-fit justify-center">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 bg-yellow-400 bg-opacity-80 rounded-xl justify-items-center items-center ml-4 mr-4 md:mr-20 md:ml-20 pt-7 pb-7">
          {tech.map((icon) => (
            <TechCard key={icon.id} name={icon.name} Icon={icon.Icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
