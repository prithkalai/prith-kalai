//TODO: Perform Input Validation

import { FormEvent, useRef } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailJS from "@emailjs/browser";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Sending Email", { theme: "colored" });

    if (formRef.current) {
      emailJS
        .sendForm("service_x6i55ad", "template_258sbtj", formRef.current, {
          publicKey: "zp5qYAfMbSPbUy9Ogx",
        })
        .then(
          () => {
            toast.update(id, {
              type: "success",
              render: "Email Sent 👌",
              isLoading: false,
              hideProgressBar: false,
              autoClose: 3000,
              theme: "colored",
            });
            console.log("SUCCESS!");
          },
          (error) => {
            toast.update(id, {
              type: "error",
              render: "Error Sending Email 🤯",
              isLoading: false,
              hideProgressBar: false,
              autoClose: 3000,
              theme: "colored",
            });
            console.log("FAILED...", error.text);
          }
        );
      formRef.current.reset();
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col  font-poppins w-[350px] sm:w-[450px] h-fit rounded-b-xl lg:rounded-xl  p-6 bg-yellow-400"
      >
        <label className="text-lg">Name</label>
        <input
          type="text"
          className="border-2 border-black mb-3 p-1 rounded-lg"
          placeholder="Enter Your Name"
          name="name"
        ></input>
        <label className="text-lg">Email</label>{" "}
        <input
          type="email"
          className="border-2 border-black mb-3 p-1 rounded-lg"
          placeholder="Enter Your Email ID"
          name="email"
        ></input>
        <label className="text-lg">Message</label>{" "}
        <input
          type="textarea"
          className="border-2 border-black h-32 mb-4 p-1 rounded-lg"
          placeholder="Enter your message to me"
          name="message"
        ></input>
        <div className="w-full flex flex-row justify-center">
          <button className="flex flex-row items-center w-fit gap-2 p-1 sm:p-2 border-2 hover:text-white border-blue-900 hover:bg-blue-900 transition-colors text-sm rounded-2xl">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
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
