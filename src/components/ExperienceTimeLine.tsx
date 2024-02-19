export type ExperienceEntry = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
};

const experienceHistory: ExperienceEntry[] = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "IpserLab",
    period: "2023 - Present",
    description: "",
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "Anna University",
    period: "2022",
    description: "",
  },
];

const ExperienceTimeLine = () => {
  return (
    <div className="w-full ">
      <p className="font-poppins text-4xl w-fit mx-auto pt-2 mb-16">
        Experience
      </p>
      <div className="w-full font-poppins">
        <div className="relative w-fit mx-auto">
          <div className="flex flex-col items-start">
            {experienceHistory.map((entry) => (
              <div key={entry.id} className="flex flex-row items-start mb-12">
                {/* Dot */}
                <div className="w-6 h-6 bg-yellow-300 rounded-full z-10  mr-6"></div>
                <div className="bg-white text-start">
                  <h3 className="font-semibold text-2xl">{entry.role}</h3>
                  <p>{entry.company}</p>
                  <p className="text-sm text-gray-600">{entry.period}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Timeline Line */}
          <div className=" absolute top-5 left-[10px] w-1 border-2 border-black h-[120px] "></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeLine;
