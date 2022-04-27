import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clientAxios";

const ReflexionesContext = createContext();
const ReflexionesProvider = ({ children }) => {
  const [reflexiones, setReflexiones] = useState([]);
  const [noticias, setNoticias] = useState([]);

  const getReflexiones = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?channelId=UCLWdgr_6AJogMp4EmirXnQw&part=snippet,id&order=date&maxResults=20&key=${
        import.meta.env.VITE_KEY_YOUTUBE_API
      }`
    );
    const users = await data.json();
    const filerVideos = users.items.filter((video) =>
      video.snippet.title.toLowerCase().includes("laúdes")
    );
    setReflexiones(filerVideos);
  };

  const getNoticias = async () => {
    try {
      const { data } = await clienteAxios("/post/public");
      setNoticias(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReflexiones();
    getNoticias();
  }, []);

  return (
    <ReflexionesContext.Provider value={{ reflexiones, noticias }}>
      {children}
    </ReflexionesContext.Provider>
  );
};

export { ReflexionesProvider };
export default ReflexionesContext;
