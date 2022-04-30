import LogoF from "../img/logo_white_horizontal.png";

const Footer = () => {
  return (
    <footer className="w-full h-[500px] md:h-[400px] bg-primary">
      <div className="max-w-screen-lg h-full flex flex-col items-center md:flex-row md:justify-between md:mx-auto">
        {/* Logo */}
        <div className="w-full py-[70px] flex justify-center md:w-1/4">
          <img src={LogoF} alt="Logo Hoower Cajicá" className="w-1/2" />
        </div>
        {/* Social Media */}
        <div className="w-full flex flex-col justify-center items-center md:w-1/2">
          <p className="text-xl text-white w-[200px] text-center md:w-auto md:text-2xl">
            ¡Sígueme en mis redes sociales!
          </p>
          {/* Images social media */}
          <div className="flex w-full h-full justify-center py-10 gap-5">
            <a target='_blank' href='https://www.instagram.com/hoowercajica/' className="text-white text-6xl cursor-pointer md:text-4xl">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a target='_blank' href='https://www.facebook.com/hoowercajica' className="text-white text-6xl cursor-pointer md:text-4xl">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a target='_blank' href = 'https://www.youtube.com/c/PadreHoowerCajic%C3%A1' className="text-white text-6xl cursor-pointer md:text-4xl">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/hoowercajica/' className="text-white text-6xl cursor-pointer md:text-4xl">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div><p className="py-2 text-gray-400 bg-primary w-full text-center">Designed &amp; Powered by Alejandro Mendoza</p></div>
    </footer>
  );
};

export default Footer;
