// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useState } from "react";

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
  const [dateNum, setDateNum] = useState(
    getDaysInMonth(date.getMonth(), date.getFullYear())
  );
  return (
    <div className="w-full text-center bg-[#006400] text-white">
      <div className="px-10 sm:px-20 md:px-24 lg:px-28 pt-10 text-sm sm:text-lg md:text-xl text-center items-center">
        <Swiper
          style={{
            "--swiper-navigation-size": "30px",
            "@media (max-width:300px)": { "--swiper-navigation-size": "100px" },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          initialSlide={date.getMonth()}
          onSlideChange={(swiper) =>
            setDateNum(getDaysInMonth(swiper.activeIndex, date.getFullYear()))
          }
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
      </div>
      <div className="py-6">
        <Swiper
          className="mySwiper"
          initialSlide={date.getDate() - 1}
          breakpoints={{
            1024: {
              slidesPerView: 14,
            },
            250: { slidesPerView: 7 },
          }}
        >
          {dateNum.map((day) => {
            return (
              <SwiperSlide className="flex flex-col justify-center items-center text-center">
                <div className="flex flex-col gap-2">
                  <span>{daysWords[day.getDay()]}</span>
                  <span className="flex items-center justify-center rounded-full w-7 h-7 hover:cursor-pointer hover:bg-white hover:text-black">
                    {day.getDate()}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DatePicker;
