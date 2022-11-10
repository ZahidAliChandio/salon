import Card from "../../components/UI/Card";
const AddressCard = () => {
  return (
    <Card className="!p-0 !m-0 !w-full">
      <div className="flex items-center justify-between gap-4 p-3 hover:border-2 hover:border-[#006400] rounded-xl w-full">
        <div>
          <h1 className="font-semibold text-lg">Home</h1>
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
            <span> Edit</span>
          </button>
          <button className="flex gap-2 items-center text-[14px] font-semibold text-[#C7C7C7]">
            <i className="text-white bg-[#C7C7C7] p-2 rounded-full fa-solid fa-trash"></i>
            <span>  Delete</span>
          </button>

        </div>
      </div>
    </Card>
  );
};

export default AddressCard;
