import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clienteAxios from "../config/clientAxios";
import { Markup } from "interweave";

const Noticia = () => {
  // ------------------- HOOKS -------------------

  // ------------------- useState

  const [post, setPost] = useState("");

  // ------------------- useParams

  const params = useParams();

  // ------------------- useEffect

  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await clienteAxios(`/post/public/${params.id}`);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPost();
  }, []);
  return (
    <section className="w-full">
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
          <h1 className="p-5 text-2xl font-semibold font-merri text-center">
            {post.title}
          </h1>
        </header>
        {/* General info */}
        <div className="w-full">
          <p className="px-5 font-semibold">Publicado el: <span>{String(post.createdAt).slice(0,10)}</span></p>
        </div>
        <main>
          <div className="mt-10 p-5">
            <Markup content={post.body} />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Noticia;
