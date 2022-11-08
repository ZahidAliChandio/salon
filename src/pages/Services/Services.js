import Item from "../../components/Item/Item";
import Accordion from "../../components/UI/Accordion";

const items = [
  { title: "Facial & Clean up", content: "first content are here" },
  { title: "Waxing", content: "second content are here" },
  { title: "De-Tan", content: "second content are here" },
  { title: "Waxing", content: "second content are here" },
  { title: "Facial", content: "second content are here" },
  { title: "Waxing", content: "second content are here" },
  { title: "Facial", content: "second content are here" },
  { title: "Waxing", content: "second content are here" },
];

const Services = () => {
  return (
    <div className="relative border mt-8 px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20 ">
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
  );
};
export default Services;
