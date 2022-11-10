import Whyuscomp from "./Whyuscomp";

const Whyus = () => {
  return (
    <div className="flex flex-wrap mx-2 lg:px-[140px] md:px-[30px] sm:px-[16px] lg:justify-between justify-center items-center pb-4">
      <div className="xl:w-[40%] w-[80%] mb-2">
        <h1 className="text-[28px] font-semibold">Why Choose Salon Tym?</h1>
        <p className="text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridic.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae
          tincidunt. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridic.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-rows-4 grid-cols-1 gap-1 items-center align-middle justify-center">
        <Whyuscomp />
        <Whyuscomp />
        <Whyuscomp />
        <Whyuscomp />
      </div>
    </div>
  );
};

export default Whyus;
