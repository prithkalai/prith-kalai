import EducationTimeLine from "./EducationTimeLine";
import ExperienceTimeLine from "./ExperienceTimeLine";

const PastExperience = () => {
  return (
    <div className="w-full h-fit mb-5">
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
