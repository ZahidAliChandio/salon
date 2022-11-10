const AddButton = (props) => {
  return <button className={`${props.className} inline-block w-32 py-1 text-sm font-medium rounded-2xl text-white bg-green-800`}
  onClick={props.onClick}>{props.children}</button>;
};
export default AddButton;
