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
