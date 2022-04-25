import { useEffect, useState } from "react";
import PostPreview from "../components/admin/PostPreview";
import { Link, useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import clienteAxios from "../config/clientAxios";
import useAuth from "../hooks/useAuth";

const HomeAdmin = () => {
  // ------------------- HOOKS -------------------
  // ------------------- useState

  const [noticias, setNoticias] = useState([]);

  // ------------------- useNavigate

  const navigate = useNavigate();

  // ------------------- getTokenAuth

  const token = localStorage.getItem("token");

  const { auth } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  // Get the post in the BD

  useEffect(() => {
    const getPosts = async () => {
      try {
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/post/private", config);
        setNoticias(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, [auth]);

  return (
    token && (
      <>
        <main className="h-full w-full ">
          <NavbarAdmin />

          <div className="max-w-screen-xl h-full mx-auto">
            {/* Posts Section */}
            <Link
              to="/admin/post"
              className="fixed bottom-5 right-5 md:right-[50px] 2xl:right-[300px] text-[3em] hover:text-secondary transition-all duration-500"
            >
              <ion-icon name="add-circle"></ion-icon>
            </Link>
            <div className="w-full h-full p-5">
              <p className="text-2xl font-bold py-5">Todas las noticias</p>
            </div>
            {/* Here are the news */}
            <div className="bg-white h-[70vh] w-full  overflow-y-auto px-2">
              {/* News preview */}
              {noticias.map((noticia) => (
                <PostPreview key={noticia._id} url={noticia.img_header} title={noticia.title} date = {noticia.createdAt} description = {noticia.body} id = {noticia._id} setNoticias = {setNoticias} noticias={noticias}/>
              ))}
            </div>
          </div>
        </main>
      </>
    )
  );
};

export default HomeAdmin;
