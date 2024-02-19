import EducationTimeLine from "./EducationTimeLine";
import ExperienceTimeLine from "./ExperienceTimeLine";

const PastExperience = () => {
  return (
    <div className="w-full h-fit mb-7">
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2">
        {/* Education Section */}
        <EducationTimeLine />
        {/* Experience Section */}
        <ExperienceTimeLine />
      </div>
    </div>
  );
};

export default PastExperience;
