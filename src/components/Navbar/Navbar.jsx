import { useSelector } from "react-redux";
import search from "../../assets/images/search.svg";
import shop from "../../assets/images/cart.svg";
import user from "../../assets/images/user.svg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const items = useSelector((state) => state.cart.cartItems);
  const totalItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const crossHandler = () => {
    // {document.getElementById('searchTxt').getText()}
    if (document.getElementById("searchTxt").value !== "") {
      document.getElementById("searchTxt").value = "";
    }
  };

  return (
    <div className=" w-full z-30">
      <div className="flex justify-around gap-4 lg:gap-0 w-full flex-wrap items-center pt-[25px] pb-[35px] bg-white border-b-2 border-[#C7C7C7] font-gillsans">
        <div className="mx-1 order-1">
          {/* <img src={shop} alt="Logo" /> */}
          <p>LOGO</p>
        </div>
        <div className="w-3/4 flex border-2 border-[#C7C7C7] rounded-3xl px-2 order-3 sm:order-2">
          <button className="px-[10px]">
            <img src={search} alt="" className="w-[14px] h-[14px]" />
          </button>
          <input
            type="text"
            name=""
            id="searchTxt"
            placeholder="Search for facial, waxing and more"
            className="focus:outline-none w-full h-[36px]"
          />
          <button
            onClick={() => {
              crossHandler();
            }}
            className="px-[10px]"
          >
            <i className="fas fa-times-circle text-sm text-[#C7C7C7]"></i>
          </button>
        </div>
        <div className="flex space-x-6 order-2 sm:order-3">
          <Link to="/cart" className="relative flex space-x-2 items-center">
            <img className="w-[19px] h-[19px]" src={shop} alt="" />
            <p className="absolute bg-[#006400] rounded-full w-[15px] h-[15px] text-[11px] text-center top-1 right-[22px] text-white">
              {totalItems > 0 ? totalItems : 0}
            </p>
            <p className="text-[#006400] font-bold text-[12px]">Cart</p>
          </Link>
          <button
            className="flex w-[106px] h-[44px] items-center justify-center bg-[#006400] p-1 rounded-lg text-white space-x-2"
            onClick={props.onLogin}
          >
            <p>Login</p>
            <img src={user} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
