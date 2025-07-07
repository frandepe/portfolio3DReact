import { useState, useEffect, useMemo } from "react";
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
import { VideoFinal } from "./videoComponents/VideoFinal";
import { Hacking } from "./videoComponents/Hacking";

import { useMediaQuery } from "../../hooks/useMediaQuery";

const VideoComponent = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [movedLeft, setMovedLeft] = useState(false);
  const desktop = "(max-width: 600px)";
  const isDesktop = useMediaQuery(desktop);

  const memoizedFullstack = useMemo(() => <Fullstack />, []);
  const memoizedVideoFinal = useMemo(() => <VideoFinal />, []);

  // const goAbout = () => {
  //   window.location.href = "/about";
  // };

  const onProgress = (state: any) => {
    setCurrentTime(state.playedSeconds);
  };

  const videoOptions = {
    autoplay: true,
    controls: false,
    config: {
      vimeo: {
        playerOptions: {
          autoplay: true,
          controls: true,
          dnt: true,
          title: false,
          byline: false,
          portrait: false,
        },
      },
    },
  };

  useEffect(() => {
    if (!isDesktop && currentTime > 2 && !movedLeft) {
      setMovedLeft(true);
    }
  }, [currentTime, movedLeft, isDesktop]);

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
        {/* <button
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
        </button> */}
      </motion.div>
      <div className="flex">
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
            url="https://vimeo.com/1058192971"
            playing={true}
            width={isDesktop ? "100%" : "640px"}
            onProgress={onProgress}
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
            {currentTime > 44 && currentTime < 55 && memoizedFullstack}
            {currentTime > 60 && currentTime < 63 && <Hacking />}
            {currentTime > 68 && currentTime < 74 && <Example3D />}
            {currentTime > 77 && memoizedVideoFinal}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
