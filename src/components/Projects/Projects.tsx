import ProjectCard from "./ProjectCard";

interface Props {
  projRef: React.RefObject<HTMLDivElement>;
}

// TODO: Add GIFs to display for projects instead of images

const Projects = ({ projRef }: Props) => {
  const projects = [
    {
      id: 5,
      title: "CronoSync",
      description:
        "A Full-Stack app for efficient task and agenda management, focusing on repetitive tasks.",
      image: "/cronosync.jpg",
      projectUrl: "https://cronosync.vercel.app/",
    },
    {
      id: 2,
      title: "GameHub",
      description:
        "A website serving as a comprehensive guide to over 5,000 latest games.",
      image: "/game-hub.jpg",
      projectUrl: "http://game-hub-bice-nu.vercel.app",
    },
    {
      id: 3,
      title: "Weathora",
      description:
        "A user-centric web app delivering accurate real-time climatic conditions.",
      image: "/weathora.jpg",
      projectUrl: "https://weathora.vercel.app",
    },
    {
      id: 4,
      title: "FlightScope Analytics",
      description:
        "A secure web application created using React, Flask, and Python3 for explaining anomalies in real-time flight data.",
      image: "/flightscope.jpg",
      projectUrl: "https://www.youtube.com/watch?v=zZ8Cx4nzJHo",
    },
  ];

  return (
    <div className="w-full h-fit mb-20" ref={projRef}>
      <h1 className="font-poppins text-4xl w-fit mx-auto pt-2 mb-1">
        Projects
      </h1>
      <p className="font-poppins text-sm w-fit mx-auto mb-7 text-gray-400">
        Click on the projects to view them.
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 w-full items-center justify-items-center h-fit">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            title={proj.title}
            description={proj.description}
            image={proj.image}
            projectUrl={proj.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
