import sliderImg from "../../assets/images/parlorImg.jpg";

const SliderPromo = (props) => {
  return (
    <div className="w-[552px] h-[318px] rounded-xl">
      <img
        className="w-[552px] h-[318px] absolute -z-10 rounded-xl object-cover aspect-vedio"
        src={sliderImg}
        alt=""
      />
      <div className="text-white pt-[30px] pl-[24px] font-montserrat">
        <p className="text-[14px]">Lorem, ipsum.</p>
        <p className="text-[22px] font-medium">
          Lorem ipsum dolor sit <br /> amet.
        </p>
        <button className="bg-white text-black w-[158px] h-[48px] font-bold rounded-lg translate-y-32">
          CTA Button
        </button>
      </div>
    </div>
  );
};

export default SliderPromo;
