export type EducationEntry = {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  grade: string;
};

const educationHistory: EducationEntry[] = [
  {
    id: 1,
    institution: "The George Washington University",
    degree: "MS, Computer Science",
    period: "2022 - 2024",
    description: "",
    grade: "3.85 / 4.0 GPA",
  },
  {
    id: 2,
    institution: "College of Engineering, Guindy",
    degree: "B.Tech, Information Technology",
    grade: "8.09 / 10 CGPA",
    description: "",
    period: "2018 - 2022",
  },
  {
    id: 3,
    institution: "Maharishi International Residential School",
    degree: "12th Grade - CBSE",
    period: "2017 - 2018",
    description: "",
    grade: "",
  },
];

const EducationTimeLine = () => {
  return (
    <div className="w-full ">
      <p className="font-poppins text-4xl w-fit mx-auto pt-2 mb-16">
        Education
      </p>
      <div className="w-full font-poppins">
        <div className="relative w-fit mx-auto">
          <div className="flex flex-col items-start">
            {educationHistory.map((entry) => (
              <div key={entry.id} className="flex flex-row items-start mb-12">
                {/* Dot */}
                <div className="w-6 h-6 bg-yellow-300 rounded-full z-10  mr-6"></div>
                <div className="bg-white text-start flex flex-col gap-[2px]">
                  <h3 className="font-semibold text-2xl">{entry.degree}</h3>
                  <p>{entry.institution}</p>
                  <p className="text-base font-medium">{entry.grade}</p>
                  <p className="text-sm text-gray-600">{entry.period}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Timeline Line */}
          <div className=" absolute top-5 left-[10px] w-1 border-2 border-black h-[310px] "></div>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeLine;
