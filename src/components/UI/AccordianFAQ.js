import { Fragment, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as Plus } from "../../assets/images/plus.svg";

const AccordionFAQ = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const nodeRef = useRef(null);

  const onClickHandler = (index) => {
    const newIndex = index === activeIndex ? null : index;
    setActiveIndex(newIndex);
  };
  const renderedItems = items.map((item, index) => {
    // const active = index === activeIndex ? "active" : "";
    return (
      <Fragment key={index}>
        <div
          className={`inline-block w-5/12 px-4 py-3 text-sm cursor-pointer rounded-xl accordian-shadow accordian-size m-2`}
          onClick={() => onClickHandler(index)}
        >
          <div className="flex items-center justify-between font-medium">
            {item.title}
            <Plus />
          </div>
          <Transition
            in={index === activeIndex}
            timeout={150}
            nodeRef={nodeRef}
            mountOnEnter
            unmountOnExit
          >
            {(state) => (
              <p
                className={`${
                  state === "entering"
                    ? "open-modal"
                    : state === "exiting"
                    ? "close-modal"
                    : null
                } mt-2`}
              >
                {item.content}
              </p>
            )}
          </Transition>
        </div>
      </Fragment>
    );
  });
  return <div className="mt-2">{renderedItems}</div>;
};

export default AccordionFAQ;
