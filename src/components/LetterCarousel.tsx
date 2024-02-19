import React, { useEffect, useState } from "react";

const LetterCarousel: React.FC = () => {
  const letter = "a"; // The letter to display
  const [isVisible, setIsVisible] = useState(false); // Initially, don't show the letter

  useEffect(() => {
    // Function to handle toggling the visibility
    const toggleVisibility = () => {
      setIsVisible(false); // Ensure it starts hidden, then toggle after 2 seconds

      // Wait for 2 seconds before showing the letter
      const timeoutId = setTimeout(() => {
        setIsVisible(true); // Show the letter

        // After showing the letter for 6 seconds, hide it again
        setTimeout(() => {
          setIsVisible(false);
        }, 9000);
      }, 3000);

      return () => clearTimeout(timeoutId);
    };

    toggleVisibility(); // Call on mount to start the cycle

    // Repeat the cycle every 8 seconds (2 seconds hidden, 6 seconds shown)
    const intervalId = setInterval(toggleVisibility, 12000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden h-12 ml-2 text-5xl w-fit">
      <div
        className={`absolute transition-all transform duration-1000 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {letter}
      </div>
    </div>
  );
};

export default LetterCarousel;
