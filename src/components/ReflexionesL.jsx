import { useState, useEffect } from "react";
import CardR from "./CardR";
import Loader from "./Loader";

const ReflexionesL = () => {
  const [reflexiones, setReflexiones] = useState([]);


  useEffect(() => {
    obtenerDatos();
  }, []);


  const obtenerDatos = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?channelId=UCLWdgr_6AJogMp4EmirXnQw&part=snippet,id&order=date&maxResults=20&key=${import.meta.env.VITE_KEY_YOUTUBE_API}`
    );
    const users = await data.json();
    const filerVideos = users.items.filter((video)=>video.snippet.title.toLowerCase().includes("laúdes"))
    setReflexiones(filerVideos.slice(0,4));
  };

  // const moveRight = () => {
  //   setMove(move + 1040);
  // };

  // const moveLeft = () => {
  //   if (move <= 0) {
  //     setMove(0);
  //   } else {
  //     setMove(move - 1040);
  //   }
  // };

  return (
    <section className="h-auto md:h-[550px] w-full  bg-gray-200 py-5 md:overflow-hidden">
      {/* Container */}
      {reflexiones.length > 0 ? (
        <div className="max-w-screen-lg h-auto mx-auto md:h-auto md:relative">
        <h2 className="text-4xl font-bold text-center pb-10 md:text-left">
          Reflexiones
        </h2>
        {/* Cards */}
        <div className="md:flex md:gap-5 md:w-full overflow-hidden">
          {reflexiones.map((reflexion, index) => (
            <CardR
              key={index}
              url={`https://www.youtube.com/watch?v=${reflexion.id.videoId}`}
              image={reflexion.snippet.thumbnails.high.url}
              index = {index}
            >
              {reflexion.snippet.title}
            </CardR>
          ))}
        </div>
        <button className="bg-black border-2 border-black px-10 py-2 text-white font-bold block mx-auto hover:bg-white hover:text-black transition-all duration-500 rounded-xl">
          Ver más
        </button>
        {/* Controls */}
        {/* Right */}
        {/* <button
          onClick={moveRight}
          className={`hidden lg:block text-4xl absolute right-[-60px] top-1/2 transition-all duration-500 hover:scale-[120%] ${
            move >= 1040 ? "opacity-0 hidden pointer-events-none" : "opacity-100"
          }`}
        >
          <ion-icon name="arrow-forward-circle"></ion-icon>
        </button> */}
        {/* Left */}
        {/* <button
          onClick={moveLeft}
          className={`hidden lg:block text-4xl absolute left-[-60px] top-1/2 transition-all duration-500 hover:scale-[120%] ${
            move <= 0 ? "opacity-0 hidden pointer-events-none" : "opacity-100"
          }`}
        >
          <ion-icon name="arrow-back-circle"></ion-icon>
        </button> */}
      </div>
      ) : (<Loader/>)}
      
    </section>
  );
};

export default ReflexionesL;
