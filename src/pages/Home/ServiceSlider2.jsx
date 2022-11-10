import AddButton from "../../components/UI/AddButton";

const ServiceSlider2 = (props) => {
  console.log(props);
  return (
    <div className="bg-white w-[344px] p-[14px] rounded-md">
      {/* <img src="" alt="" /> */}
      <p className="w-[316px] h-[188px] rounded-md bg-[#EFEFEF]"></p>
      <p>{props.data.type}</p>
      <div className="flex gap-2 my-3 text-sm items-center">
        <span className="font-bold">₹1,500</span>
        <span className="text-gray-600">
          <strike>₹3,500</strike>
        </span>
        <span className="flex gap-1 font-bold text-green-600">
          <span>Save</span>
          <span>₹2000</span>
        </span>
        <AddButton className={"text-center"}>Add To Cart</AddButton>
      </div>
    </div>
  );
};

export default ServiceSlider2;
