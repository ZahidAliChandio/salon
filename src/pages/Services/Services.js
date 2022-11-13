import { Fragment } from "react";
import MiniNavbar from "../../components/Navbar/MiniNavbar";
import Accordion from "./Accordion";
import Item from "../../components/Item/Item";


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

const Services = () => {
  let miniNavArr = [
    { id: 0, img: null, details: "Salon at home" },
    { id: 1, img: null, details: "Hair Styling" },
    { id: 2, img: null, details: "Super Sale" },
    { id: 3, img: null, details: "Super Sale" },
  ];
  return (
    <Fragment>
      <div className="flex flex-wrap bg-white drop-shadow-sm shadow-[#0000001F] justify-center gap-10 pb-[34px] pt-[24px] border shadow-2xl">
        {miniNavArr.map((n) => {
          return <MiniNavbar key={n.id} data={n} />;
        })}
      </div>
      <div className="relative mt-8 px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20 ">
        <div className="flex justify-center">
          <div className="flex items-center justify-center font-medium rounded-lg bg-lime-100 h-16 w-4/5 sm:w-3/4 md:w-1/2 lg:w-2/5">
            <h3>Facial</h3>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start sm:gap-8 lg:gap-12 mt-6">
          <Accordion items={items} />
          <Item />
        </div>
      </div>
    </Fragment>
  );
};
export default Services;
