import AccordionFAQ from "./AccordianFAQ";

const FAQs = () => {
  const items = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet luctus sapien, ac scelerisque nibh. Pellentesque hendrerit mauris et laoreet laoreet. Proin ornare sollicitudin metus, vitae sagittis augue dapibus facilisis. In non massa quis arcu pulvinar tempor. Sed lacinia justo in ligula ultrices, ut consequat augue molestie.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet luctus sapien, ac scelerisque nibh. Pellentesque hendrerit mauris et laoreet laoreet. Proin ornare sollicitudin metus, vitae sagittis augue dapibus facilisis. In non massa quis arcu pulvinar tempor. Sed lacinia justo in ligula ultrices, ut consequat augue molestie.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet luctus sapien, ac scelerisque nibh. Pellentesque hendrerit mauris et laoreet laoreet. Proin ornare sollicitudin metus, vitae sagittis augue dapibus facilisis. In non massa quis arcu pulvinar tempor. Sed lacinia justo in ligula ultrices, ut consequat augue molestie.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sed lorem vitae tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet luctus sapien, ac scelerisque nibh. Pellentesque hendrerit mauris et laoreet laoreet. Proin ornare sollicitudin metus, vitae sagittis augue dapibus facilisis. In non massa quis arcu pulvinar tempor. Sed lacinia justo in ligula ultrices, ut consequat augue molestie.",
    },
  ];
  return (
    <div className="py-10 px-8 sm:px-12 md:px-20">
      <div>
        <h2 className="text-3xl font-bold">FAQs</h2>
        <p className="my-3">
          If you have any further questions you can contact us
        </p>
      </div>
      <div>
        <AccordionFAQ items={items} />
      </div>
    </div>
  );
};

export default FAQs;
