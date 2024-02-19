import EducationTimeLine from "./EducationTimeLine";
import ExperienceTimeLine from "./ExperienceTimeLine";

interface PastExpProps {
  expRef: React.RefObject<HTMLDivElement>;
}

const PastExperience = ({ expRef }: PastExpProps) => {
  return (
    <div className="w-full h-fit mb-5" ref={expRef}>
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2">
        {/* Experience Section */}
        <ExperienceTimeLine />
        {/* Education Section */}
        <EducationTimeLine />
      </div>
    </div>
  );
};

export default PastExperience;
