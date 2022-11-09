const UserProfile = (props) => {
  return (
    <div className="relative flex items-center justify-between gap-4 w-full  pt-2 pb-3 pr-2 m-2 border-b border-gray-400">
      <div className="flex items-center gap-4">
        <div className="align-middle items-center text-center h-[36px] w-[36px] rounded-full overflow-hidden">
          {/* <img src={Pic} alt="Client" className="" /> */}
          <span className="inline-block bg-yellow-400 w-full h-full"></span>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-xs text-gray-500">{props.title}</h4>
          <h5 className="font-bold text-sm">{props.value}</h5>
        </div>
      </div>
      {props.edit && (
        <i className="p-1 fa-solid fa-pen text-[10px] text-gray-400 cursor-pointer"></i>
      )}
    </div>
  );
};
export default UserProfile;
