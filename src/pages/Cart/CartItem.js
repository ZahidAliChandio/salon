const CartItem = (items) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between items-center py-5 px-5 sm:p-4 md:p-6 lg:p-8 rounded-full bg-white accordian-shadow w-full">
        <div className="flex flex-col gap-2 font-bold text-sm sm:text-base md:text-lg">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            <span>OXY-Radiant Young Skin-Gold facial</span>
            <span className="flex items-center justify-center h-[17px] w-4 p-[3px] rounded-full border-[3px] border-[#FFB600] text-[#FFB600] text-[13px]">
              i
            </span>
          </div>
          <span>₹616</span>
        </div>
        <div className="flex items-center">
          <button className="p-1">
            <i className="fas fa-minus text-sm md:text-base"></i>
          </button>
          <span className="font-extrabold text-lg rotate-90">
            <hr className="w-4 md:w-6 bg-black h-[3px]" />
          </span>
          <button className="p-1">
            <i className="fas fa-plus text-sm md:text-base"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
