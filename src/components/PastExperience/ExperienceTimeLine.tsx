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
    period: "June 2023 - March 2024 (10 Months)",
    description:
      "Developed 10 responsive web pages and enhanced a landing page using React, boosting efficiency by 20%. I also streamlined the Node.js backend, cutting load times by 5%, and played a key role in a UI overhaul, demonstrating swift, impactful web development skills.",
  },
  {
    id: 2,
    role: "Software Engineer - HR",
    company: "Tiaano",
    period: "July 2021 - July 2022 (1 Yr 1 Month)",
    description:
      "Aided in migrating the HR system of 50+ employees from on-premises servers to AWS Cloud. Enabled a cost reduction of 80% compared to on-premise solution.",
  },
  {
    id: 3,
    role: "Junior Software Engineer",
    company: "Great Line International LLC",
    period: "March 2021 - June 2022 (4 Months)",
    description:
      "Contributed to Great Line International's app, designed to streamline truck delivery operations, by developing server-side logic with Express.js and Node.js, enhancing MongoDB schema design, and optimizing API integration for faster load times. I also conducted API performance testing with Postman, resolving over 10 critical issues pre-deployment.",
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
                <div className="bg-white text-start flex flex-col">
                  <h3 className="font-semibold text-xl sm:text-2xl">
                    {entry.role}
                  </h3>
                  <p className="mb-3">{entry.company}</p>
                  <p className="text-xs sm:text-sm w-[300px] sm:w-[450px] mb-2">
                    {entry.description}
                  </p>
                  <p className="text-sm text-gray-600">{entry.period}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Timeline Line */}
          <div className=" absolute top-5 left-[10px] w-1 border-2 border-black h-[240px] sm:h-[230px] "></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeLine;
