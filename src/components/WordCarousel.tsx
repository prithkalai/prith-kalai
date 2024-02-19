import React, { useEffect, useState } from "react";

const WordCarousel: React.FC = () => {
  const words = [
    "Prithviraj Kalaiselvan",
    "CS Grad Student",
    "Front-End Developer",
    "Full-Stack Developer",
  ]; // Words to cycle through
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 2000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="relative overflow-hidden h-12 text-4xl mb-5">
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
