import { React } from "react";
import { useSwiper } from "swiper/react";

const PrevBtn = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className={`${props.className} -mr-1 md:-mr-10 z-20`}
      onClick={() => swiper.slideNext()}
    >
      <i className="fa fa-arrow-right fa-2xl" aria-hidden="true"></i>
    </button>
  );
};

export default PrevBtn;
