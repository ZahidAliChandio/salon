const AppointmentButton = (props) => {
  const activeClass = props.isActive ? "text-white bg-green-700" : "text-black";
  return (
    <button
      className={`py-3 px-4 sm:px-12 md:py-4 md:px-20 lg:px-28 xl:px-32 2xl:px-36 font-bold ${activeClass} rounded-3xl`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default AppointmentButton;
