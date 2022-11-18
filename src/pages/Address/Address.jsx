import AddressCard from "./AddressCard";

const Address = () => {
  return (
    <div className="px-20 py-12">
      <h1 className="text-[28px] font-semibold font-gillsans">Address</h1>
      <div className="flex gap-2 items-center my-6">
        <i className="fa-solid fa-plus text-white bg-[#006400] p-1 rounded-full"></i>
        <p className="text-[#006400] text-[16px] font-semibold font-gillsans">
          Add new address
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center gap-4 ">
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </div>
    </div>
  );
};

export default Address;
