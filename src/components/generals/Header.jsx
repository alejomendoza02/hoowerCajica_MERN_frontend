

const Header = ({children, bg, reverse, img}) => {

  return (
    <header className={`${bg} h-[500px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full`}>
      <div className="h-1/4 absolute w-full bg-gradient-to-b from-black/50"></div>
      {/* Container */}
      <div className={`max-w-screen-lg h-full flex flex-col items-center mx-auto ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} `}>
        {/* Text */}
        <div className="h-1/2 flex justify-center pt-20 md:w-1/2 md:pt-0">
          <h1 className="text-5xl text-white font-bold self-center font-merri">
            {children}
          </h1>
        </div>
        {/* Image */}
        <div className="h-1/2 flex justify-center md:w-1/2 md:h-full md:items-end md:relative">
          <img
            src={img}
            alt={`Imágen de Hoower Cajicá en la sección de ${children}`}
            className={`h-full object-contain md:absolute md:bottom-0 md:h-auto md:w-full`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
