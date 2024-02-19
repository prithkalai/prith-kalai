interface Props {
  title: string;
  description: string;
  image: string;
  projectUrl: string;
}

// TODO: Add buttons for the Github URL and Live Demo for each project

const ProjectCard = ({ title, description, image, projectUrl }: Props) => {
  const handleClick = () => {
    window.open(projectUrl, "_blank");
  };

  return (
    <div
      className="w-full h-fit p-4 font-poppins cursor-pointer hover:bg-yellow-400 transition-colors rounded-md"
      onClick={handleClick}
    >
      <img src={image} className="mb-2"></img>
      <p className="w-fit mx-auto text-lg font-medium mb-1">{title}</p>
      <p className="text-sm text-center text-gray-500">{description}</p>
    </div>
  );
};

export default ProjectCard;
