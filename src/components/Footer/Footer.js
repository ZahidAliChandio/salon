const Footer = () => {
  return (
    <div className="flex items-center justify-center h-[517px] border text-white bg-green-700 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 md:gap:24 lg:gap-32 xl:gap-40">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Cities availabe In</h3>
          <span className=" text-sm">Delhi</span>
          <span className=" text-sm">Noida</span>
          <span className=" text-sm">Greater Noida</span>
          <span className=" text-sm">Ghaziabad</span>
        </div>
        <div className="flex flex-col gap-2 text-sm w-fit">
          <span><a href="/" className="relative cursor-pointer after:content('a') after:absolute after:left-0 after:bottom-0 after:border-b-2 after:border-zinc-300 after:w-0 after:transition-all after:duration-500 after:hover:w-full">About</a></span>
          <span><a href="/" className="relative cursor-pointer after:content('a') after:absolute after:left-0 after:bottom-0 after:border-b-2 after:border-zinc-300 after:w-0 after:transition-all after:duration-500 after:hover:w-full">Blog</a></span>
          <span><a href="/" className="relative cursor-pointer after:content('a') after:absolute after:left-0 after:bottom-0 after:border-b-2 after:border-zinc-300 after:w-0 after:transition-all after:duration-500 after:hover:w-full">Privacy Policy</a></span>
          <span><a href="/" className="relative cursor-pointer after:content('a') after:absolute after:left-0 after:bottom-0 after:border-b-2 after:border-zinc-300 after:w-0 after:transition-all after:duration-500 after:hover:w-full">FAQ</a></span>
          <span><a href="/" className="relative cursor-pointer after:content('a') after:absolute after:left-0 after:bottom-0 after:border-b-2 after:border-zinc-300 after:w-0 after:transition-all after:duration-500 after:hover:w-full">Terms and Conditions</a></span>
        </div>
        <div className="flex items-top flex-col gap-2 text-sm">
          <h3>info@salontym.com</h3>
          <span>+91 000 000 0000</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2  text-sm">
            <span className="flex items-center justify-center overflow-hidden w-[28px] h-[28px] bg-white rounded-full">
              <i className="fa-brands fa-instagram text-lg text-green-700 font-bold"></i>
            </span>
            <span>@salon_tym</span>
          </span>
          <span className="flex items-center gap-2  text-sm">
            <span className="flex items-center justify-center overflow-hidden w-[28px] h-[28px] bg-white rounded-full">
              <i className="fa-brands fa-facebook-f text-lg text-green-700"></i>
            </span>
            <span>@salon_tym</span>
          </span>
          <span className="flex items-center gap-2  text-sm">
            <span className="flex items-center justify-center overflow-hidden w-[28px] h-[28px] bg-white rounded-full">
              <i className="fa-brands fa-linkedin-in text-md text-green-700"></i>
            </span>
            <span>@salon_tym</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
