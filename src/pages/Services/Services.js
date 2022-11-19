import { Fragment, useEffect, useState } from "react";
import Pic1 from "../../assets/images/pic.png";
import Pic2 from "../../assets/images/pic.png";
import Pic3 from "../../assets/images/pic.png";
import Pic4 from "../../assets/images/pic.png";
import Pic5 from "../../assets/images/pic.png";
import Pic6 from "../../assets/images/pic.png";
import Accordion from "./Accordion";
import Item from "../../components/Item/Item";
import ImageList from "./ImageList";

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const mobileViewData = [
    { title: "Bestseller packages", image: Pic1 },
    { title: "Make your own package", image: Pic2 },
    { title: "Waxing", image: Pic3 },
    { title: "Bleach & detan", image: Pic4 },
    { title: "Facial & cleanup", image: Pic5 },
    { title: "Pedicure", image: Pic6 },
  ];
  const items = [
    { title: "Facial & Clean up", content: "first content is here" },
    { title: "Waxing", content: "second content is here" },
    { title: "De-Tan", content: "second content is here" },
    { title: "Waxing", content: "second content is here" },
    { title: "Facial", content: "second content is here" },
    { title: "Waxing", content: "second content is here" },
    { title: "Facial", content: "second content is here" },
    { title: "Waxing", content: "second content is here" },
  ];
  const getWidth = () => {
    return window.innerWidth;
  };
  useEffect(() => {
    const width = getWidth();
    setWindowWidth(width);
  }, []);

  return (
    <Fragment>
      <div className="relative mt-8 px-4 sm:px-8 xl:px-16 2xl:px-20 ">
        <div className="flex justify-center">
          <div className="flex items-center justify-center font-medium rounded-lg bg-lime-100 h-16 w-4/5 sm:w-3/4 md:w-1/2 lg:w-2/5">
            <h3>Facial</h3>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start sm:gap-8 xl:gap-12 mt-6">
          {windowWidth >= 768 && <Accordion items={items} />}
          {windowWidth < 768 && <ImageList data={mobileViewData} />}
          <Item />
        </div>
      </div>
    </Fragment>
  );
};
export default Services;
