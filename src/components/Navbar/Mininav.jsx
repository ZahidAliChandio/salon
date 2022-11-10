const Mininav = (props) => {
  return (
    <div className="flex flex-wrap flex-col text-center items-center z-30">
      <p className="bg-[#EDEDED] w-[80px] h-[80px] rounded-full mb-2"></p>
      <p className="font-bold">{props.data.details}</p>
    </div>
  );
};

export default Mininav;
