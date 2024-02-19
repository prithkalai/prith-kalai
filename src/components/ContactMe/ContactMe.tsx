import { ContactForm } from "./ContactForm";
import GoogleMap from "./GoogleMap";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ContactMe = ({ contactRef }: ContactProps) => {
  return (
    <div
      className="w-full h-fit
       mb-8"
      ref={contactRef}
    >
      <p className="font-poppins text-4xl w-fit mx-auto pt-2 mb-16">
        Contact Me
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        <GoogleMap />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;
