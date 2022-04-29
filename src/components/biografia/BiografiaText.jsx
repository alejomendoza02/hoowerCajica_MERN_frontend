import Image1 from "../../img/biografia/img1.png";
import Image2 from "../../img/biografia/renacer.png";
import { Link } from "react-router-dom";

const BiografiaText = () => {
  return (
    <main className="w-full">
      <div className="max-w-screen-lg mx-auto">
        {/* Firts paragraph */}
        <div className="p-8 py-10">
          <p className="font-semibold text-lg md:text-center">
            Soy colombiano de las bravas tierras de Santander, eso sí con la
            mezcla Boyacense de mi papá Belisario, no Belisario Betancur,
            Belisario Cajicá; soy el octavo de 12 hijos. Nací en una familia
            creyente y practicante, de esas de las que pensaban que el que reza
            y peca empata; gracias a Dios y unos sacerdotes amigos la cosa fue
            cambiando y descubrimos que el que reza, sirve y a los más
            necesitados.
          </p>
        </div>
        {/* Second paragraph */}
        <div className="pt-5 px-8 md:flex md:pt-0">
          <p className="text-xl italic text-center md:w-2/3">
            Por el trabajo de mi papá aprendí a tener buena capacidad adaptativa
            y a ser pragmático. <br /> <br />
            De mi mamá aprendí muchas cosas en especial, a confiar en Dios y
            estar 24/7 para los demás.
          </p>
          <div className="w-full h-[250px] mt-10 md:mt-0 md:relative md:w-1/3">
            <img
              src={Image1}
              alt="Imágen de Hoower Cajicá haciendo un gesto de rezar"
              className="h-full w-full object-contain md:absolute md:right-0 md:w-auto"
            />
          </div>
        </div>
        {/* Third paragraph */}
        <div className="p-8 bg-five">
          <p className="text-white font-semibold text-lg">
            Estudié filosofía y teología en Bucaramanga, y Psicología en Roma.
            Llevo 18 años sirviendo como “cura loco”, así me dicen algunos con
            amor y confianza; y en los últimos años en los medios de
            comunicación, predicando el Evangelio, la buena nueva de Cristo,
            intentando gritarle al mundo que amar vale la pena y que pudiendo
            estar bien, ¿por qué estamos mal? <br />
            <br />
          </p>
          <p className="text-white text-lg text-center font-merri">
            Este espacio es de ustedes, aquí estoy para servir, pa’las que sea.
          </p>
        </div>
        {/* Last paragraphs */}
        <div className="p-8 md:flex md:gap-10">
          {/* Col 1 */}

          {/* Fourth paragraph */}
          <div className="md:flex md:flex-col md:w-1/2">
            <p className="text-lg">
              Mientras estudié en Roma (4 años), los cuatro veranos trabajé en
              un barco de cruceros y fue unas de las mejores aventuras poder
              conocer muchos países y trabajar con diferentes culturas; una
              bendición saber que, aunque hay muchas diferencias todos somos
              iguales, tenemos metas, sueños y sufrimos las tristezas en China,
              Japón, Noruega, España, Marruecos, Egipto, Irlanda. Muchos idiomas
              y el mismo lenguaje del amor de Cristo.
            </p>
            <div className="my-5 h-[4px] w-full bg-third" />
            {/* Fiveth paragraph */}
            <p className="text-lg">
              Después de una extraordinaria experiencia en Roma, al llegar a
              Bucaramanga, fui asignado como asesor latinoamericano del
              Movimiento Familiar Cristiano (MFC), conocer en cada país
              latinoamericano los esfuerzos que hacen los laicos por promover la
              esperanza de un mundo mejor para todos; paralelo a este trabajo
              internacional también fui asignado como capellán de hogares CREA,
              centro de reeducación para personas con problemas de consumo se
              sustancias psicoactivas, estas dos experiencias me permitieron
              tener contacto con las redes sociales y ahí fue donde comenzó toda
              esta locura de las redes sociales; poder ampliar el radio de
              acción en el anuncio del evangelio a muchas personas.
            </p>
            <div className="my-5 h-[4px] w-full bg-third md:hidden" />
          </div>
          {/* Second col */}
          <div className="md:flex md:flex-col md:w-1/2">
            {/* Sixth paragraph */}
            <p className="text-lg">
              En el año 2010 como párroco, los miércoles acompañaba a la Dra.
              Martha López en el 1450 am, Radio Católica Metropolitana, un
              programa que se llama “Laicos en búsqueda”, una experiencia de
              aprendizaje y crecimiento. En ese contexto algunas personas me
              pedían que iniciara el mundo de lo digital, lo virtual y las redes
              sociales; fue hasta 6 años después cuando estaba en la Basílica
              del Señor de los Milagros de Girón, que se creó el canal de
              YouTube en mayo 2018.
            </p>
            <div className="my-5 h-[4px] w-full bg-third" />
            {/* Last paragraph */}
            <p className="text-lg">
              A finales de 2018 se hizo viral una homilía que alguien grabó y
              sin pensarlo me abrió muchas puertas, después llegué a la ciudad
              de los vientos, donde inició una aventura con la salud mental,
              ahora con el deseo de servir de puente para ayudar a la comunidad
              hispana migrante hemos creado RENACER, basados en nuestra fe en el
              Resucitado queremos brindar una luz para que muchos puedan
              levantarse y retomar un proyecto de vida, si se puede y vale la
              pena apostarle a una vida mejor. Para Dios todo es posible.
            </p>

            {/* Image */}
            <Link to='/renacer'>
              <div className="md:w-full md:h-[100px]">
                <img
                  src={Image2}
                  alt="Logo de la fundación renacer"
                  className="md:w-full md:h-full md:object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BiografiaText;
