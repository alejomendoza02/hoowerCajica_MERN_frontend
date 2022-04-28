import React from "react";
import { Helmet } from "react-helmet";
import ImageHeader from "../img/biografia/renacer.png";
import Header from "../components/generals/Header";

const Renacer = () => {
  return (
    <>
      <Helmet>
        <title>{`Fundación Renacer | Hoower Cajicá`}</title>
      </Helmet>
      <div className="h-full w-full">
        <header
          className={`bg-third h-[500px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full`}
        >
          <div className=" h-1/4 absolute w-full bg-gradient-to-b from-black/50"></div>
          {/* Container */}
          <div
            className={`max-w-screen-lg h-full flex flex-col items-center mx-auto
               "md:flex-row-reverse" `}
          >
            {/* Image */}
            <div className="h-1/2 flex justify-center md:w-1/2 md:h-full md:items-end md:relative">
              <img
                src={ImageHeader}
                alt={`Imágen de Hoower Cajicá en la sección de`}
                className={`h-full object-contain md:w-full`}
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Renacer;
