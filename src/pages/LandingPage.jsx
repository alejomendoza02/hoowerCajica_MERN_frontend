import React from "react";
import Slideshow from "../components/Slideshow";
import BiografiaL from "../components/BiografiaL";
import FormacionL from "../components/FormacionL";
import ReflexionesL from "../components/ReflexionesL";
import NoticiasL from "../components/NoticiasL";
const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <Slideshow />
      <BiografiaL />
      <ReflexionesL />
      <NoticiasL />
      <FormacionL />
    </div>
  );
};

export default LandingPage;
