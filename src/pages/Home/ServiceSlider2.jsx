import AddButton from "../../components/UI/AddButton";

const ServiceSlider2 = (props) => {
  return (
    <div className="bg-white p-[14px] rounded-md accordian-shadow">
      {/* <img src="" alt="" /> */}
      <div className="w-full h-[188px] rounded-md bg-[#EFEFEF]"></div>
      <p className="text-sm font-bold mt-2 text-center 2xl:text-left">{props.data.type}</p>
      <div className="flex flex-col gap-2 my-3 text-sm items-center 2xl:flex-row">
        <div className="flex gap-2">
          <span className="font-bold">₹1,500</span>
          <span className="text-gray-600">
            <strike>₹3,500</strike>
          </span>
          <span className="flex gap-1 font-bold text-green-600">
            <span>Save</span>
            <span>₹2000</span>
          </span>
        </div>
        <AddButton className={"text-center"}>Add To Cart</AddButton>
      </div>
    </div>
  );
};

export default ServiceSlider2;
