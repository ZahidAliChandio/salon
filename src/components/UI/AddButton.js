const AddButton = (props) => {
  return <button className={`${props.className} border-2 py-1 px-6 text-sm font-medium rounded-2xl text-white bg-green-800`}>{props.children}</button>;
};
export default AddButton;
