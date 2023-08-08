import React, { useState, useRef, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  AiOutlineStepBackward,
  AiOutlineStepForward,
  AiOutlinePlayCircle,
  AiOutlinePause,
} from "react-icons/ai";

const MusicPlayer = ({ musicData }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

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
        <div className="z-10 relative text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            {currentTrackData.title}
          </h2>
          <p className="text-gray-300 mb-1">{currentTrackData.artist}</p>
        </div>
        <div className="flex items-center justify-center mb-2 z-10 relative">
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
        <div className="flex items-center z-10 relative">
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
