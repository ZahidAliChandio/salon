import { ReactComponent as Timer } from "../../assets/images/timer.svg";
import Close from "../../assets/images/close.png";

const ClientDetails = ({ setShowDetail }) => {
  const onClickHandler = () => {
    setShowDetail(false);
  };

  return (
    <div className="absolute -top-8 -right-12 w-11/12 bg-white  px-4 py-10 rounded-lg overflow-hidden detail-shadow z-20 h-fit">
      <button
        className="absolute top-3 lg:top-3 right-3"
        onClick={() => onClickHandler()} 
      >
        <img src={Close} alt="close" />
      </button>
      <h4 className="font-bold">Apointment Details</h4>
      <table className="w-full my-4 border-separate text-left">
        <thead></thead>
        <tbody>
          <tr>
            <th className="text-xs text-gray-400">Booking Id</th>
            <td className="text-xs font-bold">9khbou8970</td>
          </tr>
          <tr>
            <th className="text-xs text-gray-400">Booking date</th>
            <td className="text-xs font-bold">26-09-2022</td>
          </tr>
          <tr>
            <th className="text-xs text-gray-400">Booking slot</th>
            <td className="text-xs font-bold">11:00 am - 11:15 am</td>
          </tr>
          <tr>
            <th className="text-xs text-gray-400">Booking status</th>
            <td className="text-xs font-bold w-1/2">Cancelled by customer</td>
          </tr>
        </tbody>
      </table>
      <hr className="my-4 border-b-1 border-gray-300" />

      <h5 className="text-sm font-medium">Diamond - for brighting you sking</h5>
      <h6 className="text-sm font-medium mb-1">Oxy glow</h6>
      <div className="flex justify-between w-2/3">
        <span className="text-xs font-bold">Service time</span>
        <span className="flex items-center gap-1 text-xs font-bold">
          <Timer />
          65 min
        </span>
      </div>
      <hr className="my-4 border-b-1 border-gray-300" />

      <table className="w-full my-4 text-left border-separate">
        <thead></thead>
        <tbody>
          <tr>
            <th className="text-xs text-gray-400">Total mrp</th>
            <td className="text-xs font-bold">
              <span className="mr-1">₹</span>855
            </td>
          </tr>
          <tr>
            <th className="text-xs text-gray-400">Total discount</th>
            <td className="text-xs font-bold">
              <span className="mr-1">₹</span>239
            </td>
          </tr>
          <tr>
            <th className="text-xs text-gray-400">Coupon discount</th>
            <td className="text-xs font-bold">
              <span className="mr-1">₹</span>0
            </td>
          </tr>
          <tr>
            <th className="text-xs text-gray-400">Wallet redeem</th>
            <td className="text-xs font-bold w-1/2">
              <span className="mr-1">₹</span>0
            </td>
          </tr>
        </tbody>
      </table>
      <hr className="my-4 border-b-1 border-gray-300" />
      <div className="flex text-sm font-bold text-green-600 gap-9 mb-2">
        <span>Total Payable amount</span>
        <span>
          <span className="mr-1">₹</span>1,500
        </span>
      </div>
      <div className="flex justify-between w-11/12">
        <span className="text-xs font-bold text-gray-500">Payment mode</span>
        <span className="text-xs font-bold">Pay after service</span>
      </div>
    </div>
  );
};
export default ClientDetails;