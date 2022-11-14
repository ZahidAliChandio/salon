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
    return (
      <Fragment key={index}>
        <div className="seperator">
          <div
            className={`px-4 py-3 text-[12px] sm:text-lg rounded-xl accordian-shadow font-gillsans cursor-pointer`}
            onClick={() => onClickHandler(index)}
          >
            <div className="flex items-center justify-between font-medium">
              {item.title}
              {!(index === activeIndex) ? (
                <Plus />
              ) : (
                <i className="fa-solid fa-minus"></i>
              )}
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
        </div>
      </Fragment>
    );
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 items-stretch">
      {renderedItems}
    </div>
  );
};

export default AccordionFAQ;
