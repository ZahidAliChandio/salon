import { ReactComponent as Timer } from "../../assets/images/timer.svg";
import Pic from "../../assets/images/pic.png";
const Client = (props) => {
  return (
    <div className="relative inline-flex items-center gap-4 py-2 px-4 w-fit accordian-shadow rounded-xl m-2">
      <div className="align-middle items-center text-center h-[70px] w-[70px] rounded-full overflow-hidden">
        <img src={Pic} alt="Client" className=""/>
      </div>
      <div className="info">
        <h4 className="font-medium">{props.name}</h4>
        <h5 className="font-bold">
          <span className="mr-1">₹</span>
          {props.price}
        </h5>
        <div className="flex gap-4 mt-4 text-sm font-medium">
          <div className="flex gap-2 items-center">
            <Timer />
            <span>{props.date}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Timer />
            <span>{props.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Client;
