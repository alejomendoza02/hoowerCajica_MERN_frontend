const CardR = ({url, image, children, index}) => {
  return (
    <a href={url} className={`md:w-[240px]`} target="_blank">
  
      <div className="relative h-[400px] md:h-[300px] w-4/5 mx-auto bg-white rounded-b-[20px] shadow-xl transition-all duration-500 my-10 md:w-full md:scale-[95%] md:hover:scale-100">
        {/* Image Card */}
        {index === 0 && (
          <h1 className="absolute top-[-38px] bg-five text-white py-2 w-full rounded-t-xl text-center font-bold">Reflexión del día</h1>
        )}
        <div className="h-1/2 w-full bg-third">
          <img src={image} className="w-full h-full object-cover" alt={`Imágen de referencia de ${children}`} />
        </div>

        {/* Title */}
        <div className="h-1/2 w-full flex justify-center items-center">
          <p className="w-2/3 text-xl text-center font-semibold md:text-[16px] lg:text-md">
            {children}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardR;
