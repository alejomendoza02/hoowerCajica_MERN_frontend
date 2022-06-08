import Header from "../components/generals/Header";
import BiografiaText from "../components/biografia/BiografiaText";
import ImageHeader from "../img/biografia/img4.png";
import MetaTags from 'react-meta-tags';

const Biografia = () => {
  return (
    <>
      <MetaTags>
        <title>{`Biografía | Hoower Cajicá`}</title>
        <meta
          name="description"
          content="Biografía de Hoower Cajicá. Soy colombiano, resido en Estados Unidos, psicólogo, sacerdote, intento desde las redes sociales hacer un mundo mejor, a veces digo las cosas un poco crudas, me gusta reírme de casi todo."
        />
        <meta
          name="keywords"
          content="Hoower Cajica, Biografia"
        />
        <meta property="fb:app_id" content="123456789" />
        <meta
          property="og:image"
          content="https://yt3.ggpht.com/ytc/AKedOLQhleKl-s_qkN9MUER2fgwCjhG07jwFDEtLdm4R=s900-c-k-c0x00ffffff-no-rj"
        ></meta>
        <meta property="og:url" content="https://www.hoowercajica.com/biografia"></meta>
        <meta property="og:type" content="website"></meta>
      </MetaTags>
      <div className="h-full w-full">
        <Header bg="bg-secondary" reverse={true} img={ImageHeader}>
          {" "}
          Biografía{" "}
        </Header>
        <BiografiaText />
      </div>
    </>
  );
};

export default Biografia;
