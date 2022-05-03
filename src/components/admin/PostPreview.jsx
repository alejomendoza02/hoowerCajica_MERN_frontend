import { useNavigate } from "react-router-dom";
import clienteAxios from "../../config/clientAxios";

const PostPreview = ({ url, title, date, description, id, author, setNoticias, noticias }) => {
  
  const deletePost = async () =>{
    if(confirm("¿Está seguro de eliminar esta noticia?")){
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios.delete(`/post/private/${id}`, config);

        // Synchronize the state
        const noticiasUpdated = noticias.filter(
          (noticiaState) => noticiaState._id !== id
        );
        setNoticias(noticiasUpdated);
      } catch (error) {
        
      }
    }
  }

  const navigate = useNavigate();
  
  return (
    <div className="h-[400px] w-full hover:bg-gray-100 transition-all duration-500 border-2 mb-2 rounded-2xl md:h-[200px] md:flex">
      {/* Image */}
      <div className="h-1/2 w-full md:h-full md:w-1/4">
        <img
          src={url}
          alt="Imágen preview de la noticia"
          className="w-full h-full object-cover md:rounded"
        />
      </div>
      {/* Textual information */}
      <div className="h-1/4 px-5 md:h-full md:w-full md:flex md:flex-col md:justify-center md:gap-3">
        {/* Title */}
        <div className="h-4/5 w-full pt-5 md:h-auto md:pt-0">
          <p className="text-xl font-semibold">
            {title}
          </p>
        </div>
        {/* Date */}
        <div className="h-1/5 md:flex gap-3">
          <p className="capitalize">Autor: {author}</p>
          <p>Publicado el {date.slice(0,10)}</p>
        </div>
        {/* Description */}
        <div className="hidden w-full md:block">
          <p className="text-md">
            {description.replace(/(<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;)/gi, " ").split(' ').slice(0,30).join(' ')} ...
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="h-1/4 flex w-full justify-evenly items-end pb-5 md:h-full md:w-[200px] md:flex md:flex-col md:pr-5 md:pb-0">
        <button onClick={() => navigate(`/admin/post/${id}`)} className="bg-secondary px-5 py-1 text-white font-semibold text-xl rounded-lg hover:bg-primary transition-all md:px-8">
          Editar
        </button>
        <button onClick={deletePost} className="bg-red-500 px-5 py-1 text-white font-semibold text-xl rounded-lg hover:bg-red-700 transition-all">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PostPreview;
