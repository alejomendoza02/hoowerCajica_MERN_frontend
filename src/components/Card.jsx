const Card = ({ image, children, url }) => {
  return (
    <a href={`${url}`} className="md:w-full" target='_blank'>
      <div className="h-auto relative md:h-auto hover:opacity-80 cursor-pointer transition-all">
        <img src={image} alt={`Imágen de ${children}`}  />
        <h2 className="absolute text-white text-center font-bold text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </h2>
      </div>
    </a>
  );
};

export default Card;
