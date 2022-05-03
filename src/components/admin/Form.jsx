import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import clienteAxios from "../../config/clientAxios";
import Alerta from "../generals/Alerta";
import RichText from "./RichText";
import Loader from "../Loader";

const Form = () => {
  // ------------------- HOOKS -------------------

  // ------------------- useState

  const [title, setTitle] = useState("");
  const [img_header, setImg_header] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [alerta, setAlerta] = useState({});
  const [button, setButton] = useState(true);

  // ------------------- useNavigate

  const navigate = useNavigate();

  // ------------------- useNavigate

  const params = useParams();

  // ------------------- getTokenAuth

  const token = localStorage.getItem("token");

  // ------------------- useEffect

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    if (params.id) {
      const getPost = async () => {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };

          const { data } = await clienteAxios(
            `/post/private/${params.id}`,
            config
          );
          setTitle(data.title);
          setImg_header(data.img_header);
          setBody(data.body);
          setAuthor(data.author)
        } catch (error) {
          console.log(error);
        }
      };
      getPost();
    }
  }, []);

  // ------------------- FUNCTIONS -------------------

  const handlePost = (e) => {
    e.preventDefault();
    if ([title, author, img_header, body].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 5000);
      return;
    }
    if (params.id) {
      updatePost();
    } else {
      newPost();
    }
  };

  const newPost = async () => {
    try {
      // Check the BD
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await clienteAxios.post(
        "/post/private",
        {
          title,
          img_header,
          body,
          author
        },
        config
      );
      setAlerta({
        msg: "Noticia publicada correctamente",
        error: false,
      });
      setButton(false);
      setTimeout(() => {
        navigate("/admin/home");
      }, 3000);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const updatePost = async () => {
    try {
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.put(
        `/post/private/${params.id}`,
        {
          title,
          img_header,
          body,
          author
        },
        config
      );
      setAlerta({
        msg: "Noticia actualizada correctamente",
        error: false,
      });
      setButton(false);
      setTimeout(() => {
        navigate("/admin/home");
      }, 3000);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <div className="max-w-screen-xl mx-auto relative z-auto">
      <Link
        to="/admin/home"
        className="absolute top-7 md:left-10 text-3xl hover:bg-gray-100 focus:bg-gray-200 text-black flex items-center transition-all p-3"
      >
        <ion-icon name="arrow-back"></ion-icon>
      </Link>
      {params.id ? ( 
        title.length > 0 ? (
          <>
          <h1 className="text-4xl font-bold text-center p-10">
            {params.id ? "Editar" : "Crear nueva"}{" "}
            <span className="text-secondary">noticia</span>
          </h1>
          {/* Form */}
          <form
            onSubmit={handlePost}
            className="bg-gray-100 rounded-xl shadow px-10 py-5 h-full md:w-3/4 flex flex-col justify-center mx-auto"
          >
            {/* Title */}
            <div>
              <label htmlFor="title" className="uppercase font-bold text-xl">
                Título
              </label>
              <input
                id="title"
                type="text"
                placeholder="Ingrese el título"
                className="w-full mt-3 p-3 border rounded-xl placeholder-gray-600"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* URL Image */}
            <div className="mt-5">
              <label htmlFor="image" className="uppercase font-bold text-xl">
                URL de la imágen del encabezado
              </label>
              <input
                id="image"
                type="text"
                placeholder="Ingrese la URL"
                className="w-full mt-3 p-3 border rounded-xl placeholder-gray-600"
                value={img_header}
                onChange={(e) => setImg_header(e.target.value)}
              />
            </div>

            {/* Author */}
            <div className="mt-5">
              <label htmlFor="autor" className="uppercase font-bold text-xl ">
                Autor de la noticia
              </label>
              <input
                id="autor"
                type="text"
                placeholder="Ingrese el nombre del autor"
                className="w-full mt-3 p-3 border rounded-xl placeholder-gray-600 capitalize"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            

            {/* Body */}
            <div className="mt-5">
              <label htmlFor="image" className="uppercase font-bold text-xl">
                Cuerpo de la noticia
              </label>
              <div className="py-5">
                <RichText setValue={setBody} value={body} />
              </div>

              {msg && <Alerta alerta={alerta} />}
            </div>

            <input
              type="submit"
              value={params.id ? "Actualizar noticia" : "Publicar noticia"}
              className={` text-white text-xl px-5 py-2 block mx-auto mt-5 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-500 ${
                !button ? "hidden" : "bg-black border-2 border-black"
              }`}
            />
          </form>
        </>
        ) : (
          <>
          <div className="w-full h-[500px] pt-20">
            <Loader />
          </div>
          </>
        )
       
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center p-10">
            {params.id ? "Editar" : "Crear nueva"}{" "}
            <span className="text-secondary">noticia</span>
          </h1>
          {/* Form */}
          <form
            onSubmit={handlePost}
            className="bg-gray-100 rounded-xl shadow px-10 py-5 h-full md:w-3/4 flex flex-col justify-center mx-auto"
          >
            {/* Title */}
            <div>
              <label htmlFor="title" className="uppercase font-bold text-xl">
                Título
              </label>
              <input
                id="title"
                type="text"
                placeholder="Ingrese el título"
                className="w-full mt-3 p-3 border rounded-xl placeholder-gray-600"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* URL Image */}
            <div className="mt-5">
              <label htmlFor="image" className="uppercase font-bold text-xl">
                URL de la imágen
              </label>
              <input
                id="image"
                type="text"
                placeholder="Ingrese la URL"
                className="w-full mt-3 p-3 border rounded-xl placeholder-gray-600"
                value={img_header}
                onChange={(e) => setImg_header(e.target.value)}
              />
            </div>

            {/* Author */}
            <div className="mt-5">
              <label htmlFor="autor" className="uppercase font-bold text-xl ">
                Autor de la noticia
              </label>
              <input
                id="autor"
                type="text"
                placeholder="Ingrese el nombre del autor"
                className="w-full mt-3 p-3 border rounded-xl placeholder-gray-600 capitalize"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            {/* Body */}
            <div className="mt-5">
              <label htmlFor="image" className="uppercase font-bold text-xl">
                Cuerpo de la noticia
              </label>
              <div className="py-5">
                <RichText setValue={setBody} value={body} />
              </div>

              {msg && <Alerta alerta={alerta} />}
            </div>

            <input
              type="submit"
              value={params.id ? "Actualizar noticia" : "Publicar noticia"}
              className={` text-white text-xl px-5 py-2 block mx-auto mt-5 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-500 ${
                !button ? "hidden" : "bg-black border-2 border-black"
              }`}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
