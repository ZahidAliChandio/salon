import { useState } from "react";
import Pic from "../../assets/images/pic.png";
import ItemDetails from "../Item/ItemDetails";
import AddButton from "./AddButton";
import Slide1 from "../../assets/images/slide-1.jpg";
import Slide2 from "../../assets/images/slide-2.jpg";
import Slide3 from "../../assets/images/slide-3.jpg";

const ItemCard = ({ itemDetails }) => {
  const [showDetail, setShowDetail] = useState(false);
  const images = [Slide1, Slide2, Slide3];

  const detailBullets = [
    "this item is perfect",
    "you shoud buy this item",
    "This product is having great features",
    "This will change your life! believe me",
  ];

  const onClickHandler = () => {
    setShowDetail(true);
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
        <span className="font-bold">₹1,500</span>
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
        onClick={onClickHandler}
      >
        View Details
      </button>
      <AddButton className={"ml-4"}>ADD TO CART</AddButton>
      {showDetail && (
        <ItemDetails
          images={images}
          points={detailBullets}
          setShowDetail={setShowDetail}
        />
      )}
    </div>
  );
};
export default ItemCard;
