import { Fragment } from "react";
import ItemCard from "./ItemCard";

const Item = () => {
  return (
    <Fragment>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <ItemCard
          title="Porem ipsum dolor sit amet consectetur adipisicing elis"
          bullets={["this item is perfect", "you shoud buy this item"]}
          currentPrice="1,500"
          previousPrice="3,500"
          save="2000"
          time="60 mins"
          amount={0}
        />
        <ItemCard
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          bullets={["this item is perfect", "you shoud buy this item"]}
          currentPrice="1,500"
          previousPrice="3,500"
          save="2000"
          time="60 mins"
          amount={0}
        />
        <ItemCard
          title="Lorem ipsum dolor sit amet consectetur adipisicing elip"
          bullets={["this item is perfect", "you shoud buy this item"]}
          currentPrice="1,500"
          previousPrice="3,500"
          save="2000"
          time="60 mins"
          amount={0}
        />
        <ItemCard
          title="Korem ipsum dolor sit amet consectetur adipisicing elit"
          bullets={["this item is perfect", "you shoud buy this item"]}
          currentPrice="1,500"
          previousPrice="3,500"
          save="2000"
          time="60 mins"
          amount={0}
        />
        <ItemCard
          title="Jorem ipsum dolor sit amet consectetur adipisicing elit"
          bullets={["this item is perfect", "you shoud buy this item"]}
          currentPrice="1,500"
          previousPrice="3,500"
          save="2000"
          time="60 mins"
          amount={0}
        />
        <ItemCard
          title="Sorem ipsum dolor sit amet consectetur adipisicing elit"
          bullets={["this item is perfect", "you shoud buy this item"]}
          currentPrice="1,500"
          previousPrice="3,500"
          save="2000"
          time="60 mins"
          amount={0}
        />
      </div>
    </Fragment>
  );
};
export default Item;
