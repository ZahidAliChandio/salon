import { useState } from "react";
import Login from "./pages/Login/Login";
import VerifyMobile from "./pages/Login/VerifyMobile";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import FAQs from "./pages/FAQs/FAQs";
import Appointments from "./pages/Appointments/Appointments";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Address from "./pages/Address/Address";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [otpStatus, setOtpStatus] = useState(false);
  const loginHandler = () => {
    setIsLogin(true);
  };
  const logoutHandler = () => {
    setIsLogin(false);
  };
  const sendOtpHandler = () => {
    setOtpStatus(true);
  };
  const otpSentHandler = () => {
    setOtpStatus(false);
  };
  return (
    <div className="App">
      {isLogin && <Login onClose={logoutHandler} sendOtp={sendOtpHandler} />}
      {otpStatus && (
        <VerifyMobile onSent={otpSentHandler} />
      )}
      <Navigation />
      <Navbar onLogin={loginHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/address" element={<Address />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
