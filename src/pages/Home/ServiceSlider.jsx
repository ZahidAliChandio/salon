import AddButton from "../../components/UI/AddButton";

const ServiceSlider = (props) => {
  return (
    <div className="bg-white w-[344px] p-[14px] rounded-md">
      {/* <img src="" alt="" /> */}
      <p className="w-[316px] h-[188px] rounded-md bg-[#EFEFEF]"></p>
      <p>Full arms & Underarms</p>
      <div className="flex justify-between">
        <p className="font-bold">₹255</p>
        <AddButton className={"text-center"}>Add to Cart</AddButton>
      </div>
    </div>
  );
};

export default ServiceSlider;
