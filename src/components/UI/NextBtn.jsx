import { React } from "react";
import { useSwiper } from "swiper/react";

const NextBtn = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className={`${props.className} m-0 md:-mr-10 z-20`}
      onClick={() => swiper.slideNext()}
    >
      <i className={`fa fa-arrow-right fa-2xl ${props.white?'text-white':""}`} aria-hidden="true"></i>
    </button>
  );
};

export default NextBtn;
