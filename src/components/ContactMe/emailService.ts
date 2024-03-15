import { toast } from "react-toastify";
import emailJS from "@emailjs/browser";

export const sendMessage = (formRef: React.RefObject<HTMLFormElement>) => {
  if (formRef.current) {
    const id = toast.loading("Sending Message", { theme: "colored" });
    emailJS
      .sendForm("service_x6i55ad", "template_258sbtj", formRef.current, {
        publicKey: "zp5qYAfMbSPbUy9Og",
      })
      .then(
        () => {
          toast.update(id, {
            type: "success",
            render: "Message Sent 👌",
            isLoading: false,
            hideProgressBar: false,
            autoClose: 3000,
            theme: "colored",
          });
          console.log("SUCCESS!");
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          toast.update(id, {
            type: "error",
            render: "Error Sending Message 🤯",
            isLoading: false,
            hideProgressBar: false,
            autoClose: 3000,
            theme: "colored",
          });
          console.log("FAILED...", error.text);
        }
      );
  }
};
