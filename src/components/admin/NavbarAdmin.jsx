import Logo from "../../img/logo_black_horizontal_nobg.png";
import useAuth from "../../hooks/useAuth";


const NavbarAdmin = () => {
  // ------------------- useAuth

  const {cerrarSesionAuth} = useAuth(); 
  return (
    //   Header
    <div className="sticky z-10 top-0 left-0 w-full md:h-16 h-11 bg-white mx-auto">
      <div className="h-full max-w-screen-xl flex items-center bg-white px-5 justify-between mx-auto">
        <div className="h-full md:h-3/4">
          <img src={Logo} alt="Logo Hoower Cajicá" className="h-full object-contain" />
        </div>
        <button onClick={cerrarSesionAuth} className="bg-black border-2 border-black text-white px-3 py-1 rounded-3xl shadow font-bold hover:bg-white hover:text-black transition-all duration-500">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
