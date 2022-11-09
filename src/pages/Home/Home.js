import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex gap-2 sm:gap-4 md:gap-8 mt-8 ml-12 justify-center text-lg">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/about">About</Link>
      <Link to="/faqs">FAQs</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};
export default Home;
