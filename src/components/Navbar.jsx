import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo_black_horizontal.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  // ------------------- HOOKS --------------------

  // useState -------------------
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // useRef

  let dropRef = useRef();
  let menuRef = useRef();
  let navRef = useRef();

  // useLocation

  const { pathname } = useLocation();

  // Close dropdown

  useEffect(() => {
    let handler = (event) => {
      if (!dropRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // Close menu

  useEffect(() => {
    let handler = (event) => {
      if (
        !menuRef.current.contains(event.target) &&
        !dropRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // Functions

  // On scroll down change the logo height

  const changeNav = () => {
    const pixels = window.pageYOffset;

    if (pixels < 200) {
      setLogo(pixels);
      setNavbar(false);
    } else if (pixels > logo) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    setLogo(pixels);
  };

  window.addEventListener("scroll", changeNav);

  // Objects

  const items = [
    {
      name: "inicio",
      link: "/",
    },
    {
      name: "noticias",
      link: "/noticias",
    },
    {
      name: "reflexiones",
      link: "/reflexiones",
    },
    {
      name: "biografia",
      link: "/biografia",
    },

    {
      name: "renacer",
      link: "/renacer",
    },
  ];

  return (
    // Navbar
    <nav
      ref={navRef}
      className={`w-full bg-white h-11 sticky top-0 left-0 flex justify-center items-center md:h-16 z-10 ${
        navbar ? "md:opacity-0" : "md:opacity-100"
      } transition-all duration-300`}
    >
      {/* Container items */}
      <div className="w-full bg-white h-11 flex justify-between items-center md:h-16 max-w-screen-lg">
        {/* Container logo */}
        <Link
          to="/"
          className={`md:bg-white md:flex md:items-center md:justify-center md:h-[150px] md:w-[150px] md:self-start ${
            logo === 0 ? "" : "md:h-[60px] md:w-[150px]"
          } transition-all ease-in duration-300`}
        >
          <img src={Logo} alt="Logo Hoower Cajicá" className="md:h-auto h-10" />
        </Link>
        {/* Container mobile-menu */}
        <div
          ref={menuRef}
          onClick={() => setOpen(!open)}
          className="h-10 w-10 flex items-center text-3xl md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        {/* List for links */}
        <ul
          className={`absolute w-full ${
            open ? "top-11 opacity-100" : "top-[-300px] opacity-0 "
          } transition-all duration-1000  z-[-1] md:static md:flex md:w-auto md:z-auto md:opacity-100`}
        >
          {/* Items */}
          {items.map((item) => (
            <li
              key={item.link}
              className="bg-white uppercase font-semibold text-center p-4 text-lg text-self-gray ease-in md:px-2 lg:px-5 md:py-0 md:text-[12px] xl:text-[18px] 2xl:text-[20px]"
            >
              <Link
                className={`hover:text-secondary transition-colors duration-200 md:hover:border-b-2  md:hover:border-secondary ${
                  pathname === item.link ? "text-secondary" : "text-gray-500"
                }`}
                to={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Dropdown*/}
          <li
            className={`bg-white text-center p-4 text-lg text-self-gray  ease-in md:px-5 md:py-0 relative md:text-[12px] xl:text-[18px] `}
          >
            <button
              ref={dropRef}
              onClick={() => setDropdown(!dropdown)}
              className={`uppercase font-semibold hover:text-secondary transition-colors duration-20 ${
                dropdown ? "text-secondary" : "text-gray-500"
              }`}
            >
              Formación
            </button>
            {/* Dropdown list */}

            <div
              className={`md:absolute bg-white rounded-xl right-0 shadow-xl mt-6 lg:w-48 flex ${
                dropdown ? "opacity-100" : "opacity-0 scale-y-0 scale-x-0 h-0"
              } transition-all duration-500`}
            >
              <ul className="text-left space-y-2 p-3 w-full">
                <li>
                  <a
                    className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    href="https://www.youtube.com/watch?v=eo_vwauTtyY&list=PL_lm6ARbIBj86lrYM7GgoFyxYhLN5855l&ab_channel=PadreHoowerCajic%C3%A1"
                    target="_blank"
                  >
                    Pareja
                  </a>
                </li>
                <li>
                  <a
                    className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    href="https://www.youtube.com/watch?v=xQ6R8ffuKlo&list=PL_lm6ARbIBj8fD9iabDEE2acGqZtU5lpZ&ab_channel=PadreHoowerCajic%C3%A1"
                    target="_blank"
                  >
                    Religión
                  </a>
                </li>
                <li>
                  <a
                    className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    href="https://www.youtube.com/c/PadreHoowerCajic%C3%A1"
                    target="_blank"
                  >
                    Salud Mental
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
