import { useEffect, useState } from "react";

interface Props {
  handleVisibility: (isVisible: boolean) => void;
}

const WordCarousel = ({ handleVisibility }: Props) => {
  const words = [
    "Prithviraj Kalaiselvan",
    "CS Graduate (MS)",
    "AWS Certified (SAA)",
    "Front-End Developer",
    "Full-Stack Developer",
  ]; // Words to cycle through
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex == 0 || currentIndex == 2) {
      handleVisibility(false);
    } else {
      handleVisibility(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="relative backdrop-blur-sm overflow-hidden h-12 max-[340px]:text-[28px] max-[402px]:text-3xl text-4xl mb-5">
      {words.map((word, index) => (
        <div
          key={word}
          className={`absolute  transition-all transform duration-1000 ${
            index === currentIndex
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default WordCarousel;
