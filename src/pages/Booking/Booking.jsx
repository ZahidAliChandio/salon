import BookingSlots from "./BookingSlots";
import BookingAddress from "./BookingAddress";
// import DatePicker from "react-horizontal-datepicker";
import DatePicker from "./DatePicker";

const Booking = () => {
  const timings = [
    { id: 0, timing: "11:00am - 10:15pm" },
    { id: 1, timing: "11:00am - 10:15pm" },
    { id: 3, timing: "11:00am - 10:15pm" },
    { id: 4, timing: "11:00am - 10:15pm" },
    { id: 5, timing: "11:00am - 10:15pm" },
    { id: 6, timing: "11:00am - 10:15pm" },
    { id: 7, timing: "11:00am - 10:15pm" },
    { id: 8, timing: "11:00am - 10:15pm" },
    { id: 9, timing: "11:00am - 10:15pm" },
    { id: 10, timing: "11:00am - 10:15pm" },
    { id: 11, timing: "11:00am - 10:15pm" },
    { id: 12, timing: "11:00am - 10:15pm" },
  ];
  return (
    <div className="flex flex-col justify-center items-center lg:pd-8">
      <div className="bg-[#006400] w-full text-white text-center relative flex justify-center items-center">
        {/* <button className="bg-white absolute left-4 p-2 w-[35px] h-[35px] rounded-full flex items-center">
          <i
            className={`fa fa-arrow-left fa-2xl text-black text-2xl`}
            aria-hidden="true"
          ></i>
        </button> */}
        <h1 className="font-bold text-lg my-4">Book Appointment</h1>
      </div>
      <DatePicker />
      <h1 className="font-bold text-lg my-4">Available Slots</h1>
      <div className="text-[10px] md:text-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-3 md:gap-4">
        <BookingSlots timings={timings} />;
      </div>
      <BookingAddress />
    </div>
  );
};

export default Booking;
