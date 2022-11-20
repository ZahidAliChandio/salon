import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const nodeRef = useRef(null);

  const onClickHandler = () => {
    setShowNav((prev) => (prev ? false : true));
  };
  useEffect(() => {
    window.innerWidth > 768 ? setShowNav(true) : setShowNav(false);
  }, []);
  return (
    <Fragment>
      <div className="absolute top-4 left-4">
        <i
          className="fas fa-bars  text-black text-lg md:text-xl lg:text-2xl block md:hidden"
          onClick={() => onClickHandler()}
        ></i>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-8 mt-8 ml-12 justify-center text-lg">        
        <Transition
          in={showNav}
          nodeRef={nodeRef}
          timeout={{ enter: 200, exit: 200 }}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <ul
              className={`${
                state === "entering"
                  ? "enter-animation"
                  : state === "exiting"
                  ? "exit-animation"
                  : null
              } bg-[rgba(0,0,0,0.75)] h-[98vh] text-white md:text-black absolute top-12 left-0 md:h-fit md:static md:bg-transparent items-center gap-4 md:gap-8 text-base  font-semibold flex flex-col md:flex-row py-4 md:p-0 w-full md:w-fit z-30`}
            >
              <li>
                <Link to="/" className="hover:text-[#006400]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#006400]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-[#006400]">
                  Appointments
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-[#006400]">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#006400]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#006400]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/address" className="hover:text-[#006400]">
                  Address
                </Link>
              </li>
            </ul>
          )}
        </Transition>
      </div>      
    </Fragment>
  );
};
export default Navigation;
