import React from 'react';
import {spotifyLogo, youtubeLogo, tiktokLogo, appleMusicLogo} from '../lib/Constants'

const BrandSlider = () => {
  return (
    <section className='bg-brandBarClr relative shadow-md shadow-black'>
        <div class="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white opacity-5"></div>
        <div class="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white opacity-5"></div>
    <div className='container mx-auto  flex lg:justify-between md:px-20 px-5 py-5 flex-row flex-wrap items-center justify-center gap-6 lg:gap-0'>
        <img className='xl:h-16  md:h-12 h-8' src={spotifyLogo} alt="Spotify Logo" />
        <img className='xl:h-16  md:h-12 h-8' src={youtubeLogo} alt="YouTube Logo" />
        <img className='xl:h-16  md:h-12 h-8' src={tiktokLogo} alt="TikTok Logo" />
        <img className='xl:h-16  md:h-12 h-8'  src={appleMusicLogo} alt="Apple Music Logo" />
    </div>
    </section>
  )
}

export default BrandSlider