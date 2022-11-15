const PaymentSummary = () => {
  return (
    <div className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2">
      <h2 className="my-4 text-center md:my-8 text-xl md:text-2xl lg:text-3xl font-bold">
        Payment Summary
      </h2>
      <div className="flex flex-col gap-2 md:gap-3 font-bold">
        <div className="flex justify-between text-sm sm:text-base md:text-lg lg:text-xl">
          <span>Total Amount</span>
          <span>₹1,575</span>
        </div>
        <div className="flex justify-between text-green-600 text-sm sm:text-base md:text-lg lg:text-xl">
          <span>Total Discount</span>
          <span>₹1,134</span>
        </div>
      </div>
      <hr className="text-2xl sm:border my-3 md:my-4"/>
      <div className="flex justify-between font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        <span>Amount Payable</span>
        <span>₹1,575</span>
      </div>
    </div>
  );
};
export default PaymentSummary;
