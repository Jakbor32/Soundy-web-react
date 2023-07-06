import React from 'react'
import Button from './Button'
import { Spotify } from 'react-spotify-embed'

const MusicSection = () => {
  return (
    <section>
    <div className="py-20 container mx-auto md:px-20  px-5">
      <div className="flex flex-col items-center gap-8">
        <h2 className=" text-center font-epilogue text-5xl uppercase text-white">
        Immerse Yourself in Our Music
        </h2>
        <div className="h-1 w-48 bg-redBarClr"></div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-around gap-5 py-20">
        <div className="flex flex-col w-full px-3 sm:px-10 xl:px-0 xl:w-1/2 gap-6">
          <div className='rounded-xl shadow-md shadow-white/20 bg-redBarClr'>
          <Spotify className='rotate-2 hover:rotate-0 duration-200' wide link="https://open.spotify.com/track/4hJ9GlqWQKgEU24yUbqDZB?si=49595976d03b4aa8"/>
          </div>
          <div className='rounded-xl shadow-md shadow-white/20 bg-redBarClr'>
          <Spotify className='rotate-2 hover:rotate-0 duration-200' wide link="https://open.spotify.com/track/2Bhv2dpgjAfpJejQltrlOJ?si=4c6e80965b6a44e1"/>
          </div>
          <div className='rounded-xl shadow-md shadow-white/20 bg-redBarClr'>
          <Spotify className='rotate-2 hover:rotate-0 duration-200' wide link="https://open.spotify.com/track/4mljaiRBQOvFCjcnzxlQ3F?si=d85d357f72b444ae"/>
          </div>
          <div className='rounded-xl shadow-md shadow-white/20 bg-redBarClr'>
          <Spotify className='rotate-2 hover:rotate-0 duration-200' wide link="https://open.spotify.com/track/0vyzWCQaPRwaJPbRv9SB1q?si=20fcd0c799914f97"/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 translate-y-8">
       <Spotify  link="https://open.spotify.com/track/2RdwrJkx3swffe5ylzvfKR?si=4a50e8fa57e94f9e"/>
       <Spotify  link="https://open.spotify.com/track/6JRKroQWBkGk44TV4HbSl5?si=2c689ab481354f86"/>
        </div>
    
      </div>
      <div className="flex w-full justify-center uppercase tracking-widest">
        <Button>Listen Further</Button>
      </div>
    </div>
  </section>
  )
}

export default MusicSection