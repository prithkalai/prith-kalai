import { FormEvent, useRef } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendMessage } from "./emailService";
import { validate } from "./inputValidation";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      const data = Object.fromEntries(new FormData(formRef.current));

      // Input Validation
      const res = validate(data);
      if (res) {
        // Invoke Email Service
        sendMessage(formRef);
      }
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col  font-poppins w-[350px] sm:w-[450px] h-fit   p-6 bg-yellow-400"
      >
        <label className="text-lg">Name</label>
        <input
          type="text"
          className="border-2 border-black mb-3 p-1 rounded-md"
          placeholder="Enter Your Name"
          name="name"
        ></input>
        <label className="text-lg">Email</label>{" "}
        <input
          type="email"
          className="border-2 border-black mb-3 p-1 rounded-md"
          placeholder="Enter Your Email ID"
          name="email"
        ></input>
        <label className="text-lg">Message</label>{" "}
        <textarea
          className="border-2 border-black h-32 mb-4 p-2 rounded-md"
          placeholder="Enter your message to me"
          name="message"
        ></textarea>
        <div className="w-full flex flex-row justify-center">
          <button className="flex flex-row items-center w-fit gap-2 p-1 sm:p-2 border-2 hover:text-white border-blue-900 hover:bg-blue-900 transition-colors text-sm rounded-2xl">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="coloured"
        transition={Bounce}
      />
    </div>
  );
};
