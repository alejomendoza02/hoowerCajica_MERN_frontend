import { useState, useEffect } from "react";
import Slide1 from "../img/slider_1.png";
import Slide2 from "../img/slider_2.png";
import Slide3 from "../img/slider_3.png";
import Slide4 from "../img/slider_4.png";
import Header1 from "../img/header_1.png";
import Loader from "./Loader";

const Slideshow = () => {
  // ------------------- HOOKS -----------------

  //------------------- useState
  const [slide, setSlide] = useState({});

  // ------------------- FUNCTIONS -------------------

  const changeSlide1 = () => {
    setSlide({
      id: 0,
      img: Slide1,
      img_w: "w-1/2 w-4/5",
      transitions: "opacity-0 bottom-[-300px]",
      color: "bg-third",
      color_circle1: "bg-purple_circle1",
      color_circle2: "bg-purple_circle2",
      position1: "bottom-[200px] left-10 scale-[1.1]",
      position2: "bottom-[250px] left-40 scale-[0.8]",
      header: Header1,
      text: "Pudiendo estar bien, ¿por qué no lo estamos?",
    });

    setTimeout(() => {
      setSlide({
        id: 0,
        img: Slide1,
        img_w: "w-1/2 w-4/5",
        transitions: "opacity-100 transition-all duration-[2000ms] bottom-0",
        color: "bg-third",
        color_circle1: "bg-purple_circle1",
        color_circle2: "bg-purple_circle2",
        position1: "bottom-[200px] left-10 scale-[1.1]",
        position2: "bottom-[250px] left-40 scale-[0.8]",
        header: Header1,
        text: "Pudiendo estar bien, ¿por qué no lo estamos?",
      });
    }, 300);
  };

  const changeSlide2 = () => {
    setSlide({
      id: 1,
      img: Slide2,
      img_w: "w-1/2 w-5/6",
      transitions: "opacity-0 bottom-[-300px]",
      color: "bg-pink_slider",
      color_circle1: "bg-pink_circle1",
      color_circle2: "bg-pink_circle2",
      position1: "bottom-[60%] left-10 scale-[1]",
      position2: "bottom-[10%] left-[90%] scale-[1.1]",
      header: Header1,
      text: "Bendiciones, hoy, aquí, ahora y siempre",
    });

    setTimeout(() => {
      setSlide({
        id: 1,
        img: Slide2,
        img_w: "w-2/3 w-full",
        transitions: "opacity-100 transition-all duration-[2000ms] bottom-0",
        color: "bg-pink_slider",
        color_circle1: "bg-pink_circle1",
        color_circle2: "bg-pink_circle2",
        position1: "bottom-[60%] left-10 scale-[1]",
        position2: "bottom-[10%] left-[90%] scale-[1.1]",
        header: Header1,
        text: "Bendiciones, hoy, aquí, ahora y siempre",
      });
    }, 300);
  };

  const changeSlide3 = () => {
    setSlide({
      id: 2,
      img: Slide3,
      img_w: "w-1/2 w-2/3",
      transitions: "opacity-0 bottom-[-300px]",
      color: "bg-secondary",
      color_circle1: "bg-red_circle1",
      color_circle2: "bg-red_circle2",
      position1: "bottom-[60%] left-[70%] scale-[1.3]",
      position2: "bottom-[65%] left-[72%]",
      header: Header1,
      text: "El que se casa compra casa y su costalito para la plaza",
    });

    setTimeout(() => {
      setSlide({
        id: 2,
        img: Slide3,
        img_w: "w-1/2 w-2/3",
        transitions: "opacity-100 transition-all duration-[2000ms] bottom-0",
        color: "bg-secondary",
        color_circle1: "bg-red_circle1",
        color_circle2: "bg-red_circle2",
        position1: "bottom-[60%] left-[70%] scale-[1.3]",
        position2: "bottom-[65%] left-[72%]",
        header: Header1,
        text: "El que se casa compra casa y su costalito para la plaza",
      });
    }, 300);
  };

  const changeSlide4 = () => {
    setSlide({
      id: 3,
      img: Slide4,
      img_w: "w-1/2 w-2/3",
      transitions: "opacity-0 bottom-[-300px]",
      color: "bg-green_slider",
      color_circle1: "bg-red_circle1",
      color_circle2: "bg-red_circle2",
      position1: "bottom-[10%] left-[5%] scale-[1.2]",
      position2: "bottom-[65%] left-[72%] scale-[0.7]",
      header: Header1,
      text: "Llegar lejos no es fácil, pero tampoco imposible",
    });

    setTimeout(() => {
      setSlide({
        id: 3,
        img: Slide4,
        img_w: "w-1/2 w-2/3",
        transitions: "opacity-100 transition-all duration-[2000ms] bottom-0",
        color: "bg-green_slider",
        color_circle1: "bg-red_circle1",
        color_circle2: "bg-red_circle2",
        position1: "bottom-[10%] left-[5%] scale-[1.2]",
        position2: "bottom-[65%] left-[72%] scale-[0.7]",
        header: Header1,
        text: "Llegar lejos no es fácil, pero tampoco imposible",
      });
    }, 300);
  };

  // ------------------ useEffect

  useEffect(() => {
    // Define the initial slide

    // Before Animation

    setSlide({
      id: 0,
      img: Slide1,
      img_w: "w-1/2 w-4/5",
      transitions: "opacity-0 bottom-[-300px]",
      color: "bg-third",
      color_circle1: "bg-purple_circle1",
      color_circle2: "bg-purple_circle2",
      position1: "bottom-[-200px] left-[-100px] scale-[1.1] opacity-0",
      position2: "bottom-[-200px] left-[-100px] scale-[0.8] opacity-0",
      header: Header1,
      text: "Pudiendo estar bien, ¿por qué no lo estamos?",
    });

    // After Animation

    setTimeout(() => {
      setSlide({
        id: 0,
        img: Slide1,
        img_w: "w-1/2 w-4/5",
        transitions: "opacity-100 transition-all duration-[2000ms] bottom-0",
        color: "bg-third",
        color_circle1: "bg-purple_circle1",
        color_circle2: "bg-purple_circle2",
        position1: "bottom-[200px] left-10 scale-[1.1] opacity-100",
        position2: "bottom-[250px] left-40 scale-[0.8] opacity-100",
        header: Header1,
        text: "Pudiendo estar bien, ¿por qué no lo estamos?",
      });
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide.id === 0) {
        changeSlide2();
      } else if (slide.id === 1) {
        changeSlide3();
      } else if (slide.id === 2) {
        changeSlide4();
      } else {
        changeSlide1();
      }
    }, 10000);
    return () => clearInterval(interval)
  }, [slide]);

  return (
    <header className="h-[500px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full overflow-hidden">
      {/* Slider */}
      {slide.img ? (
        <div
          className={`w-full h-full relative ${slide.color} transition-all duration-[2000ms]`}
        >
          <div className="h-1/4 absolute w-full bg-gradient-to-b from-black/50 "></div>
          <div className="relative h-full max-w-screen-lg mx-auto">
            {/* Dots header */}
            {/* <img
              src={slide.header}
              alt={`${slide.header}`}
              className="absolute bottom-0 md:right-0 md:top-[200px] md:w-1/2 transition-all"
            /> */}
            {/* Circle */}
            <div
              className={`absolute w-[200px] h-[200px]  ${slide.color_circle1} rounded-full ${slide.position1}  transition-all duration-[2000ms]`}
            />
            <div
              className={`absolute w-[200px] h-[200px]  ${slide.color_circle2} rounded-full ${slide.position2} transition-all duration-[2000ms]`}
            />
            {/* Main image */}
            <img
              src={slide.img}
              alt={`${slide.img}`}
              className={` absolute z-4 ml-auto mr-auto left-0 right-0 text-center md:left-0 md:${slide.img_w} ${slide.transitions} md:ml-0 md:mr-0`}
            />
            {/* Texto */}
            <div className="w-full h-full absolute border-none">
              <p className="w-[300px] font-merri h-full text-white text-3xl absolute ml-auto mr-auto right-0 left-0 text-center pt-10 md:text-5xl md:w-[500px] md:mr-10 md:pt-[150px] lg:pt-[200px] xl:pt-[250px] 2xl:pt-[300px]">
                {slide.text}
              </p>
            </div>
          </div>
          {/* Controls */}
          <div className="absolute bottom-5 flex justify-center w-full">
            <button
              onClick={changeSlide1}
              className={`${
                slide.id === 0 ? "bg-white" : "bg-gray-400/50"
              } md:hover:bg-white border-black rounded-full px-[6px] py-[6px] mr-4 transition-colors md:mr-2 `}
            />
            <button
              onClick={changeSlide2}
              className={`${
                slide.id === 1 ? "bg-white" : "bg-gray-400/50"
              } md:hover:bg-white border-black rounded-full px-[6px] py-[6px] mr-4 transition-colors md:mr-2`}
            />
            <button
              onClick={changeSlide3}
              className={`${
                slide.id === 2 ? "bg-white" : "bg-gray-400/50"
              } md:hover:bg-white border-black rounded-full px-[6px] py-[6px] mr-4 transition-colors md:mr-2`}
            />
            <button
              onClick={changeSlide4}
              className={`${
                slide.id === 3 ? "bg-white" : "bg-gray-400/50"
              } md:hover:bg-white border-black rounded-full px-[6px] py-[6px] mr-4 transition-colors md:mr-2`}
            />
          </div>
        </div>
      ) : (
        <Loader/>
      )}
    </header>
  );
};

export default Slideshow;
