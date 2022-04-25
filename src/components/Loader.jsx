import React from "react";
import "./Loader.css"

const Loader = () => {
  return (
    <div className="lds-ring h-full w-full flex justify-center items-center">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
