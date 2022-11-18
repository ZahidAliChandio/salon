import ProfileBg from "../../assets/images/profile-bg.svg";
import Profile from "../../assets/images/profile.svg";
import AddButton from "../../components/UI/AddButton";
import { Link } from "react-router-dom";

const Booked = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-12 md:gap-16 align-middle items-center px-6 sm:p-4 py-5">
      <div className="flex flex-col items-center justify-center">
        <span className="relative">
          <img src={ProfileBg} alt="Background" />
          <span className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[129px] h-[139px]">
            <img src={Profile} alt="Profile" className="w-[129px] h-[139px]" />
          </span>
          <span className="w-[69px] h-[69px]">
            <i
              className="fa fa-check absolute top-1/2 left-1/2 text-[69px] text-white -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            ></i>
          </span>
        </span>
      </div>
      <div className="flex flex-wrap flex-col justify-center items-center border-2 border-black rounded-2xl text-center lg:text-left py-8 px-4 w-full sm:w-11/12 md:w-2/3 lg:w-2/5 space-y-8 font-gillsans">
        <div className="font-bold">
          <h1 className="text-base md:text-lg lg:text-xl">Hey, Elwish</h1>
          <h1 className="text-sm md:text-lg mt-2">Thanks for your booking!</h1>
        </div>
        <div className="flex flex-col gap-2 text-gray-500 md:text-lg">
          <p className="">Booking id - kv38wKbKg</p>
          <p className="">
            Service will start on - 11:30 am
          </p>
          <p className="">Service will end in - 65 min</p>
        </div>
        <AddButton className="py-3 md:!text-lg font-semibold px-7 md:px-9 lg:px-16 !w-fit">
          Check Appointment
        </AddButton>
      </div>
      <Link to="/" className="text-gray-500 font-gillsans font-bold">Back to Home page</Link>
    </div>
  );
};

export default Booked;
