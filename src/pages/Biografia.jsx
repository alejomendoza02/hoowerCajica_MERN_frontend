import Header from "../components/generals/Header";
import BiografiaText from "../components/biografia/BiografiaText";
import ImageHeader from "../img/biografia/img4.png";

const Biografia = () => {
  return (
    <div className="h-full w-full">
      <Header bg="bg-secondary" reverse={true} img={ImageHeader}> Biografía </Header>
      <BiografiaText />
    </div>
  );
};

export default Biografia;
