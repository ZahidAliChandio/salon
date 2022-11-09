import UserDetails from "./UserDetails";
import UserProfile from "./UserProfile";

const Profile = () => {
  return (
    <div className="text-center lg:text-left px-10 lg:px-20 py-4">
      <h2 className="my-8 text-2xl font-bold">My Profile</h2>
      <div className="flex justify-between">
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
    </div>
  );
};

export default Profile;
