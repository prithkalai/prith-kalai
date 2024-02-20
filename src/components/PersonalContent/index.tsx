interface Props {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const PersonalContent = ({ aboutRef }: Props) => {
  return (
    <div className="w-full h-fit flex justify-center mb-7" ref={aboutRef}>
      <div className=" w-[350px] sm:w-[500px] md:w-[700px] lg:w-[800px]">
        <p className="font-poppins text-4xl w-fit mx-auto pt-2 mb-5">
          About Me
        </p>
        <p className="font-poppins text-xs md:text-sm lg:text-base">
          My fascination with technology began in my childhood when I was
          exposed to computers and ever since, I've seen myself as a problem
          solver using software and computer technologies. This passion has
          shaped my career path towards computer science. <br />
          <br />
          I'm proficient in various key areas of computer science such as data
          structures and algorithms, and I have experience in executing
          successful projects in domains such as web technology, machine
          learning, and artificial intelligence. During these projects I have
          worked with different kinds of people and this gave me an opportunity
          to understand the working dynamics of different kind of teams.
          <br />
          <br />I understood that I have the ability to convey and articulate my
          thoughts clearly and present ideas with clarity. This in turn has
          helped reduce miscommunication among team members. My approach to
          problem-solving is based on breaking down complex problems into
          manageable parts - a fundamental principle in computer science that I
          apply to both professional and personal life.
          <br />
          <br />
          What excites me most about this career path is the potential to solve
          intricate problems using nothing more than a computer and some lines
          of code. Every new concept learned is an opportunity to explore more
          creative solutions, keeping me motivated and engaged in this field.
          I'm eager to continue this journey and make a meaningful impact in the
          world of tech.
        </p>
      </div>
    </div>
  );
};

export default PersonalContent;
