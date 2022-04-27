import { useContext } from "react";
import ReflexionesContext from "../context/ReflexionesProvider";

const useReflexiones = () => {
  return useContext(ReflexionesContext);
};

export default useReflexiones;
