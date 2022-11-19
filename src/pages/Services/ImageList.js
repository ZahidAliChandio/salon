const ImageList = (props) => {  
    const data=props.data;
  return (
    <div className="grid grid-cols-3 items-start gap-4">
      {data.map((item,index) => {
        return (
          <div key={index} className="flex flex-col gap-2 justify-center cursor-pointer">
            <img src={item.image} alt="service" className="rounded-lg"/>
            <span className="text-center w-full">{item.title}</span>            
          </div>
        );
      })}
    </div>
  );
};
export default ImageList;
