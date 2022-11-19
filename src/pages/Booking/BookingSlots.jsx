import { Fragment, useState } from "react";
import Card from "../../components/UI/Card";
const BookingDetailsTiming = (props) => {
  const [active, setActive] = useState(null);
  const onClickHandler = (index) => {
    setActive(index);
  };
  return (
    <Fragment>
      {props.timings.map((timing, index) => {
        return (
          <Card className="!p-0">
            <div
              onClick={() => onClickHandler(index)}
              className={`${
                active === index
                  ? "!bg-[#006400] !text-white"
                  : "!bg-white !text-black"
              } px-2 md:px-3 !py-6 rounded-lg text-center  font-semibold cursor-pointer`}
            >
              <p>{timing.timing}</p>
            </div>
          </Card>
        );
      })}
    </Fragment>
  );
};

export default BookingDetailsTiming;
