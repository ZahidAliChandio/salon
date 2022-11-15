import AddButton from "../../components/UI/AddButton";
import CartItem from "./CartItem";
import PaymentSummary from "./PaymentSummary";
const ServiceCart = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[84vh] bg-zinc-100 font-gillsans border">
      <div className="flex flex-col items-center w-[95%] rounded-full sm:w-4/5 md:w-2/3 lg:w-1/2">
        <h2 className="pt-12 pb-16 font-bold text-xl md:text-2xl lg:text-3xl">
          Service cart
        </h2>
        <CartItem />
        <PaymentSummary />
        <div className="absolute bottom-12 flex w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2">
          <AddButton className="!flex !w-full justify-center font-bold text-sm md:text-base lg:text-lg py-2 lg:py-3 !rounded-full">
            PROCEED TO SLOTS
          </AddButton>
        </div>
      </div>
    </div>
  );
};
export default ServiceCart;
