import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import clienteAxios from "../config/clientAxios";
import { Helmet } from "react-helmet";

import Alerta from "../components/generals/Alerta";
import Logo from "../img/logo_black_horizontal_nobg.png";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const LoginPage = () => {
  // ------------------- HOOKS -------------------

  // ------------------- useState
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  // ------------------- useNavigate

  const navigate = useNavigate();

  // ------------------- useAuth

  const { setAuth } = useAuth();

  // ------------------- getToken

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/admin/home");
    }
  }, []);

  // ------------------- Functions -------------------

  // Check the login
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([username, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      // Check the BD
      const { data } = await clienteAxios.post("/admin/login", {
        username,
        password,
      });
      setAlerta({});
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/admin/home");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return token ? (
    <div className="w-full h-screen">
      <Loader />
    </div>
  ) : (
    <>
      <Helmet>
        <meta name="google" content="nositelinkssearchbox" />
      </Helmet>
      <main className="w-full h-screen bg-gray-100">
        {/* Back to home */}
        <div className="pt-10 md:pt-0">
          <Link to="/">
            <button className="block mx-auto md:absolute md:m-5 border-2 border-black px-3 py-2 bg-black rounded-xl shadow-xl text-white font-semibold hover:bg-white hover:text-black transition-all">
              Ir al inicio
            </button>
          </Link>
        </div>

        {/* Container */}
        <div className="max-w-screen-lg h-full mx-auto ">
          {/* Image */}
          <div className="h-1/5 w-[200px] mx-auto flex items-center">
            <img
              src={Logo}
              alt="Logo Hoower Cajicá"
              className="w-full object-contain"
            />
          </div>
          {/* Form */}
          <div className="flex h-auto justify-center ">
            <div className="h-3/4 w-[90%] bg-white rounded-2xl shadow-xl p-10 md:w-[50%]">
              <form
                onSubmit={handleSubmit}
                className="h-full flex flex-col justify-center"
              >
                {msg && <Alerta alerta={alerta} />}

                <div className="">
                  <label
                    htmlFor="username"
                    className="uppercase font-bold text-xl"
                  >
                    Usuario
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Ingrese su usuario"
                    className="w-full mt-3 p-3 border rounded-xl placeholder-gray-600"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mt-10">
                  <label
                    htmlFor="password"
                    className="uppercase font-bold text-xl "
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="w-full mt-3 p-3 border rounded-xl placeholder-gray-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Iniciar sesión"
                  className="bg-black border-2 border-black text-white text-xl px-5 py-2 block mx-auto mt-5 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-500"
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
