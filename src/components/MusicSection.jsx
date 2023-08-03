import React from "react"
import Button from "./Button"
import { Spotify } from "react-spotify-embed";
import { musicData, musicSectionTitle } from "../lib/Constants";;

const MusicSection = () => {
  return (
    <section>
    <div className="container px-5 mx-auto py-14 md:px-20">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl text-center text-white uppercase md:text-4xl font-epilogue">
        {musicSectionTitle}
        </h2>
        <div className="w-48 h-1 bg-redBarClr"></div>
      </div>
      <div className="flex flex-col items-center justify-around gap-5 py-20 xl:flex-row">
        <div className="flex flex-col w-full gap-6 px-3 sm:px-10 xl:px-0 xl:w-1/2">
    
          {musicData.slice(0, -2).map((trackLink) => (
            <div
              key={trackLink}
              className="shadow-md rounded-xl shadow-white/20 bg-redBarClr"
            >
              <Spotify
                className="duration-200 rotate-2 hover:rotate-0"
                wide
                link={trackLink}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 translate-y-8 md:flex-row">
        {musicData.slice(4).map((trackLink) => (
            <Spotify key={trackLink} link={trackLink} />
          ))}
        </div>
    
      </div>
      <div className="flex justify-center w-full tracking-widest uppercase">
        <Button>Listen Further</Button>
      </div>
    </div>
  </section>
  )
}

export default MusicSection