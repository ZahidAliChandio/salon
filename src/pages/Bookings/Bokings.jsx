import BookingSlots from "./BookingSlots";
import BookingAddress from "./BookingAddress";

const Bokings = () => {
  const timings = [
    { id: 0, timings: "11:00am - 10:15pm" },
    { id: 1, timings: "11:00am - 10:15pm" },
    { id: 3, timings: "11:00am - 10:15pm" },
    { id: 4, timings: "11:00am - 10:15pm" },
    { id: 5, timings: "11:00am - 10:15pm" },
    { id: 6, timings: "11:00am - 10:15pm" },
    { id: 7, timings: "11:00am - 10:15pm" },
    { id: 8, timings: "11:00am - 10:15pm" },
    { id: 9, timings: "11:00am - 10:15pm" },
    { id: 10, timings: "11:00am - 10:15pm" },
    { id: 11, timings: "11:00am - 10:15pm" },
    { id: 12, timings: "11:00am - 10:15pm" },
  ];
  return (
    <div className="flex flex-col justify-center items-center p-2 sm:p-4 md:p-6 lg:pd-8">
      <h1 className="font-bold text-lg my-4">Available Slots</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-3 md:gap-4">
        {timings.map((timing) => {
          return (
            <BookingSlots key={timings.id} timings={timing.timings} />
          );
        })}
      </div>
      <BookingAddress />
    </div>
  );
};

export default Bokings;
