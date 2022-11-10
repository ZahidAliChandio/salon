import Whyuscomp from "./Whyuscomp";

const Whyus = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 mx-2 px-8 md:px-12 lg:px-20 my-8 gap-14 lg:gap-16">
      <div className=" mb-2 w-full text-center">
        <h1 className="text-[28px] font-semibold">Why Choose Salon Tym?</h1>
        <p className="text-[12px] mt-4">
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
