import { React } from "react";
import { useSwiper } from "swiper/react";

const NextBtn = () => {
  const swiper = useSwiper();

  return (
    <button
      className="absolute float-left left-0 z-20"
      onClick={() => swiper.slidePrev()}
    >
      <i className="fa fa-arrow-left fa-2xl" aria-hidden="true"></i>
    </button>
  );
};

export default NextBtn;
