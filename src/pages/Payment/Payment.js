import PaymentMethod from "./PaymentMethod";
import PaymentSummary from "./PaymentSummery";
import AddButton from "../../components/UI/AddButton";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center w-[95%] rounded-full sm:w-4/5 md:w-2/3 lg:w-1/2 m-auto">
        <PaymentSummary />
        <PaymentMethod />

        <Link to="/booking" className="my-8">
          <AddButton className="!flex !w-full justify-center font-bold text-base lg:text-lg py-2 lg:py-3 !px-14 sm:!px-24 md:!px-32 !rounded-full">
            PROCEED TO PAYMENT
          </AddButton>
        </Link>
      </div>
    </div>
  );
};
export default Payment;
