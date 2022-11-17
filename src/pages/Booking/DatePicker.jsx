// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const DatePicker = () => {
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
  const daysWords = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const date = new Date();
  const dateNum = getDaysInMonth(date.getMonth(), date.getFullYear());
  return (
    <div className="w-full text-center">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        initialSlide={date.getMonth()}
        onSlideChange={() => console.log(Swiper)}
      >
        <SwiperSlide>January</SwiperSlide>
        <SwiperSlide>Febuary</SwiperSlide>
        <SwiperSlide>March</SwiperSlide>
        <SwiperSlide>April</SwiperSlide>
        <SwiperSlide>May</SwiperSlide>
        <SwiperSlide>June</SwiperSlide>
        <SwiperSlide>July</SwiperSlide>
        <SwiperSlide>August</SwiperSlide>
        <SwiperSlide>September</SwiperSlide>
        <SwiperSlide>October</SwiperSlide>
        <SwiperSlide>November</SwiperSlide>
        <SwiperSlide>December</SwiperSlide>
      </Swiper>
      <>
        <Swiper
          className="mySwiper"
          slidesPerView={7}
          initialSlide={date.getDate() - 1}
        >
          {dateNum.map((day) => {
            return (
              <SwiperSlide className="flex flex-col text-center">
                <span>{daysWords[day.getDay()]}</span>
                <span>{day.getDate()}</span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default DatePicker;
