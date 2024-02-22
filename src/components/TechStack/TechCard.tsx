import { ReactNode } from "react";

interface Props {
  name: string;
  Icon: ReactNode;
}

const TechCard = ({ name, Icon }: Props) => {
  return (
    <div className="w-[150px] h-fit flex justify-start items-center overflow-visible ">
      {/* Adjusted the width and height to be the same for a square, or adjust as needed */}
      <div className="flex flex-row gap-2 place-items-center">
        <div className="text-4xl sm:text-5xl">{Icon}</div>
        <div className="font-poppins text-base sm:text-lg">{name}</div>
      </div>

      {/* object-contain will ensure the image fits within the container without distorting its aspect ratio */}
    </div>
  );
};

export default TechCard;
