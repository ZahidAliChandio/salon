const BookingDetailsTiming = (props) => {
  console.log(props);
  return (
    <div className="bg-white hover:bg-[#006400] p-2 md:p-4 rounded-lg text-center border-2 border-black text-black hover:text-white font-semibold">
      <p>{props.timings}</p>
    </div>
  );
};

export default BookingDetailsTiming;
