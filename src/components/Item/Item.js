import { Fragment } from "react";
import ItemCard from "../UI/ItemCard";

const Item = () => {
  const itemDetails = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    bullets: ["this item is perfect", "you shoud buy this item"],
    currentPrice: "1,500",
    previousPrice: "3,500",
    save: "2000",
    time: "60 mins",
  };
  return (
    <Fragment>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <ItemCard itemDetails={itemDetails} />
        <ItemCard itemDetails={itemDetails} />
        <ItemCard itemDetails={itemDetails} />
        <ItemCard itemDetails={itemDetails} />
        <ItemCard itemDetails={itemDetails} />
        <ItemCard itemDetails={itemDetails} />
      </div>
    </Fragment>
  );
};
export default Item;
