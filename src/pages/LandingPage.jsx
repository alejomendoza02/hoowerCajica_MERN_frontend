import React from "react";
import Slideshow from "../components/Slideshow";
import BiografiaL from "../components/BiografiaL";
import FormacionL from "../components/FormacionL";
import ReflexionesL from "../components/ReflexionesL";
import NoticiasL from "../components/NoticiasL";
import { Helmet } from "react-helmet";
const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>{`Inicio | Hoower Cajicá`}</title>
        <meta
          name="description"
          content="El sitio web oficial de Hoower Cajicá. Soy colombiano, resido en Estados Unidos, psicólogo, sacerdote, intento desde las redes sociales hacer un mundo mejor, a veces digo las cosas un poco crudas, me gusta reírme de casi todo. Este espacio es de ustedes, aquí estoy para servir, pa’las que sea."
        />
        <meta
          name="keywords"
          content="Hoower Cajica, Fundación Renacer, Renacer Foundation, Religión, Sacerdorte"
        />
        <meta property="fb:app_id" content="123456789" />
        <meta
          property="og:image"
          content="https://yt3.ggpht.com/ytc/AKedOLQhleKl-s_qkN9MUER2fgwCjhG07jwFDEtLdm4R=s900-c-k-c0x00ffffff-no-rj"
        ></meta>
        <meta
          property="og:description"
          content="El sitio web oficial de Hoower Cajicá. Soy colombiano, resido en Estados Unidos, psicólogo, sacerdote, intento desde las redes sociales hacer un mundo mejor, a veces digo las cosas un poco crudas, me gusta reírme de casi todo. Este espacio es de ustedes, aquí estoy para servir, pa’las que sea."
        />
        <meta property="og:url" content="https://www.hoowercajica.com"></meta>
        <meta property="og:type" content="website"></meta>
      </Helmet>
      <div className="h-full w-full">
        <Slideshow />
        <BiografiaL />
        <ReflexionesL />
        <NoticiasL />
        <FormacionL />
      </div>
    </>
  );
};

export default LandingPage;
