import React from "react";
import { Link } from "react-router-dom";

const CardN = ({ url, image_url, title, date, description }) => {
  return (
    <Link  to={`post/${url}`} className="md:w-1/3 md:h-auto">
      {/* Card Container */}
      <div className="h-[500px] bg-five w-full mt-5 md:h-full hover:bg-secondary transition-all duration-500">
        {/* Image */}
        <div className="h-1/2 md:h-2/5 w-full">
          <img
            src={image_url}
            alt={`Imágen de referencia a la noticia ${title}`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Information */}
        <div className="h-1/2 md:h-3/5 p-5 flex flex-col gap-3 text-white">
          <p className="text-xl font-semibold">{title}</p>
          <p>{date.slice(0,10)}</p>
          <p className="text-md ">{description.split(' ').slice(0,20).join(' ').replace(/(<([^>]+)>)/ig, ' ')}...</p>
        </div>
      </div>
    </Link>
  );
};

export default CardN;
