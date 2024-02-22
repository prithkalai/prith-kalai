interface Props {
  isVisible: boolean;
}

const LetterCarousel = ({ isVisible }: Props) => {
  const letter = "a"; // The letter to display

  return (
    <div className="overflow-hidden h-12 ml-2 max-[402px]:text-4xl text-5xl w-fit">
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
