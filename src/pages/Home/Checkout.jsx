import AddButton from "../../components/UI/AddButton";
import Card from "../../components/UI/Card";

const Checkout = (props) => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center align-top w-full text-left">
          <div className="absolute -top-10 left-1/2 w-[70px] h-[70px] rounded-full bg-[#D1D1D1] -translate-x-1/2 z-50"></div>
          <div className="flex flex-col items-center mt-6 py-2">
            <h4 className= "text-sm text-[13px] font-semibold w-full text-left font-gillsans">
              {props.data.heading}
            </h4>
            <ul className="text-[11px] my-2">
              <li>
                <span className="-left-1 relative inline-block bg-black rounded-full border w-2 h-2"></span>
                <span>{props.data.li1}</span>
              </li>
              <li>
                <span className="-left-1 relative inline-block bg-black rounded-full border w-2 h-2 mt-2"></span>
                <span>{props.data.li2}</span>
                <span className="float-right">
                  <i className="fas fa-info-circle text-[#FFB600]"></i>
                </span>
              </li>
            </ul>
            <div className="flex gap-2 my-3 text-sm">
              <span className="font-bold">{props.data.currentPrice}</span>
              <span className="text-gray-600">
                <strike>{props.data.oldAmount}</strike>
              </span>
              <span className="flex gap-1 font-bold text-[#006400] font-gillsans">
                <span>Save</span>
                <span>{props.data.save}</span>
              </span>
            </div>
            <AddButton className={"ml-4 text-center"}>CHECKOUT</AddButton>
          </div>
        </div>
    </Card>
  );
};

export default Checkout;
