const Footer = () => {
  return (
    <>
      <div className="w-full h-[9px] shadow-lg" />
      <div className="flex w-full h-[200px]  place-items-center">
        <div className="w-full flex flex-col gap-3 font-poppins place-items-center text-xs sm:text-sm text-gray-500">
          <p>
            {" "}
            Copyright © 2024 | Prithviraj Kalaiselvan | All Rights Reserved
          </p>
          <p> Developed by me with a lot of '❤️'.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
