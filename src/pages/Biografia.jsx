import Header from "../components/generals/Header";
import BiografiaText from "../components/biografia/BiografiaText";
import ImageHeader from "../img/biografia/img4.png";
import { Helmet } from "react-helmet";

const Biografia = () => {
  return (
    <>
      <Helmet>
        <title>{`Biografía | Hoower Cajicá`}</title>
      </Helmet>
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
