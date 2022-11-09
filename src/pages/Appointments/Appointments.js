import { useState } from "react";
import AppointmentButton from "../../components/UI/AppointmentButton";
import Client from "./Client";

const Appointments = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const actions = ["Ongoing", "Completed", "Canceled"];
  const onClickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="text-center lg:text-left px-10 lg:px-20 py-4">
      <h2 className="my-8 text-xl font-bold">My Appointments</h2>
      <div className="flex justify-between accordian-shadow rounded-3xl">
        {actions.map((action, index) => {
          const isActive = activeIndex === index ? true : false;
          return (
            <AppointmentButton
              onClick={() => onClickHandler(index)}
              isActive={isActive}
              key={index}
            >
              {action}
            </AppointmentButton>
          );
        })}
      </div>
      <div className="apointment details mt-6">
        <Client image="" name="Diamond facial" price="1,500" date="Mon, 26 Setpember" time="11:00 am"/>
        <Client image="" name="Diamond facial" price="1,500" date="Mon, 26 Setpember" time="11:00 am"/>
        <Client image="" name="Diamond facial" price="1,500" date="Mon, 26 Setpember" time="11:00 am"/>
        <Client image="" name="Diamond facial" price="1,500" date="Mon, 26 Setpember" time="11:00 am"/>
        <Client image="" name="Diamond facial" price="1,500" date="Mon, 26 Setpember" time="11:00 am"/>
      </div>
    </div>
  );
};

export default Appointments;
