import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";

import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLock,
  AiOutlineUnlock,
  AiOutlineShopping,
  AiOutlineYoutube,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlinePlus,
} from "react-icons/ai";
import SoundyLogo from "../assets/soundy-logo.svg";
import ImgCard1 from "../assets/festival.webp";
import ImgCard2 from "../assets/festival_2.webp";
import ImgCard3 from "../assets/festival_3.webp";
import ImgCard4 from "../assets/festival_4.webp";
import ImgCard5 from "../assets/festival_5.webp";

import spotifyLogo from "../assets/spotify-logo.svg";
import youtubeLogo from "../assets/youtube-logo.svg";
import tiktokLogo from "../assets/tiktok-logo.svg";
import appleMusicLogo from "../assets/apple-music-logo.svg";
import soundCloudLogo from "../assets/soundcloud-logo.svg";
import deezerLogo from "../assets/deezer-logo.svg";

import guitarHeroImg from "../assets/guitar-hero.webp";
import powerOfStringImg from "../assets/power-of-strings.webp";
import bluesJamImg from "../assets/blues-jam.webp";
import shreddingImg from "../assets/shredding.webp";
import stevieRayImg from "../assets/stevie-ray.webp";

import guitarImg from "../assets/guitar-soundy.png";

export const navLinks = [
  {
    id: "/",
    val: "Home",
  },
  {
    id: "/tour",
    val: "Tour",
  },
  {
    id: "/media",
    val: "Media",
  },
  {
    id: "/aboutus",
    val: "About us",
  },
  {
    id: "/store",
    val: "Store",
  },
];

export const socialLinks = [
  {
    id: "spotify",
    icon: <FaSpotify size={26} />,
    url: "#",
  },
  {
    id: "facebook",
    icon: <FaFacebook size={26} />,
    url: "#",
  },
  {
    id: "tiktok",
    icon: <FaTiktok size={26} />,
    url: "#",
  },
  {
    id: "instagram",
    icon: <FaInstagram size={26} />,
    url: "#",
  },
];

export const navTexts = {
  login: "Login",
  closeMenu: "Close menu",
};

export const links = {
  github: {
    id: "github",
    icon: <FaGithub size={24} opacity={0.5} />,
    url: "https://github.com/Jakbor32/Soundy-web-react",
  },
  store: {
    id: "store",
    text: "Visit our store",
    url: "/store",
  },
  newsletter: {
    id: "newsletter",
    text: "Join our newsletter",
    url: "#newsletter",
  },
};

export const icons = [
  {
    doubleLeftArrow: <AiOutlineDoubleLeft className="mr-2" />,
  },
  {
    lock: <AiOutlineLock fontSize={18} />,
  },

  {
    shoppingCart: <AiOutlineShopping />,
  },
  {
    bars: <FaBars size={20} />,
  },
  {
    doubleRightArrow: <AiOutlineDoubleRight className="ml-2" />,
  },
  {
    unlock: <AiOutlineUnlock fontSize={18} />,
  },
];
export const logo = [
  {
    desc: "Soundy",
    path: SoundyLogo,
  },
];

export const mainTitle = "Breaking boundaries with our music";
export const subTitle =
  "We transcend conventions, allowing us to create something completely new and unique. Join us and discover new dimensions of music!";

export const musicStats = {
  numFans: "4600",
  fansDescription: "Fans on social media platforms Instagram and TikTok",
  numConcerts: "65",
  concertsDescription:
    "Performed concerts with hundreds of listeners from all over the world",
};
// Footer
export const concertMessage =
  "Playing on stage, we feel how the energy connects us with the audience, we create a powerful bond, see you at the concerts!";
export const newsletterTitle = "Join our newsletter";
export const newsletterText =
  "Stay up to date with our newsletter - subscribe now!";
export const newsletterInputPlaceholder = "Enter your email address...";
export const submitButtonLabel = "Submit";
export const copyrightText = (
  <p className="font-light text-center">
    &copy; 2023 Borowy Jakub. All rights reserved.
  </p>
);
export const linksTitle = "Links";

export const footerLinks = [
  {
    id: "news",
    label: "News",
    url: "#",
  },
  {
    id: "music",
    label: "Music",
    url: "/media",
  },
  {
    id: "tour",
    label: "Tour",
    url: "/tour",
  },
  {
    id: "shop",
    label: "Shop",
    url: "/store",
  },
  {
    id: "contact",
    label: "Contact",
    url: "#contact",
  },
];

// Featured News

export const featuredNews = [
  {
    id: 0,
    image: ImgCard1,
    imageAlt: "festival-photo-1",
    dateNumber: "2023-04-03",
    date: "MONDAY, APRIL 3RD, 2023",
    title: "Soundy Surprises Fans with New Music at Local Festival",
    description:
      "During their set, Soundy debuted several new songs from their upcoming album, which had been kept under wraps until that moment. Fans were thrilled to hear the fresh material.",
  },
  {
    id: 1,
    image: ImgCard2,
    imageAlt: "festival-photo-2",
    dateNumber: "2023-07-05",
    date: "FRIDAY JULY 5TH, 2023",
    title: "Soundy Night: Energetic Sounds on Stage. Beats",
    description:
      "The crowd erupted with excitement as they immersed themselves in the fresh sounds and infectious rhythms. It was a night of sheer delight and a testament to Soundy's artistic evolution.",
  },
  {
    id: 2,
    image: ImgCard3,
    imageAlt: "festival-photo-3",
    dateNumber: "2023-08-10",
    date: "SATURDAY AUGUST 10TH, 2023",
    title: "Sonic Fusion: Soundy Live. Grooves",
    description:
      "The audience burst with anticipation as they surrendered to the captivating melodies. It became an evening of unadulterated joy and a testament to Soundy's creative growth.",
  },
  {
    id: 3,
    image: ImgCard4,
    imageAlt: "festival-photo-4",
    dateNumber: "2023-06-21",
    date: "WEDNESDAY, JUNE 21ST, 2023",
    title: "Soundy's Electrifying Performance Leaves Fans Begging for More",
    description:
      "During their mesmerizing set, Soundy surprised their devoted fans with a series of unreleased tracks from their highly anticipated album. The air crackled with excitement as the audience reveled in the fresh, invigorating melodies.",
  },
  {
    id: 4,
    image: ImgCard5,
    imageAlt: "festival-photo-5",
    dateNumber: "2023-09-17",
    date: "SUNDAY, SEPTEMBER 17TH, 2023",
    title: "Soundy's Enthralling Gig Sets the Night Alight",
    description:
      "The night sky lit up with fervor as Soundy took the stage, unleashing an electrifying showcase of their latest compositions. Attendees were swept away by the pulsating beats and infectious energy, witnessing Soundy's artistic prowess in full bloom.",
  },
];
// Music Section

export const musicSectionTitle = "Immerse Yourself in Our Music";

export const musicData = [
  {
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/Coopex%20-%20Over%20The%20Sun%20(Pt.%202)%20%5BNCS%20Release%5D.mp3?alt=media&token=10f1469d-864b-4fab-a8c5-531cf3f55602",
    imageUrl: guitarHeroImg,
    artist: "Jimmy Hendrix",
    title: "Guitar Hero",
  },
  {
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/Coopex%2C%20Afterfab%2C%20Heleen%20-%20EX%20%5BNCS%20Release%5D.mp3?alt=media&token=d85e6cf3-495c-47d5-8845-fc96f36189f2",
    imageUrl: powerOfStringImg,
    artist: "Slash",
    title: "The Power of Strings",
  },
  {
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/Coopex%2C%20EBEN%2C%20Shiah%20Maisel%20-%20Ruined%20My%20Life%20%5BNCS%20Release%5D.mp3?alt=media&token=6ffc7f4e-a874-438f-9035-af63bed39384",
    imageUrl: bluesJamImg,
    artist: "Eric Clapton",
    title: "Blues Jam",
  },
  {
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/Coopex%2C%20KHEMIS%20-%20If%20Looks%20Can%20Kill%20%5BNCS%20Release%5D.mp3?alt=media&token=c2b0c858-f978-4d26-9993-077ed88df308",
    imageUrl: shreddingImg,
    artist: "Eddie Van Halen",
    title: "Shredding in the Shadows",
  },
  {
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/Coopex%2C%20Nito-Onna%20%26%20DJ%20Frog%20-%20Whispered%20Promises%20%5BNCS%20Release%5D.mp3?alt=media&token=f878657a-0be7-4efc-bb54-1b3d777c0f42",
    imageUrl: stevieRayImg,
    artist: "Stevie Ray Vaughan",
    title: "Soulful Riffs",
  },
];

//  Brand Slider

export const brandLogos = [
  { src: spotifyLogo, alt: "Spotify Logo" },
  { src: youtubeLogo, alt: "YouTube Logo" },
  { src: tiktokLogo, alt: "TikTok Logo" },
  { src: appleMusicLogo, alt: "Apple Music Logo" },
  { src: soundCloudLogo, alt: "SoundCloud Logo" },
  { src: deezerLogo, alt: "Deezer Logo" },
];

// Tour Section

export const TourSectionTitle = "Check the latest venues we will be at";
export const tickets = [
  {
    date: "AUG 10 2023",
    subtitle: "Warsaw, Poland",
    eventName: "Fretboard Fury",
    linkInfo: "#",
    linkBuy: "#",
  },
  {
    date: "DEC 15 2023",
    subtitle: "New York, USA",
    eventName: "Guitar Extravaganza",
    linkInfo: "#",
    linkBuy: "#",
  },
  {
    date: "JAN 20 2024",
    subtitle: "London, UK",
    eventName: "Rock Revolution",
    linkInfo: "#",
    linkBuy: "#",
  },
  {
    date: "MAR 05 2024",
    subtitle: "Paris, France",
    eventName: "Melody Mania",
    linkInfo: "#",
    linkBuy: "#",
  },
];

// Promotions Section

export const promotionSectionTitle = "Check the current promotion";
export const promotionItem = "Modern Guitar";
export const promotionImg = guitarImg;
export const bigSaleText = "big sale";
export const describeItemText =
  "Experience the joy of strumming the strings and producing enchanting tunes. Our promotional guitars come in various styles and finishesto suit your unique taste.";
export const orderNow = "Order now";

export const promotionFeatures = [
  {
    icon: <AiOutlinePlus color="green" size={20} />,
    text: "Soundy Logo",
  },
  {
    icon: <AiOutlinePlus color="green" size={20} />,
    text: "Clear Sounding",
  },
  {
    icon: <AiOutlinePlus color="green" size={20} />,
    text: "Craftsmanship",
  },
];

// Contact Form

export const contactFormTitle = "Get in touch with us";
export const contactFormSubtitle = "Additional methods of reaching us";

export const contactInfo = [
  {
    icon: <AiOutlineEnvironment size={28} />,
    text: "11 Queensway, Warton, Preston PR4 1XT, United Kingdom",
  },
  {
    icon: <AiOutlinePhone size={28} />,
    text: "+41 55 555 55 55",
  },
  {
    icon: <AiOutlineMail size={28} />,
    text: "SoundyOfficial@gmail.com",
  },
  {
    icon: <AiOutlineYoutube size={28} />,
    text: "@SoundyOfficial",
  },
];

// NCS

export const toastTexts = [
  {
    songTitle: "Coopex, Afterfab, Heleen - EX [NCS Release]",
    musicInfo: "Music provided by NoCopyrightSounds",
    freeDownloadLink: "http://ncs.io/CAH_EX",
    watchLink: "http://ncs.lnk.to/CAH_EXAT/youtube",
  },
  {
    songTitle: "Coopex - Over The Sun (Pt. 2) [NCS Release]",
    musicInfo: "Music provided by NoCopyrightSounds",
    freeDownloadLink: "http://ncs.io/OTS_EP",
    watchLink: "http://ncs.lnk.to/OTS_EPAT/youtube",
  },
  {
    songTitle: "Coopex, KHEMIS - If Looks Can Kill [NCS Release]",
    musicInfo: "Music provided by NoCopyrightSounds",
    freeDownloadLink: "http://ncs.io/IfLooksCanKill",
    watchLink: "http://NCS.lnk.to/IfLooksCanKillAT/youtube",
  },
  {
    songTitle: "Coopex, Nito-Onna & DJ Frog - Whispered Promises [NCS Release]",
    musicInfo: "Music provided by NoCopyrightSounds",
    freeDownloadLink: "http://NCS.io/WhisperedPromises",
    watchLink: "http://youtu.be/xwcwExC4t7w",
  },
  {
    songTitle: "Coopex, EBEN, Shiah Maisel - Ruined My Life [NCS Release]",
    musicInfo: "Music provided by NoCopyrightSounds",
    freeDownloadLink: "http://ncs.io/RuinedMyLife",
    watchLink: "http://youtu.be/pB8ZNnNHWyU",
  },
];

export const galleryData = [
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-23.webp?alt=media&token=0fac22d8-7c07-41e1-8b09-07cfcf83485e",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-29.webp?alt=media&token=5204296c-a0b7-421b-add8-4a6b5bc4da88",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-27.webp?alt=media&token=e6ded1a6-3f62-4a3d-93e8-8876bf1818ac",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-26.webp?alt=media&token=75a17f11-7586-458f-a896-3c3ae1f10ab6",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-1.webp?alt=media&token=035aa9e0-83d9-4757-8791-68ca9e629a60",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-5.webp?alt=media&token=7fd091f4-1659-4c8b-b39f-2506214763fe",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-7.webp?alt=media&token=b982f7c4-576b-4eb3-9a11-4780f57d7641",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-2.webp?alt=media&token=79f68364-f87b-4bd1-b18d-3ca75d299df9",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-3.webp?alt=media&token=6bb2d6a3-6ad0-4e48-b48f-4974a3d47755",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-4.webp?alt=media&token=e1a210ce-4a72-43c9-81b7-d633721260dc",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-13.webp?alt=media&token=b7d3c113-a113-47fa-b773-30700116a4f8",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-6.webp?alt=media&token=a1d2764a-9f8b-4ff3-ae51-a8e15fa1ab92",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-8.webp?alt=media&token=3b334863-c1b2-4f98-a6ad-66af4da9f64d",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-10.webp?alt=media&token=211db582-45c0-4d03-b869-10a91e8f9488",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-11.webp?alt=media&token=216d885d-d027-4662-8da8-96dbfb1c8a2a",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-9.webp?alt=media&token=11cc89e0-1409-4323-9f15-4c67bf73998c",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-12.webp?alt=media&token=1ff8a3f1-9aa5-4590-bbec-0cf039a78af6",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-16.webp?alt=media&token=7c9397e7-5cda-4678-9475-3c0be34fe31e",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-22.webp?alt=media&token=6b7c7d0e-e36a-4385-a380-62ab30006caa",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-14.webp?alt=media&token=de8a324d-38fe-45fa-8542-6b71f358d368",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-15.webp?alt=media&token=0c6b1f85-c649-4962-86c3-44fa191f11cb",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-25.webp?alt=media&token=b038a859-035d-4894-b2e5-53694ce5c29d",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-19.webp?alt=media&token=c64fe565-6123-43f6-a21b-e38d7454db36",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-18.webp?alt=media&token=633ed463-27ba-45f0-9be4-ce310ceab197",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-30.webp?alt=media&token=bfec90dd-5c7f-4055-a9b4-902f74ff984b",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-20.webp?alt=media&token=73805e9b-b036-456b-9c98-7990ce96a4a3",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-17.webp?alt=media&token=eab45ba5-b28f-4820-932f-3ab6f0afa065",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-24.webp?alt=media&token=d0895ae7-1d4a-462a-993d-52227d5eacde",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-21.webp?alt=media&token=d437bbe3-36f0-43a3-bf1e-dbdcfff15fff",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-31.webp?alt=media&token=9a029b17-f6e7-49f3-a833-1e838ff0518c",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-28.webp?alt=media&token=3e1aa323-b9ed-42e4-a4cf-178029ba20a8",
  "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/gallery-image-10.webp?alt=media&token=211db582-45c0-4d03-b869-10a91e8f9488",

];
