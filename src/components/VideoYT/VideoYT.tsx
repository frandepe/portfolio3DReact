import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import Example3D from "../Example3D/Example3D";
import { Frontend } from "./videoComponents/Frontend";
import { Backend } from "./videoComponents/Backend";
import { ReactWordpress } from "./videoComponents/ReactWordpress";
import { Natura } from "./videoComponents/Natura";
import { NaturaCountries } from "./videoComponents/NaturaCountries";
import { Techs } from "./videoComponents/Techs";
import { MobAppWeb } from "./videoComponents/MobAppWeb";
import { Formacion } from "./videoComponents/Formacion";
import { Fullstack } from "./videoComponents/Fullstack";
import { Hacking } from "./videoComponents/Hacking";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { VideoFinal } from "./videoComponents/VideoFinal";

const VideoComponent = () => {
  const [currentTime, setCurrentTime] = useState(0); // Estado para almacenar el tiempo actual del video
  // const [intervalId, setIntervalId] = useState<number | null>(null); // Estado para almacenar el intervalo
  const [movedLeft, setMovedLeft] = useState(false); // Estado para saber si el div se movió a la izquierda
  const desktop = "(max-width: 600px)";
  const isDesktop = useMediaQuery(desktop);
  const goAbout = () => {
    window.location.href = "/about";
  };

  // const onEnded = () => {
  //   console.log("Video terminó");
  // };

  // const onReady = () => {
  //   console.log("Video is ready");
  // };

  const onProgress = (state: any) => {
    setCurrentTime(state.playedSeconds); // Estado con el tiempo actual del video
  };

  // const onPause = () => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //     setIntervalId(null);
  //   }
  // };

  // const onPlay = () => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //   }

  //   const newIntervalId = setInterval(() => {
  //     setCurrentTime((prevTime) => prevTime + 1);
  //   }, 1000); // Actualizar cada segundo
  //   setIntervalId(newIntervalId);
  // };

  const videoOptions = {
    autoplay: true, // Reproduce el video automáticamente
    controls: false, // Ocultar los controles
    // width: !isDesktop && "350px", // Ancho del video
    // height: "390px", // Alto del video
    config: {
      vimeo: {
        playerOptions: {
          autoplay: true, // Reproducción automática
          controls: true, // Ocultar controles poner en false
          dnt: true, // Evitar el seguimiento por parte de Vimeo
          title: false, // No mostrar el título
          byline: false, // No mostrar el nombre del autor
          portrait: false, // No mostrar la imagen de perfil del autor
        },
      },
    },
  };

  // Efecto para cambiar el estado movedLeft cuando el tiempo es mayor a 4 segundos
  useEffect(() => {
    if (!isDesktop && currentTime > 2 && !movedLeft) {
      setMovedLeft(true);
    }
  }, [currentTime, movedLeft]);

  return (
    <div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{
          y: 0,
          x: movedLeft ? -200 : 0,
        }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <button
          className="z-[99999999999] cursor-pointer text-white"
          onClick={goAbout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="p-0 max-w-max w-[40px] h-[40px]"
          >
            <title>Back to Jobs</title>
            <path d="M14.71 15.88 10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42Z"></path>
            <metadata>arrow, arrows, keyboard, left</metadata>
          </svg>
        </button>
      </motion.div>
      <div className="flex">
        {/* <StarsCanvas /> */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: 0,
            x: movedLeft ? -200 : 0,
          }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ReactPlayer
            url="https://vimeo.com/1058192971" // URL del video
            playing={true} // El video comenzará a reproducirse automáticamente
            // onReady={onReady}
            // onPause={onPause}
            // onPlay={onPlay}
            width={isDesktop ? "100%" : "640px"} // Hace que el video ocupe todo el ancho disponible
            // height="auto" // Ajusta la altura proporcionalmente
            onProgress={onProgress} // Actualiza el estado con el progreso del video
            // onEnded={onEnded}
            {...videoOptions}
          />
        </motion.div>
        {!isDesktop && (
          <motion.div>
            {currentTime > 3 && currentTime < 4 && <Frontend />}
            {currentTime > 5 && currentTime < 7 && <Backend />}
            {currentTime > 10 && currentTime < 13 && <ReactWordpress />}
            {currentTime > 15 && currentTime < 19 && <Natura />}
            {currentTime > 20 && currentTime < 27 && <NaturaCountries />}
            {currentTime > 28 && currentTime < 35 && <Techs />}
            {currentTime > 36 && currentTime < 40 && <MobAppWeb />}
            {currentTime > 41 && currentTime < 43 && <Formacion />}
            {currentTime > 44 && currentTime < 55 && <Fullstack />}
            {currentTime > 60 && currentTime < 63 && <Hacking />}
            {currentTime > 68 && currentTime < 74 && <Example3D />}
            {currentTime > 77 && <VideoFinal />}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
