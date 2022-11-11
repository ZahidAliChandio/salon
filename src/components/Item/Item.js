import { Fragment, useState } from "react";
import ItemCard from "./ItemCard";

const Item = () => {
  const [showDetailId, setShowDetailId] = useState(null);
  
  const items = [
    {
      id: 1,
      title: "Porem ipsum dolor sit amet consectetur adipisicing elis",
      bullets: ["this item is perfect", "you shoud buy this item"],
      detailBullets: [
        "this item is perfect",
        "you shoud buy this item",
        "This product is having great features",
        "This will change your life! believe me",
      ],
      currentPrice: "1,500",
      previousPrice: "3,500",
      save: "2000",
      time: "60 mins",
      amount: 0,
    },
    {
      id: 2,
      title: "Porem ipsum dolor sit amet consectetur adipisicing elis",
      bullets: ["this item is perfect", "you shoud buy this item"],
      detailBullets: [
        "this item is perfect",
        "you shoud buy this item",
        "This product is having great features",
        "This will change your life! believe me",
      ],
      currentPrice: "1,500",
      previousPrice: "3,500",
      save: "2000",
      time: "60 mins",
      amount: 0,
    },
    {
      id: 3,
      img: "Image",
      title: "Porem ipsum dolor sit amet consectetur adipisicing elis",
      bullets: ["this item is perfect", "you shoud buy this item"],
      detailBullets: [
        "this item is perfect",
        "you shoud buy this item",
        "This product is having great features",
        "This will change your life! believe me",
      ],
      currentPrice: "1,500",
      previousPrice: "3,500",
      save: "2000",
      time: "60 mins",
      amount: 0,
    },
    {
      id: 4,
      img: "Image",
      title: "Porem ipsum dolor sit amet consectetur adipisicing elis",
      bullets: ["this item is perfect", "you shoud buy this item"],
      detailBullets: [
        "this item is perfect",
        "you shoud buy this item",
        "This product is having great features",
        "This will change your life! believe me",
      ],
      currentPrice: "1,500",
      previousPrice: "3,500",
      save: "2000",
      time: "60 mins",
      amount: 0,
    },
    {
      id: 5,
      img: "Image",
      title: "Porem ipsum dolor sit amet consectetur adipisicing elis",
      bullets: ["this item is perfect", "you shoud buy this item"],
      detailBullets: [
        "this item is perfect",
        "you shoud buy this item",
        "This product is having great features",
        "This will change your life! believe me",
      ],
      currentPrice: "1,500",
      previousPrice: "3,500",
      save: "2000",
      time: "60 mins",
      amount: 0,
    },
    {
      id: 6,
      img: "Image",
      title: "Porem ipsum dolor sit amet consectetur adipisicing elis",
      bullets: ["this item is perfect", "you shoud buy this item"],
      detailBullets: [
        "this item is perfect",
        "you shoud buy this item",
        "This product is having great features",
        "This will change your life! believe me",
      ],
      currentPrice: "1,500",
      previousPrice: "3,500",
      save: "2000",
      time: "60 mins",
      amount: 0,
    },
  ];

  return (
    <Fragment>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          return (
            <ItemCard
              itemDetails={item}
              key={item.id}
              showDetailId={showDetailId}
              setShowDetailId={setShowDetailId}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
export default Item;
