import Card from "../../components/UI/Card";
import AddButton from "../../components/UI/AddButton";
import { Link } from "react-router-dom";
const BookingAddress = () => {
  return (
    <Card>
      <div className="flex flex-col flex-wrap justify-center items-center gap-2">
        <div className="w-full flex justify-between">
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-location-dot"></i>
            <h1 className="font-semibold text-sm">Address</h1>
          </div>
          <button className="flex gap-1 items-center text-[12px] font-semibold text-[#FFB600] mb-2">
            <i className="text-[#FFB600] bg-[#D9EDD9] p-2 rounded-full fa-solid fa-pen"></i>
            <span className="text-sm lg:text-base"> Change</span>
          </button>
        </div>
        <div>
          <p>
            Ajnara Homes Tower-A, AJNARA HOMES, Bhangel, Ghaziabad, Uttar
            Pradesh 201009, India
          </p>          
        </div>
        <Link to="/payment" className="w-11/12 mt-4">
          <AddButton className="p-0 sm:!p-2 !w-full md:w-3/6 font-semibold">
            Proceed To Payment
          </AddButton>
        </Link>
      </div>
    </Card>
  );
};

export default BookingAddress;
