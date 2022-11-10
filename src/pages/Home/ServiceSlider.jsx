import AddButton from "../../components/UI/AddButton";

const ServiceSlider = (props) => {
  return (
    <div className="bg-white p-[14px] rounded-md accordian-shadow">
      {/* <img src="" alt="" /> */}
      <div className="w-full h-[188px] rounded-md bg-[#EFEFEF]"></div>
      <p className="text-sm font-bold mt-2">Full arms & Underarms</p>
      <div className="flex justify-between mt-1">
        <p className="font-bold">₹255</p>
        <AddButton className={"text-center"}>Add to Cart</AddButton>
      </div>
    </div>
  );
};

export default ServiceSlider;
