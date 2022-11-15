import ProfileBg from "../../assets/images/profile-bg.svg";
import Profile from "../../assets/images/profile.svg";
import AddButton from "../../components/UI/AddButton";
const Booked = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-20 md:gap-24 align-middle items-center px-6 sm:p-4 py-5">
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
      <div className="flex flex-wrap flex-col justify-center items-center border-2 border-black rounded-2xl text-center lg:text-left p-4 w-full sm:w-11/12 md:w-2/3 lg:w-2/5 gap-8 font-gillsans">
        <div>
          <h1 className="font-bold text-lg">Hey, Elwish</h1>
          <h1 className="font-bold text-lg">Thanks for your booking!</h1>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Booking id - kv38wKbKg</p>
          <p className="text-gray-500 text-sm">
            Service will start on - 11:30 am
          </p>
          <p className="text-gray-500 text-sm">Service will end in - 65 min</p>
        </div>
        <AddButton className="py-3 sm:w-3/6 w-11/12">
          Check Appointment
        </AddButton>
      </div>
      <button className="underline underline-offset-4">
        Back to Home page
      </button>
    </div>
  );
};

export default Booked;
