// TODO: Setup EmailJS client here to get form submissions
//TODO: Perform Input Validation

export const ContactForm = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col  font-poppins w-[350px] sm:w-[450px] h-fit rounded-b-xl lg:rounded-xl  p-6 bg-yellow-400">
        <p className="text-lg">Name</p>
        <input
          type="text"
          className="border-2 border-black mb-3 p-1 rounded-lg"
          placeholder="Enter Your Name"
        ></input>
        <p className="text-lg">Email</p>
        <input
          type="text"
          className="border-2 border-black mb-3 p-1 rounded-lg"
          placeholder="Enter Your Email ID"
        ></input>
        <p className="text-lg">Message</p>
        <input
          type="textarea"
          className="border-2 border-black h-32 mb-4 p-1 rounded-lg"
          placeholder="Enter your message to me"
        ></input>
        <div className="w-full flex flex-row justify-center">
          <button className="flex flex-row items-center w-fit gap-2 p-1 sm:p-2 border-2 hover:text-white border-blue-900 hover:bg-blue-900 transition-colors text-sm rounded-2xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
