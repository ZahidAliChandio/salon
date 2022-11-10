import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import FAQs from "./pages/FAQs/FAQs";
import Appointments from "./pages/Appointments/Appointments";
import Profile from "./pages/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <div className="App">
      <Home/>
      {/* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}
      <Footer />
    </div>
  );
};

export default App;
