import Whyuscomp from "./Whyuscomp";

const Whyus = () => {
  return (
    <div className="grid grid-cols-1 items-center xl:grid-cols-2 mx-2 px-8 md:px-12 lg:pl-20 lg:pr-36 my-8 gap-6">
      <div className=" mb-2 w-full sm:w-4/5 text-left justify-self-center font-gillsans">
        <h1 className="text-[28px] font-semibold text-center xl:text-left">Why Choose Salon Tym?</h1>
        <p className="font-light text-[12px] sm:text-[18px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridic.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae
          tincidunt. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridic.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center align-middle justify-center">
        <Whyuscomp />
        <Whyuscomp />
        <Whyuscomp />
        <Whyuscomp />
      </div>
    </div>
  );
};

export default Whyus;
