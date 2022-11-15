import Card from "../../components/UI/Card";
const BookingDetailsTiming = (props) => {
  console.log(props);
  return (
    <Card className="!p-1">
      <div className="bg-white hover:bg-[#006400] px-2 md:px-3 !py-6 rounded-lg text-center border border-black text-black hover:text-white font-semibold cursor-pointer">
        <p>{props.timings}</p>
      </div>
    </Card>
  );
};

export default BookingDetailsTiming;
