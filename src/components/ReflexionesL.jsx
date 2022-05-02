import CardR from "./CardR";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import useReflexiones from "../hooks/useReflexiones";

const ReflexionesL = () => {
  const { reflexiones } = useReflexiones();

  return (
    <section className="h-auto md:h-[550px] w-full  bg-gray-200 py-5 md:overflow-hidden">
      {/* Container */}
      {reflexiones.length > 0 ? (
        <div className="max-w-screen-lg h-auto mx-auto md:h-auto md:relative">
          <h2 className="text-4xl font-bold text-center pb-3 md:text-left">
            Reflexiones
          </h2>
          <div className="hidden md:block w-[200px] h-[2px] bg-primary mb-7" />

          {/* Cards */}
          <div className="md:flex md:gap-5 md:w-full overflow-hidden">
            {reflexiones.slice(0, 4).map((reflexion, index) => (
              <CardR
                key={index}
                url={`https://www.youtube.com/watch?v=${reflexion.url}`}
                image={reflexion.img_header}
                index={index}
              >
                {reflexion.title}
              </CardR>
            ))}
          </div>
          <Link to='reflexiones'>
            <button className="bg-black border-2 border-black px-10 py-2 text-white font-bold block mx-auto hover:bg-white hover:text-black transition-all duration-500 rounded-xl">
              Ver más
            </button>
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default ReflexionesL;
