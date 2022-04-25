import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clientAxios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  const navigate = useNavigate();


  useEffect(() => {
    // Ver si está en localstorage

    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
          setCargando(false)
        return;
      }

      const config = {
        headers: {
          "Content.type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clienteAxios("/admin/profile", config);
        setAuth(data);
      } catch (error) {
          setAuth({})
      } 
      setCargando(false);
    };
    autenticarUsuario();
  }, []);

  const cerrarSesionAuth = () =>{
    localStorage.removeItem('token');
    setAuth({})
    navigate('/admin')
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        cerrarSesionAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
