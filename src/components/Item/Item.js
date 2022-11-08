import { Fragment, useState } from "react";
import ItemCard from "../UI/ItemCard";
const bullets = ["this item is perfect", "you shoud buy this item"];
const Item = () => {
  return (
    <Fragment>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <ItemCard points={bullets} />
        <ItemCard points={bullets} />
        <ItemCard points={bullets} />
        <ItemCard points={bullets} />
        <ItemCard points={bullets} />
      </div>
    </Fragment>
  );
};
export default Item;
