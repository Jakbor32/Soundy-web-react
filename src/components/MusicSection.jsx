import React from "react"
import MusicPlayer from "./MusicPlayer";
import { musicData, musicSectionTitle } from "../lib/Constants";;

const MusicSection = () => {
  return (
    <section>
    <div className="container  mx-auto py-5 md:px-20">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl text-center text-white uppercase md:text-4xl font-epilogue">
        {musicSectionTitle}
        </h2>
        <div className="w-48 h-1 bg-redBarClr"></div>
        <div className="container px-5 mx-auto py-5 md:px-20">
        <MusicPlayer musicData={musicData} />
        </div>
    </div>
    </div>
  </section>
  )
}

export default MusicSection