import Card from "../../components/UI/Card";
const AddressCard = () => {
  return (
    <Card className="!p-0 !m-0 !w-full">
      <div className="flex justify-between gap-4 p-3 border-2 border-transparent hover:border-[#006400] rounded-xl w-full">
        <div className="font-montserrat text-sm md:text-base lg:text-lg">
          <h1 className="font-semibold font-gillsans mb-2">Home</h1>
          <p className="text-sm">A2 block, himgiri enclave, Mukherjee nagar</p>
          <p className="text-sm">A2 block, himgiri enclave, Mukherjee nagar</p>
          <p className="mt-3 text-sm">
            <span>Mobile: </span>
            <span>+91565668</span>
          </p>
        </div>
        <div>
          <button className="flex gap-2 items-center text-[14px] font-semibold text-[#006400] mb-2">
            <i className="text-[#006400] bg-[#D9EDD9] p-2 rounded-full fa-solid fa-pen"></i>
            <span className="text-sm lg:text-base"> Edit</span>
          </button>
          <button className="flex gap-2 items-center text-[14px] font-semibold text-[#C7C7C7]">
            <i className="text-white bg-[#C7C7C7] p-2 rounded-full fa-solid fa-trash"></i>
            <span className="text-sm lg:text-base">  Delete</span>
          </button>

        </div>
      </div>
    </Card>
  );
};

export default AddressCard;
