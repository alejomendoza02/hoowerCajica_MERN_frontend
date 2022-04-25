import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CardN from "./CardN";
import clienteAxios from "../config/clientAxios";

const NoticiasL = () => {
  // ------------------- HOOKS -------------------
  // ------------------- useState

  const [noticiasP, setNoticiasP] = useState([]);

  // Get the post in the BD

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await clienteAxios("/post/public");
        setNoticiasP(data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  return (
    noticiasP.length > 0 && (
      <section className="w-full h-auto md:h-auto ">
        {/* General Container*/}
        <div className="max-w-screen-lg h-full mx-auto pt-5 md:relative">
          <h2 className="text-4xl font-bold  text-center md:text-left">
            Noticias
          </h2>
          <div className="h-full w-full flex flex-col md:flex-row md:gap-3 md:h-[400px] ">
            {noticiasP.map((noticia) => (
              <CardN
                key={noticia._id}
                url={noticia._id}
                image_url={noticia.img_header}
                title={noticia.title}
                date={noticia.createdAt}
                description={noticia.body}
              />
            ))}
          </div>
          <Link to="/noticias">
            <div className="mt-10 text-4xl hidden absolute top-[45%] right-[-1.7em] hover:bg-gray-100 focus:bg-gray-200 transition-all duration-500 md:flex items-center p-3">
              <ion-icon name="arrow-forward"></ion-icon>
            </div>
          </Link>
          <Link to="/noticias">
            <button className="mt-10 bg-white border-2 border-black px-10 py-2 text-black font-bold block mx-auto hover:bg-black hover:text-white transition-all duration-500 rounded-xl md:hidden">
              Ver más
            </button>
          </Link>
        </div>
      </section>
    )
  );
};

export default NoticiasL;
