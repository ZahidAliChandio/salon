const Footer = () => {
  return (
    <div className="flex items-center justify-center h-[517px] border text-white bg-green-700 mt-20 mb-0">
      <div className="grid grid-cols-4 gap-40">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Cities availabe In</h3>
          <span className=" text-sm">Delhi</span>
          <span className=" text-sm">Noida</span>
          <span className=" text-sm">Greater Noida</span>
          <span className=" text-sm">Ghaziabad</span>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h3>About</h3>
          <a href="/">Blog</a>
          <a href="/">Privacy Policy</a>
          <a href="/">FAQ</a>
          <a href="/">Terms and Conditions</a>
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
