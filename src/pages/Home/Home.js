import { Fragment, useEffect, useState } from "react";
import SliderPromo from "./SliderPromo";
import Checkout from "./Checkout";
import ServiceSlider from "./ServiceSlider";
import ServiceSlider2 from "./ServiceSlider2";
import Whyus from "./Whyus";
import FAQs from "../FAQs/FAQs";
import Getapp from "./Getapp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Home = () => {
  const [slidesPerView, setslidesPerView] = useState(3);
  let miniSliderpromo = [
    {
      id: 0,
      img: {},
      text1: "Lorem, ipsum",
      text2: "Lorem, ipsum dolor sit",
      text2Cont: "amet.",
    },
    {
      id: 1,
      img: {},
      text1: "Lorem, ipsum",
      text2: "Lorem, ipsum dolor sit",
      text2Cont: "amet.",
    },
    {
      id: 2,
      img: {},
      text1: "Lorem, ipsum",
      text2: "Lorem, ipsum dolor sit",
      text2Cont: "amet.",
    },
    {
      id: 3,
      img: {},
      text1: "Lorem, ipsum",
      text2: "Lorem, ipsum dolor sit",
      text2Cont: "amet.",
    },
  ];
  const checkoutData = [
    {
      id: 0,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      currentPrice: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
      amount: 1,
    },
    {
      id: 1,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      currentPrice: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
      amount: 1,
    },
    {
      id: 2,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      currentPrice: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
      amount: 1,
    },
    {
      id: 3,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      currentPrice: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
      amount: 1,
    },
    {
      id: 4,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      currentPrice: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
      amount: 1,
    },
  ];
  const diffMakeups = [
    { id: 1, type: "Fruit Facial", amount: 1 },
    { id: 2, type: "O3+ Facial", amount: 1 },
    { id: 3, type: "Sara gold Facial", amount: 1 },
    { id: 4, type: "New Facial", amount: 1 },
  ];

  useEffect(() => {
    function slides() {
      if (window.screen.width >= 1300) {
        setslidesPerView(4);
      } else if (window.screen.width >= 900) {
        setslidesPerView(3);
      } else if (window.screen.width >= 600) {
        setslidesPerView(2);
      } else {
        setslidesPerView(1);
      }
    }

    window.addEventListener("resize", slides);
  }, []);

  return (
    <Fragment>
      <div className="lg:px-[80px] md:px-[50px] px-[16px] pb-[40px] pt-[40px] bg-[#0064001A] border-2 border-red-500">
        <Swiper
          className="mySwiper"
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {miniSliderpromo.map((s) => {
            return (
              <SwiperSlide
                className="text-left bg-[#0064001A] rounded-lg mb-[50px]"
                key={s.id}
              >
                <SliderPromo data={s} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="lg:py-2 p-0 bg-[#F4F4F4] mb-12">
        <h2 className="text-[28px] font-semibold text-center py-[40px]">
          Quick Checkout
        </h2>
        <div className=" bg-[#F4F4F4] z-index-10 py-4">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper !px-10 !text-center !py-8"
            slidesPerView={slidesPerView}
            spaceBetween={40}
          >
            {checkoutData.map((d) => {
              return (
                <SwiperSlide className="rounded-xl" key={d.id}>
                  <Checkout data={d} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="bg-[#006400] px-2 sm:px-8 md:px-16 xl:px-20">
        <h1 className="text-[28px] pt-[40px] text-white text-center">
          Services @ 404
        </h1>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper !py-4 !px-8 !sm:px-12 !bg-none translate-y-24"
          slidesPerView={slidesPerView}
          spaceBetween={55}
        >
          {checkoutData.map((d) => {
            return (
              <SwiperSlide className="text-left rounded-xl" key={d.id}>
                <ServiceSlider data={d} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex flex-wrap items-center pt-32 px-2 sm:px-8 md:px-16 xl:px-20 md:justify-between justify-start">
        <div className="flex w-full justify-between px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold ">
            Different types of facials
          </h2>
          <button className="text-[#006400] font-bold">View All</button>
        </div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper !py-4 !px-8 !sm:px-12 !bg-none"
          slidesPerView={slidesPerView}
          spaceBetween={55}
        >
          {diffMakeups.map((d) => {
            return (
              <SwiperSlide className="text-left rounded-xl" key={d.id}>
                <ServiceSlider2 data={d} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Whyus />
      <FAQs />
      <Getapp />
    </Fragment>
  );
};
export default Home;
