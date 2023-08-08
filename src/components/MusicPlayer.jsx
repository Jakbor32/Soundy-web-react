import React, { useState, useRef, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  AiOutlineStepBackward,
  AiOutlineStepForward,
  AiOutlinePlayCircle,
  AiOutlinePause,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { toastTexts } from "../lib/Constants";

const MusicPlayer = ({ musicData }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const ToastWithLink = ({ index }) => (
    <div>
      <p>Song: {toastTexts[index].songTitle}</p>
      <p>{toastTexts[index].musicInfo}</p>
      <p>
        <Link to={toastTexts[index].freeDownloadLink}>
          Free Download/Stream: {toastTexts[index].freeDownloadLink}
        </Link>
      </p>
      <p>
        <Link to={toastTexts[index].watchLink}>
          Watch: {toastTexts[index].watchLink}
        </Link>
      </p>
    </div>
  );

  const notify = (index) => {
    toast(<ToastWithLink index={index} />, {
      duration: 3000,
      position: "bottom-right",
      style: {
        background: "#363636",
        color: "#fff",
        fontSize: ".7rem",
      },
    });
  };

  // Update progress of the track

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateProgress = () => {
      const { currentTime, duration } = audioElement;
      setProgress((currentTime / duration) * 100);
    };

    audioElement.addEventListener("timeupdate", updateProgress);

    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  // Handle track change

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTrackChange = () => {
      if (isPlaying) {
        audioElement.play();
      }
    };

    audioElement.addEventListener("ended", handleTrackChange);

    return () => {
      audioElement.removeEventListener("ended", handleTrackChange);
    };
  }, [currentTrack, isPlaying]);

  // Play/pause functionality

  const playPauseHandler = () => {
    const audioElement = audioRef.current;
    if (audioElement.paused) {
      audioElement.play();
      setIsPlaying(true);
    } else {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  // Skip to the next/prev track

  const skipNextHandler = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % musicData.length);
    setIsPlaying(false);
  };

  const skipPrevHandler = () => {
    setCurrentTrack(
      (prevTrack) => (prevTrack - 1 + musicData.length) % musicData.length
    );
    setIsPlaying(false);
  };

  const currentTrackData = musicData[currentTrack];

  return (
    <div className="relative max-w-md mx-auto p-4 bg-bgTicketClr rounded-lg shadow-md bg-opacity-80">
      <div
        className="h-56 bg-cover bg-center mb-4 rounded-lg shadow-md"
        style={{ backgroundImage: `url(${currentTrackData.imageUrl})` }}
      />
      <div className="relative grid gap-4">
        <div className=" relative text-center">
          <h2 className="text-3xl font-bold text-white mb-2 px-10">
            {currentTrackData.title}
          </h2>
          <p className="text-gray-300 mb-1">{currentTrackData.artist}</p>
        </div>
        <div>
          <AiOutlineInfoCircle
            onClick={() => notify(currentTrack)}
            className="absolute left-0  top-0 cursor-pointer text-white h-10 w-6"
          />
          <Toaster />
        </div>
        <div className="flex items-center justify-center mb-2  relative">
          <button onClick={skipPrevHandler} className="mr-2">
            <AiOutlineStepBackward className="h-10 w-10 text-white cursor-pointer" />
          </button>
          <button onClick={playPauseHandler}>
            {isPlaying ? (
              <AiOutlinePause className="h-10 w-10 text-white cursor-pointer" />
            ) : (
              <AiOutlinePlayCircle className="h-10 w-10 text-white cursor-pointer" />
            )}
          </button>
          <button onClick={skipNextHandler} className="ml-2">
            <AiOutlineStepForward className="h-10 w-10 text-white cursor-pointer" />
          </button>
        </div>
        <div className="flex items-center  relative">
          <Slider
            value={progress}
            onChange={(value) => {
              const audioElement = audioRef.current;
              const { duration } = audioElement;
              audioElement.currentTime = (value / 100) * duration;
            }}
          />
        </div>
      </div>
      <audio
        ref={audioRef}
        src={currentTrackData.audioUrl}
        className="w-full"
        controls={false}
      />
    </div>
  );
};

export default MusicPlayer;
