import { useSelector } from "react-redux";
import logo from "../../assets/images/chevron-right.svg";
import search from "../../assets/images/search.svg";
import shop from "../../assets/images/cart.svg";
import user from "../../assets/images/user.svg";
import MiniNavbar from "./MiniNavbar";


const Navbar = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const totalItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0)

  let miniNavArr = [
    { id: 0, img: null, details: "Salon at home" },
    { id: 1, img: null, details: "Hair Styling" },
    { id: 2, img: null, details: "Super Sale" },
    { id: 3, img: null, details: "Super Sale" },
  ];
  return (
    <div className=" w-full z-30">
      <div className="flex justify-around gap-4 lg:gap-0 w-full flex-wrap items-center pt-[25px] pb-[35px] bg-white border-b-2 border-[#C7C7C7] font-gillsans">
        <div className="mx-1">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-3/4 flex border-2 border-[#C7C7C7] rounded-3xl px-2">
          <button className="px-[10px]">
            <img src={search} alt="" className="w-[14px] h-[14px]" />
          </button>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for facial, waxing and more"
            className="focus:outline-none w-full h-[36px]"
          />
          <button className="px-[10px]">
            <i className="fas fa-times-circle text-sm text-[#C7C7C7]"></i>
          </button>
        </div>
        <div className="flex space-x-6">
          <div className="relative flex space-x-2 items-center">
            <img className="w-[19px] h-[19px]" src={shop} alt="" />
            <p className="absolute bg-[#006400] rounded-full w-[15px] h-[15px] text-[11px] text-center top-1 right-[22px] text-white">
              {totalItems > 0 ? totalItems : 0}
            </p>
            <p className="text-[#006400] font-bold text-[12px]">Cart</p>
          </div>
          <button className="flex w-[106px] h-[44px] items-center justify-center bg-[#006400] p-1 rounded-lg text-white space-x-2">
            <p>Login</p>
            <img src={user} alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap bg-white drop-shadow-sm shadow-[#0000001F] justify-center gap-10 pb-[34px] pt-[24px] border shadow-2xl">
        {miniNavArr.map((n) => {
          return <MiniNavbar key={n.id} data={n} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;
