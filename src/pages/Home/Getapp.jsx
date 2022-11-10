import check from "../../assets/images/check.svg";
import google from "../../assets/images/google-play.png";
import apple from "../../assets/images/app-store.png";
import AddButton from "../../components/UI/AddButton";
const Getapp = () => {
  return (
    <div className="mt-6">
      <div className="xl:mx-[140px] mx-0 h-[390px] flex justify-center items-center xl:justify-end  rounded-lg bg-[#FAFAFA] accordian-shadow">
        <div className="md:w-[430px] w-[250px] h-[268px] xl:mr-[150px] mr-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] font-bold">Get the SaloTym app</h1>
            <p className="text-[14px]">
              We will send you a link, open it on your phone to download the app
            </p>
            <span className="flex space-x-2">
              {/* <img src={check} className="bg-[#006400]" alt="" /> */}
              <input type="checkbox" name="" id="" className="cursor-pointer"/>
              <p className="text-[13px] font-[Montserrat] font-bold">Phone</p>
            </span>
          </div>
          <div className="md:w-[384px] w-[280px] h-[50px] border-2 rounded-3xl bg-white border-[#C7C7C7] flex justify-between items-center my-3 px-3">
            <input
              className="focus:outline-none w-[215px] h-[20px] bg-none"
              placeholder="Email"
              type="email"
              name=""
              id=""
            />
            <AddButton className="!py-2 !p-[0px] text-[12px] rounded-3xl text-center">
              SHARE APP LINK
            </AddButton>
          </div>
          <div className="flex items-center">
            <img src={apple} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getapp;
