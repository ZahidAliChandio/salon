import { React } from "react";
import { useSwiper } from "swiper/react";

const PrevBtn = () => {
  const swiper = useSwiper();

  return (
    <button
      className="m-0 md:-mr-10 z-20"
      onClick={() => swiper.slideNext()}
    >
      <i className="fa fa-arrow-right fa-2xl" aria-hidden="true"></i>
    </button>
  );
};

export default PrevBtn;
