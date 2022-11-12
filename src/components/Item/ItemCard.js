import { useDispatch, useSelector } from "react-redux";
import Pic from "../../assets/images/pic.png";
import ItemDetails from "./ItemDetails";
import AddButton from "../UI/AddButton";
import { cartActions } from "../../store/cart";
import Slide1 from "../../assets/images/slide-1.jpg";
import Slide2 from "../../assets/images/slide-2.jpg";
import Slide3 from "../../assets/images/slide-3.jpg";

const ItemCard = ({ itemDetails, showDetailId, setShowDetailId }) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.cartItems);
  const itemIndex = items.findIndex((item) => item.id === itemDetails.id);
  const itemAmount = itemIndex >= 0 ? items[itemIndex].amount : 0;

  const addCartItemHandler = (item) => {
    const newItem = { ...item, amount: 1 };
    dispatch(cartActions.addCartItem(newItem));
  };
  const removeCartItemHandler = (item) => {
    dispatch(cartActions.removeCartItem(item));
  };

  const images = [Slide1, Slide2, Slide3];

  const onClickHandler = (itemId) => {
    setShowDetailId(itemId);
  };

  return (
    <div className="block h-fit pb-8 w-full relative">
      <div className="w-full overflow-hidden rounded-xl">
        <img src={Pic} alt="item" className="w-full md:h-56 object-cover" />
      </div>
      <h4 className="text-sm font-medium mt-2 mb-1">{itemDetails.title}</h4>
      <ul>
        {itemDetails.bullets.map((item, index) => {
          return (
            <li className="flex items-center pl-1" key={index}>
              <span className="-left-1 relative inline-block bg-black rounded-full border w-2 h-2"></span>
              <span className="text-sm">{item}</span>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-2 my-3 text-sm">
        <span className="font-bold">₹{itemDetails.currentPrice}</span>
        <span className="text-gray-600">
          <strike>₹{itemDetails.previousPrice}</strike>
        </span>
        <span className="flex gap-1 font-bold text-green-600">
          <span>Save</span>
          <span>₹{itemDetails.save}</span>
        </span>
        <span className="flex gap-1 items-center font-bold text-yellow-400">
          <i className="fas fa-clock"></i>
          <span>{itemDetails.time}</span>
        </span>
      </div>
      <button
        className="font-bold text-green-600 text-sm"
        onClick={() => onClickHandler(itemDetails.id)}
      >
        View Details
      </button>
      <AddButton className={"ml-4"}>
        {!itemAmount ? (
          <span
            onClick={() => addCartItemHandler(itemDetails)}
            className="inline-block cursor-pointer text-center w-full"
          >
            ADD TO CART
          </span>
        ) : (
          <div className="inline-flex justify-between items-center w-full cursor-default">
            <span
              className="text-md font-bold pl-3 pr-2 cursor-pointer"
              onClick={() => removeCartItemHandler(itemDetails)}
            >
              -
            </span>
            <span>{itemAmount}</span>
            <span
              className="text-md font-bold pr-3 pl-2 cursor-pointer"
              onClick={() => addCartItemHandler(itemDetails)}
            >
              +
            </span>
          </div>
        )}
      </AddButton>
      {showDetailId === itemDetails.id ? (
        <ItemDetails
          images={images}
          itemDetails={itemDetails}
          setShowDetailId={setShowDetailId}
        />
      ) : null}
    </div>
  );
};
export default ItemCard;
