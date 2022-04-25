import { Link } from "react-router-dom";
import Image1 from "../img/bio_l.png";

const BiografiaL = () => {
  return (
    <section className="h-auto md:h-[500px] md:pl-5 lg:pl-0 mt-5 md:my-5">
      <div className="max-w-screen-lg bg-white h-full mx-auto flex flex-col md:flex-row md:justify-center">
        {/* Container Left */}
        <div className="w-full h-full mb-10 px-10 md:w-2/3 md:pl-0 md:pr-20 md:flex md:flex-col md:justify-center">
          <h1 className="text-4xl font-bold text-center md:text-left">
            Hoower Cajicá
          </h1>
          <p className="text-[22px] w-full mt-10  text-center md:text-left md:leading-10">
            Soy colombiano, resido en Estados Unidos, psicólogo, sacerdote,
            intento desde las redes sociales hacer un mundo mejor, a veces digo
            las cosas un poco crudas, me gusta reírme de casi todo.
          </p>
          <Link to="biografia">
            <button className="px-5 py-2 border-2 bg-white border-black text-2xl font-bold block mx-auto mt-10 hover:bg-black hover:text-white transition-all md:text-xl">
              Biografía
            </button>
          </Link>
        </div>
        {/* Container Right */}
        <div className="w-full h-full md:w-1/3 md:flex md:justify-end md:items-center">
          <div className="w-full h-[100vw] bg-secondary relative md:w-[300px] md:h-[300px]">
            {/* Image */}
            <img
              src={Image1}
              alt="Imágen del sacerdote Hoower Cajicá"
              className="absolute bottom-0 md:right-[100px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiografiaL;
