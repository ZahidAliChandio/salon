import { React } from "react";
import { useSwiper } from "swiper/react";

const PrevBtn = () => {
  const swiper = useSwiper();

  return (
    <button
      className="absolute float-right right-0 z-20"
      onClick={() => swiper.slideNext()}
    >
      <i class="fa fa-arrow-right fa-2xl" aria-hidden="true"></i>
    </button>
  );
};

export default PrevBtn;
