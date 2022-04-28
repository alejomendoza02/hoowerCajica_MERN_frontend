import React from "react";
import { Helmet } from "react-helmet";
import ImageHeader from "../img/biografia/renacer.png";
import Img1 from "../img/renacer/img1.jpg";
import Img2 from "../img/renacer/2.jpg";
import Img3 from "../img/renacer/3.jpg";

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
               `}
          >
            {/* Image */}
            <div className="h-full flex justify-center md:w-1/2 md:h-full md:items-end md:relative">
              <img
                src={ImageHeader}
                alt={`Imágen de Hoower Cajicá en la sección de`}
                className={`h-full object-contain md:w-full`}
              />
            </div>
          </div>
        </header>
        <div className="h-full max-w-screen-lg mx-auto">
          {/* First paragraph */}
          <div className="w-full mx-auto pt-10">
            <h1 className="font-merri text-center text-3xl font-bold">
              Fundación Renacer
            </h1>
            <div className="w-full h-[300px] py-5 md:h-[450px]">
              <img src={Img1} alt="" className="h-full object-cover mx-auto" />
            </div>
            <p className="text-lg px-5">
              <span className="text-xl font-merri font-semibold">Renacer</span>  en Vida Nueva; la fe y la religiosidad nos deben a ayudar
              a ser más y mejores personas, no es suficiente con saber qué está
              bien y qué no, es fundamental saber elegir aquello que nos
              conviene y poner en práctica estilos de vida saludable desde una
              antropología integral; RENACER quiere ser una ayuda para todos
              aquellos que buscan estar mejor; hay una pregunta existencial que
              nos sirve de punto de partida:
            </p>
            <p className="text-xl mt-5 py-5 text-center font-merri font-semibold italic bg-primary text-white md:rounded-xl md:shadow-xl">Pudiendo estar bien ¿por qué no lo
              estoy?</p>
          </div>
          {/* Second paragraph */}
          <div className="w-full flex flex-col md:flex-row md:items-center md:pb-5">
            <div className="md:w-3/5">
              <p className="text-lg p-5">
                Queremos apoyar a cada persona que desee tener claridad de su
                proyecto de vida personal, que pueda dar respuesta al sentido de
                su vida, que sea consciente de su misión en este mundo, ayudar a
                descubrir las estrategias para alcanzar sus propias metas
                personales, todo esto desde una antropología cristiana, siendo
                puente para otras organizaciones y programas que nos brindan
                apoyo.
              </p>
              <p className="text-lg px-5">
                RENACER es una organización sin ánimo de lucro basada en la fe
                cristiana; tiene su origen en el mandamiento de amor, busca
                promover la autoestima, el amor propio y la dignidad de cada
                persona; para amar a Dios sobre todas las cosas y al prójimo, el
                punto de partida es el amor propio, es decir la búsqueda del
                propio bien, esa es nuestra tarea primordial, que cada persona
                pueda sanar heridas y renacer a una vida nueva.{" "}
              </p>
            </div>
            <div className="w-full h-[300px] py-5 md:w-2/5 md:h-full">
              <img src={Img2} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Third paragraph */}
          <div className="w-full flex flex-col gap-5">
            <p className="text-lg px-5">
              RENACER nació como fruto de años de la experiencia en el trabajo
              con diferentes grupos sociales de Colombia, como población
              vulnerable, víctimas de algún tipo de discriminación, racismo y
              maltrato, mujeres madres solteras, desplazados y reinsertados de
              la violencia, jóvenes con problemas de uso y abuso de sustancias
              psicoactivas y diferentes formas de familia; al llegar a este país
              nos dimos cuenta que esa misma realidad de heridas existenciales
              las vive la comunidad latina en general, con una particularidad y
              es que somos migrantes que hemos venido a buscar el “sueño
              americano”.
            </p>
            <p className="text-lg px-5">
              RENACER nace en medio de la pandemia, descubrimos que las redes
              sociales son una oportunidad para llegar a muchas personas sin
              importar la distancia, en diferentes lugares del mundo nos
              conectamos como comunidad latina a compartir experiencias, orar,
              rezar y meditar la palabra; nos dimos cuenta que en las crisis que
              viven algunas personas hay una oportunidad de aprender, crecer y
              mejorar nuestra vida; y es ahí donde descubrimos que podíamos
              ayudar a muchas más personas; todos esos esfuerzos los hicimos
              tangibles en esta organización, RENACER como un espacio de
              resiliencia, de oportunidad, de encuentro y de mejoramiento de la
              calidad de vida.
            </p>
          </div>
          <div className="w-full h-[300px] py-5 md:h-[600px]">
            <img src={Img3} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Renacer;
