import { Fragment, useState } from "react";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const onClickHandler = (index) => {
    setSelectedMethod(index);
  };
  const methods = [
    {
      title: "Credit/Debit Card",
      iconClass: "fa-regular fa-credit-card",
    },
    {
      title: "UPI",
      iconClass: "fa-regular",
    },
    {
      title: "Net Banking",
      iconClass: "fa-solid fa-building-columns",
    },
    {
      title: "Pay After Service (Cash/Online/Wallet)",
      iconClass: "none",
    },
  ];
  const selectStyle = "border-green-600";

  return (
    <Fragment>
      <h2 className="flex mb-4 text-left md:mb-8 text-lg md:text-xl lg:text-2xl font-bold w-full sm:mt-4 md:mt-9 lg:mt-16">
        Choose Payment Method
      </h2>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
        {methods.map((method, index) => (
          <label
            htmlFor={"card" + index}
            key={index}
            className={`grid grid-cols-[1fr,10fr,1fr] sm:grid-cols-[1fr,16fr,1fr] items-center ${
              selectedMethod === index ? selectStyle : "border-transparent"
            } rounded-full w-full py-4 md:py-5 cursor-pointer bg-white border-2 lg:border-4`}
            onClick={() => onClickHandler(index)}
          >
            <input
              type="radio"
              name="payment-method"
              id={"card" + index}
              className="h-4 lg:h-5"
            />
            <span
              className={`${
                selectedMethod === index ? "text-black" : "text-gray-500"
              } text-base md:text-lg font-semibold`}
            >
              {method.title}
            </span>
            <i
              className={`${method.iconClass} text-base md:text-lg lg:text-xl`}
            ></i>
          </label>
        ))}
        <hr className="text-2xl sm:border mb-8 mt-4 md:mb-20 md:mt-8" />
      </div>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
        <label
          htmlFor={"wallet"}
          className={`flex justify-between items-center
           "border-transparent"
          } rounded-full w-full px-4 md:px-8 py-4 md:py-5 cursor-pointer bg-white`}
        >
          <div className="flex flex-col">
            <span className={`text-base md:text-lg font-semibold`}>
              Wallet Balance
            </span>
            <span className="text-gray-400">
              ₹ 0 is available in your wallet
            </span>
          </div>
          <input
            type="checkbox"
            name="wallet"
            id="wallet"
            className="w-4 h-4 md:h-5 md:w-5 border"
          />
        </label>

        <input
          type={"text"}
          className={`text-base md:text-lg font-semibold text-gray-900 rounded-full px-4 md:px-8 py-4 md:py-5 cursor-pointer bg-white w-full`}
          placeholder="Redeem Coupon"
        />
        <div className="grid grid-cols-[10fr,1fr] md:grid-cols-[14fr,1fr] lg:grid-cols-[18fr,1fr] items-center bg-white rounded-full overflow-hidden">
          <input
            type={"text"}
            className={`text-base md:text-lg font-semibold px-4 md:px-8 py-4 md:py-5 w-full outline-none`}
            placeholder="Any Suggestions?"
          />
          <i
            className={`fas fa-comment-dots text-base md:text-lg lg:text-xl text-green-800`}
          ></i>
        </div>
        <div className="my-4">
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-location-dot"></i>
            <h1 className="font-bold text-base sm:text-lg my-4">Address</h1>
          </div>
          <p className="font-semibold text-sm sm:text-base">
            Ajnara Homes Tower-A, AJNARA HOMES, Bhangel, Ghaziabad, Uttar
            Pradesh 201009, India
          </p>
        </div>
        <div className="my-4">
          <div className="flex items-center gap-1">
            <i className="fas fa-calendar-alt"></i>
            <h1 className="font-bold text-base sm:text-lg my-4">
              Selected date and time
            </h1>
          </div>
          <p className="font-semibold text-sm sm:text-base">
            Mon, 14 November | 10:00 AM - 10:15 AM
          </p>
        </div>        
      </div>
    </Fragment>
  );
};
export default PaymentMethod;
