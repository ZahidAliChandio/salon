import { Fragment } from "react";
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
import MiniNavbar from "../../components/Navbar/MiniNavbar";
import { Pagination, Navigation } from "swiper";

const Home = () => {
  let miniNavArr = [
    { id: 0, img: null, details: "Salon at home" },
    { id: 1, img: null, details: "Hair Styling" },
    { id: 2, img: null, details: "Super Sale" },
    { id: 3, img: null, details: "Super Sale" },
  ];
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
  const itemArray = [
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
    {
      id: 5,
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
      id: 6,
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

  return (
    <Fragment>
      <div className="flex flex-wrap bg-white drop-shadow-sm shadow-[#0000001F] justify-center gap-10 pb-[34px] pt-[24px] border shadow-2xl">
        {miniNavArr.map((n) => {
          return <MiniNavbar key={n.id} data={n} />;
        })}
      </div>
      <div className="lg:px-[80px] md:px-[50px] px-[16px] pb-[40px] pt-[40px] bg-[#0064001A]">
        <Swiper
          className="mySwiper"
          breakpoints={{
            1536: { slidesPerView: 4, spaceBetween: 50 },
            1280: { slidesPerView: 3, spaceBetween: 60 },
            1024: { slidesPerView: 2, spaceBetween: 70 },
            768: { slidesPerView: 2, spaceBetween: 80 },
            640: { slidesPerView: 1, spaceBetween: 10 },
            320: { slidesPerView: 1, spaceBetween: 10 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {miniSliderpromo.map((s) => {
            return (
              <SwiperSlide
                className="text-left bg-[#0064001A] rounded-lg mb-[50px] flex justify-center px-0"
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
            className="mySwiper !px-12 !md:px-8 !text-center !py-8 "
            breakpoints={{
              1536: {
                slidesPerView: diffMakeups.length > 5 ? 5 : diffMakeups.length,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: diffMakeups.length >= 4 ? 4 : diffMakeups.length,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: diffMakeups.length >= 3 ? 3 : diffMakeups.length,
                spaceBetween: 70,
              },
              768: {
                slidesPerView: diffMakeups.length >= 2 ? 2 : diffMakeups.length,
                spaceBetween: 80,
              },
              640: { slidesPerView: 1, spaceBetween: 90 },
              320: { slidesPerView: 1, spaceBetween: 120 },
            }}
          >
            {itemArray.map((d) => {
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
          className="mySwiper !py-4 !px-12 !md:px-8  !bg-none translate-y-24"
          breakpoints={{
            1536: {
              slidesPerView: diffMakeups.length > 5 ? 5 : diffMakeups.length,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: diffMakeups.length >= 4 ? 4 : diffMakeups.length,
              spaceBetween: 60,
            },
            1024: {
              slidesPerView: diffMakeups.length >= 3 ? 3 : diffMakeups.length,
              spaceBetween: 70,
            },
            768: {
              slidesPerView: diffMakeups.length >= 2 ? 2 : diffMakeups.length,
              spaceBetween: 80,
            },
            640: { slidesPerView: 1, spaceBetween: 90 },
            320: { slidesPerView: 1, spaceBetween: 120 },
          }}
        >
          {itemArray.map((d) => {
            return (
              <SwiperSlide className="text-left rounded-xl" key={d.id}>
                <ServiceSlider data={d} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex flex-wrap items-center pt-32 px-2 sm:px-8 md:px-16 xl:px-20 md:justify-between justify-start">
        <div className="flex w-full justify-between px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
            Different types of facials
          </h2>
          <button className="text-[#006400] font-bold text-sm sm:text-lg">View All</button>
        </div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper !py-4 !px-12 !md:px-8 !bg-none"
          breakpoints={{
            1536: {
              slidesPerView: diffMakeups.length > 5 ? 5 : diffMakeups.length,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: diffMakeups.length >= 4 ? 4 : diffMakeups.length,
              spaceBetween: 60,
            },
            1024: {
              slidesPerView: diffMakeups.length >= 3 ? 3 : diffMakeups.length,
              spaceBetween: 70,
            },
            768: {
              slidesPerView: diffMakeups.length >= 2 ? 2 : diffMakeups.length,
              spaceBetween: 80,
            },
            640: { slidesPerView: 1, spaceBetween: 90 },
            320: { slidesPerView: 1, spaceBetween: 120 },
          }}
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
