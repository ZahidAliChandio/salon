import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import MiniNav from "../../components/Navbar/Mininav";
import SliderPromo from "./SliderPromo";
import Checkout from "./Checkout";
import ServiceSlider from "./ServiceSlider";
import ServiceSlider2 from "./ServiceSlider2";
import Whyus from "./Whyus";
import Getapp from "./Getapp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Home = () => {
  const [slidesPerView, setslidesPerView] = useState(3);

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
  const checkoutData = [
    {
      id: 0,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      amount: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
    },
    {
      id: 1,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      amount: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
    },
    {
      id: 2,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      amount: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
    },
    {
      id: 3,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      amount: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
    },
    {
      id: 4,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      amount: "₹1, 500",
      oldAmount: "₹3,500",
      save: "₹2,000",
    },
  ];
  const diffMakeups = [
    { id: 0, type: "Fruit Facial" },
    { id: 1, type: "O3+ Facial" },
    { id: 2, type: "Sara gold Facial" },
    { id: 3, type: "New Facial" },
  ];
  const faqItems = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet luctus sapien, ac scelerisque nibh. Pellentesque hendrerit mauris et laoreet laoreet. Proin ornare sollicitudin metus, vitae sagittis augue dapibus facilisis. In non massa quis arcu pulvinar tempor. Sed lacinia justo in ligula ultrices, ut consequat augue molestie.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet luctus sapien, ac scelerisque nibh. Pellentesque hendrerit mauris et laoreet laoreet. Proin ornare sollicitudin metus, vitae sagittis augue dapibus facilisis. In non massa quis arcu pulvinar tempor. Sed lacinia justo in ligula ultrices, ut consequat augue molestie.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet luctus sapien, ac scelerisque nibh. Pellentesque hendrerit mauris et laoreet laoreet. Proin ornare sollicitudin metus, vitae sagittis augue dapibus facilisis. In non massa quis arcu pulvinar tempor. Sed lacinia justo in ligula ultrices, ut consequat augue molestie.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet luctus sapien, ac scelerisque nibh. Pellentesque hendrerit mauris et laoreet laoreet. Proin ornare sollicitudin metus, vitae sagittis augue dapibus facilisis. In non massa quis arcu pulvinar tempor. Sed lacinia justo in ligula ultrices, ut consequat augue molestie.",
    },
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
    <>
      {/* <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-8 mt-8 ml-12 justify-center text-lg">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/about">About</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/profile">Profile</Link>
      </div> */}
      <div className="sticky w-full z-30">
        <Navbar />
        <div className="flex flex-wrap bg-white drop-shadow-sm shadow-[#0000001F] justify-center gap-10 pb-[34px] pt-[24px] border shadow-2xl">
          {miniNavArr.map((n) => {
            return <MiniNav key={n.id} data={n} />;
          })}
        </div>
      </div>
      <div className="lg:pl-[140px] md:pl-[50px] pl-[16px] pb-[40px] pt-[40px] bg-[#0064001A]">
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
      <div className="lg:py-2 lg:px-[40px] p-0 bg-[#F4F4F4] mb-12">
        <h2 className="text-[28px] font-semibold text-center py-[40px]">
          Quick Checkout
        </h2>
        <div className="sm:px-[16px] md:px-[30px]  bg-[#F4F4F4] z-index-10 py-4">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper !px-6 !overflow-visible"
            slidesPerView={slidesPerView}
            spaceBetween={20}
          >
            {checkoutData.map((d) => {
              return (
                <SwiperSlide className="text-left rounded-xl" key={d.id}>
                  <Checkout key={d.id} data={d} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="bg-[#006400]">
        <h1 className="text-[28px] pt-[40px] text-white text-center">
          Services @ 404
        </h1>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper !p-4 !w-[80%] !bg-none translate-y-24"
          slidesPerView={slidesPerView}
          spaceBetween={20}
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
      <div className="flex flex-wrap md:mx-[164px] mx-8 items-center pt-32 md:justify-between justify-start">
        <h2 className="text-[28px] font-semibold">Diffrent types of facials</h2>
        <button className="text-[#006400] font-bold">View All</button>
      </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper !p-4 !w-[80%] !bg-none"
        slidesPerView={slidesPerView}
        spaceBetween={20}
      >
        {diffMakeups.map((d) => {
          return (
            <SwiperSlide className="text-left rounded-xl" key={d.id}>
              <ServiceSlider2 data={d} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Whyus />
      <Getapp />
    </>
  );
};
export default Home;
