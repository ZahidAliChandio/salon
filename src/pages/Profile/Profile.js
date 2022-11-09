import ButtonProfile from "../../components/UI/ButtonProfile";
import UserDetails from "./UserDetails";
import UserProfile from "./UserProfile";

const Profile = () => {
  return (
    <div className="text-center lg:text-left px-6 md:px-10 lg:px-20 py-4">
      <h2 className="my-8 text-2xl font-bold">My Profile</h2>
      <div className="flex justify-between flex-col-reverse md:flex-row gap-8">
        <div className="w-full">
          <UserDetails title="Full Name" value="Kajal Sharma" edit={true} />
          <UserDetails
            title="Mobile Number"
            value="+92 | 000009999"
            edit={true}
          />
          <UserDetails title="Email" value="kajavats96@gmail.com" edit={true} />
          <UserDetails title="Date of birth" value="24-06-1996" edit={false} />
          <UserDetails title="Gender" value="Male Female" edit={false} />
        </div>
        <UserProfile />
      </div>
      <div className="flex gap-4 mt-8 justify-center md:justify-start">
        <ButtonProfile className="bg-green-700 text-white">SAVE</ButtonProfile>
        <ButtonProfile className="bg-zinc-200 text-black">CANCEL</ButtonProfile>
      </div>
    </div>
  );
};

export default Profile;
