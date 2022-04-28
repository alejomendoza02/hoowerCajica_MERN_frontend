import Header from "../components/generals/Header";
import ImageHeader from "../img/biografia/img3.png";
import { Link } from "react-router-dom";
import useReflexiones from "../hooks/useReflexiones";
import { Helmet } from "react-helmet";

const Noticias = () => {
  // ------------------- HOOKS -------------------

  // ------------------- useReflexiones
  const { reflexiones, noticias } = useReflexiones();

  return (
    <>
      <Helmet>
        <title>{`Noticias | Hoower Cajicá`}</title>
      </Helmet>
      <div className="w-full">
        <Header bg="bg-third" reverse={false} img={ImageHeader}>
          Noticias
        </Header>
        <div className="md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto md:flex md:gap-2">
          {/* Left */}
          <div className="flex flex-col w-full md:w-2/3 gap-3 my-5">
            {/* Card */}
            {noticias.length > 0 ? (
              noticias.map((noticia) => (
                <Link
                  key={noticia._id}
                  to={`/post/${noticia._id}`}
                  className="h-[500px] 2xl:h-[600px] bg-five hover:bg-secondary transition-all duration-500"
                >
                  {/* Header */}
                  <div className="h-1/2">
                    <img
                      src={noticia.img_header}
                      alt="Imágen de encabezado de la noticia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Information */}
                  <div className="h-1/2 p-5 flex flex-col gap-3 text-white">
                    <h2 className="text-xl font-semibold font-merri">
                      {noticia.title}
                    </h2>
                    <p>{String(noticia.createdAt).slice(0, 10)}</p>
                    <p className="text-md ">
                      {noticia.body
                        .split(" ")
                        .slice(0, 20)
                        .join(" ")
                        .replace(/(<([^>]+)>)/gi, " ")}
                      ...
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <>
                <div className="w-full">
                  <h1 className="text-3xl font-semibolf font-merri text-center">
                    No hay noticias
                  </h1>
                </div>
              </>
            )}
          </div>
          {/* Right */}
          <div className="hidden md:block w-1/3 bg-gray-100 h-1/2 rounded-md my-5 p-5 sticky">
            {noticias.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold font-merri">
                  Publicaciones recientes
                </h2>
                {noticias.slice(0, 5).map((noticia) => (
                  <Link key={noticia._id} to={`/post/${noticia._id}`}>
                    <p className="my-5 text-lg ">{noticia.title}</p>
                  </Link>
                ))}
              </>
            )}
            <div className="hidden md:block w-full h-[2px] bg-primary mb-7" />

            <h2 className="text-2xl font-semibold font-merri mt-3">
              Reflexión del día
            </h2>
            {reflexiones.slice(0, 1).map((reflexion, index) => (
              <a
                href={`https://www.youtube.com/watch?v=${reflexion.id.videoId}`}
                className={`md:w-[240px]`}
                target="_blank"
                key={index}
              >
                <div className="relative h-[400px] md:h-[300px] w-full mx-auto bg-white shadow-xl transition-all duration-500 my-10 md:w-full hover:bg-gray-100">
                  <div className="h-1/2 w-full bg-third">
                    <img
                      src={reflexion.snippet.thumbnails.high.url}
                      className="w-full h-full object-cover"
                      alt="Imágen de vista previa a la reflexión"
                    />
                  </div>

                  {/* Title */}
                  <div className="h-1/2 w-full flex justify-center items-center">
                    <p className="w-2/3 text-[16px] text-center font-semibold md:text-[md] lg:text-md">
                      {reflexion.snippet.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticias;
