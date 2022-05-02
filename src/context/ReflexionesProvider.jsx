import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clientAxios";

const ReflexionesContext = createContext();
const ReflexionesProvider = ({ children }) => {
  const [reflexiones, setReflexiones] = useState([]);
  const [noticias, setNoticias] = useState([]);

  const getReflexiones = async () => {
    try {
      const { data } = await clienteAxios("/video");
      setReflexiones(data);
    } catch (error) {
      console.log(error);
    }
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
