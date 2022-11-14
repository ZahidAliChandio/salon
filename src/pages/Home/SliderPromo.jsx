import sliderImg from "../../assets/images/parlorImg.jpg";

const SliderPromo = (props) => {
  return (
    <div className="relative aspect-vedio w-full">
      <img
        className="-z-10"
        src={sliderImg}
        alt="makeup"
      />
      <div className="flex flex-col justify-between items-between h-full absolute top-0 left-0 py-8 md:py-6 h-inherit text-white pl-[24px] font-montserrat w-full">
        <div>
          <p className="text-[14px]">Lorem, ipsum.</p>
          <p className="text-[22px] font-medium">
            Lorem ipsum dolor sit <br /> amet.
          </p>
        </div>
        <button className="px-6 md:px-10 py-3 text-sm md:text-base font-bold rounded-lg w-fit bg-white text-black  ">
          CTA Button
        </button>
      </div>
    </div>
  );
};

export default SliderPromo;
