import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const GoogleMap = () => {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/prithkalai/", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/prithkalai", "_blank");
  };
  return (
    <div className="flex w-full  flex-col flex-shrink items-center ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49694.20447472277!2d-77.14335520012538!3d38.88080926213739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b69d7ba7a70f%3A0xf8cf6fc845f6b093!2sArlington%2C%20VA!5e0!3m2!1sen!2sus!4v1708374919561!5m2!1sen!2sus"
        className="flex w-[350px] h-[350px]  sm:w-[450px] sm:h-[450px]"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="w-[350px] sm:w-[450px] h-fit bg-yellow-400 pl-10 pt-4 pb-4">
        <p className="font-poppins text-2xl  mb-5">Find Me On</p>

        <div className="flex flex-col justify-items-start">
          <p className="flex flex-row items-center font-poppins  text-sm mb-1">
            {" "}
            <FaPhoneAlt className=" text-lg mr-2" />
            +1 (202) 499 8289
          </p>
          <p className="flex flex-row items-center font-poppins  text-sm mb-5">
            {" "}
            <MdAttachEmail className=" text-xl mr-2" />
            prithkalai.dev@gmail.com
          </p>

          <div className="flex flex-row gap-3 ">
            <button
              className="flex flex-row items-center hover:text-white transition-colors text-xs sm:text-sm rounded-2xl"
              onClick={handleLinkedIn}
            >
              <FaLinkedin className="text-4xl " />
            </button>
            <button
              className="flex flex-row items-center hover:text-white  transition-colors text-xs sm:text-sm rounded-2xl"
              onClick={handleGitHub}
            >
              <BsGithub className="text-4xl " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
