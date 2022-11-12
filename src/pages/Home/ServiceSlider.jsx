import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import AddButton from "../../components/UI/AddButton";

const ServiceSlider = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const itemIndex = items.findIndex((item) => item.id === props.data.id);
  const itemAmount = itemIndex >= 0 ? items[itemIndex].amount : 0;

  const addCartItemHandler = (item) => {
    dispatch(cartActions.addCartItem(item));
  };
  const removeCartItemHandler = (item) => {
    dispatch(cartActions.removeCartItem(item));
  };
  return (
    <div className="bg-white p-[14px] rounded-md accordian-shadow">
      {/* <img src="" alt="" /> */}
      <div className="w-full h-[188px] rounded-md bg-[#EFEFEF]"></div>
      <p className="text-sm font-bold mt-2">Full arms & Underarms</p>
      <div className="flex justify-between mt-1">
        <p className="font-bold">₹255</p>
        <AddButton className={"ml-4"}>
          {!itemAmount ? (
            <span
              onClick={() => addCartItemHandler(props.data)}
              className="inline-block cursor-pointer text-center w-full"
            >
              ADD TO CART
            </span>
          ) : (
            <div className="inline-flex justify-between items-center w-full cursor-default">
              <span
                className="text-md font-bold pl-3 pr-2 cursor-pointer"
                onClick={() => removeCartItemHandler(props.data)}
              >
                -
              </span>
              <span>{itemAmount}</span>
              <span
                className="text-md font-bold pr-3 pl-2 cursor-pointer"
                onClick={() => addCartItemHandler(props.data)}
              >
                +
              </span>
            </div>
          )}
        </AddButton>
      </div>
    </div>
  );
};

export default ServiceSlider;
