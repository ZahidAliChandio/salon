import { React } from "react";
import { useSwiper } from "swiper/react";

const NextBtn = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className={`${props.className} m-0 md:-ml-10 z-20`}
      onClick={() => swiper.slidePrev()}
    >
      <i className="fa fa-arrow-left fa-2xl" aria-hidden="true"></i>
    </button>
  );
};

export default NextBtn;
