import ProfileBg from "../../assets/images/profile-bg.svg";
import Profile from "../../assets/images/profile.svg";

const UserProfile = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <span className="relative">
        <img src={ProfileBg} alt="Background" />
        <span className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[129px] h-[139px]">
          <img src={Profile} alt="Profile" className="w-[129px] h-[139px]" />
        </span>
        <span className="w-[69px] h-[69px]">
          <i className="fa-solid fa-user absolute top-1/2 left-1/2 text-[69px] text-white -translate-x-1/2 -translate-y-1/2"></i>
        </span>
      </span>
      <div className="flex gap-4">
        <button className="font-bold text-green-700 underline">Update</button>
        <button className="font-bold text-gray-400 underline">Remove</button>
      </div>
    </div>
  );
};

export default UserProfile;
