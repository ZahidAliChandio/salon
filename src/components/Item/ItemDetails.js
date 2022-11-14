import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Close from "../../assets/images/close.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ItemDetails = ({ images, itemDetails, setShowDetailId }) => {
  const onClickHandler = () => {
    setShowDetailId(null);
  };
  return (
    <div className="absolute -top-8 -right-2 md:-right-6 lg:-right-8 w-full bg-white item-detail px-4 py-10 rounded-lg overflow-hidden detail-shadow z-20 font-gillsans">
      <button
        className="absolute top-2 right-2 w-6"
        onClick={() => onClickHandler()}
      >
        <img src={Close} alt="close" />
      </button>
      <div className="flex items-center justify-center w-full h-1/2 overflow-hidden">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={image} alt="Detailed" className="rounded" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <h4 className="text-sm font-medium mt-4 mb-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h4>
      <div className="flex gap-2 my-3 text-sm">
        <span className="font-bold">₹{itemDetails.currentPrice}</span>
        <span className="text-gray-600">
          <strike>₹{itemDetails.previousPrice}</strike>
        </span>
        <span className="flex gap-1 font-bold text-[#006400]">
          <span>Save</span>
          <span>₹{itemDetails.save}</span>
        </span>
        <span className="flex gap-1 items-center font-bold text-yellow-400">
          <i className="fas fa-clock"></i>
          <span>{itemDetails.time}</span>
        </span>
      </div>
      <hr className="my-6" />
      <ul>
        {itemDetails.detailBullets.map((point, index) => {
          return (
            <li className="flex items-center pl-1" key={index}>
              <span className="-left-2 relative inline-block bg-black rounded-full border w-2 h-2"></span>
              <span className=" text-[11px sm:text-sm font-montserrat">{point}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ItemDetails;
