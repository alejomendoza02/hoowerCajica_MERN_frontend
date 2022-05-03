import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import clienteAxios from "../config/clientAxios";
import { Markup } from "interweave";
import useReflexiones from "../hooks/useReflexiones";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";

const Noticia = () => {
  // ------------------- HOOKS -------------------

  // ------------------- useState

  const [post, setPost] = useState({});
  const [load, setLoad] = useState(true);

  // ------------------- useParams

  const params = useParams();

  // ------------------- useEffect

  useEffect(() => {
    setPost({});
    setLoad(true);
    const getPost = async () => {
      try {
        const { data } = await clienteAxios(`/post/public/${params.id}`);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, [params]);

  // ------------------- useReflexiones
  const { noticias } = useReflexiones();
  const otherNoticias = noticias.filter(
    (reflexion) => reflexion._id != params.id
  );
  return (
    <>
      <Helmet>
        <title>{`Noticias | ${post.title}`}</title>
        <meta property="fb:app_id" content="123456789" />
        <meta
          property="og:url"
          content={`https://www.hoowercajica.com/post/${params.id}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${post.title}`} />
        <meta property="og:image" content={`${post.img_header}`} />
        <meta property="og:image:alt" content="Encabezado de la noticia" />
        <meta property="og:site_name" content="Hoower Cajicá" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content={post.author}></meta>
      </Helmet>
      <section className="w-full">
        {load ? (
          <div className="max-w-screen-lg h-[300px] mx-auto">
            <Loader />
          </div>
        ) : (
          <>
            {Object.getOwnPropertyNames(post).length === 0 ? (
              <h1 className="font-merri text-4xl text-center h-[400px] pt-[100px]">
                Esta noticia no existe
              </h1>
            ) : (
              <>
                <div className="max-w-screen-lg h-full mx-auto">
                  {/* Header */}
                  <header className="h-auto">
                    <div className="h-[200px] mx-auto md:h-[500px]">
                      <img
                        src={post.img_header}
                        alt="Imágen previa del post"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full flex justify-center relative">
                      <Link to="/noticias">
                        <div className="absolute top-0 left-0 text-4xl hidden hover:bg-gray-100 focus:bg-gray-200 mt-2 transition-all duration-500 md:flex items-center p-3">
                          <ion-icon name="arrow-back"></ion-icon>
                        </div>
                      </Link>
                      <h1 className="p-5 text-2xl font-semibold font-merri text-center">
                        {post.title}
                      </h1>
                    </div>
                  </header>
                  {/* General info */}
                  <div className="w-full">
                    <p className="px-5 font-semibold font-merri">
                      Autor:{" "}
                      <span className="capitalize">{String(post.author)}</span>
                    </p>
                    <p className="px-5 font-semibold font-merri">
                      Publicado el:{" "}
                      <span>{String(post.createdAt).slice(0, 10)}</span>
                    </p>
                  </div>
                  <main>
                    <div className="p-5">
                      <Markup content={post.body} />
                    </div>
                  </main>
                </div>
                <section className="p-5 w-full h-auto bg-secondary mt-5">
                  <h3 className="text-3xl font-merri text-white text-center font-semibold py-5">
                    Más noticias
                  </h3>
                  <div className="flex flex-col md:max-w-screen-2xl mx-auto gap-3 my-5 md:flex-row md:justify-center">
                    {/* Card */}
                    {otherNoticias.length > 0 ? (
                      otherNoticias.slice(0, 3).map((noticia) => (
                        <Link
                          key={noticia._id}
                          to={`/post/${noticia._id}`}
                          className="h-[500px] 2xl:h-[600px] bg-white hover:bg-gray-200 rounded-xl transition-all duration-500 md:w-1/4"
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
                          <div className="h-1/2 p-5 flex flex-col gap-3 text-black ">
                            <h2 className="text-xl font-semibold font-merri">
                              {noticia.title}
                            </h2>
                            <p>{String(noticia.createdAt).slice(0, 10)}</p>
                            <p className="text-md ">
                              {noticia.body
                                .replace(
                                  /(<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;)/gi,
                                  " "
                                )
                                .split(" ")
                                .slice(0, 24)
                                .join(" ")}
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
                </section>
              </>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Noticia;
