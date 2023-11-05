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
  {
    date: "APR 15 2024",
    subtitle: "Los Angeles, USA",
    eventName: "Bass Bonanza",
    linkInfo: "#",
    linkBuy: "#",
  },

  {
    date: "MAY 20 2024",
    subtitle: "Berlin, Germany",
    eventName: "Acoustic Serenade",
    linkInfo: "#",
    linkBuy: "#",
  },

  {
    date: "JUN 10 2024",
    subtitle: "Tokyo, Japan",
    eventName: "Harmony Haven",
    linkInfo: "#",
    linkBuy: "#",
  },

  {
    date: "JUL 25 2024",
    subtitle: "Sydney, Australia",
    eventName: "Rhythmic Rapture",
    linkInfo: "#",
    linkBuy: "#",
  },

  {
    date: "AUG 15 2024",
    subtitle: "Rio de Janeiro, Brazil",
    eventName: "Samba Strumfest",
    linkInfo: "#",
    linkBuy: "#",
  },

  {
    date: "SEP 05 2024",
    subtitle: "Toronto, Canada",
    eventName: "Electric Euphoria",
    linkInfo: "#",
    linkBuy: "#",
  },

  {
    date: "OCT 10 2024",
    subtitle: "Barcelona, Spain",
    eventName: "Flamenco Frenzy",
    linkInfo: "#",
    linkBuy: "#",
  },

  {
    date: "NOV 15 2024",
    subtitle: "Mumbai, India",
    eventName: "Sitar Sensation",
    linkInfo: "#",
    linkBuy: "#",
  },

  {
    date: "DEC 05 2024",
    subtitle: "Cape Town, South Africa",
    eventName: "African Groove Gala",
    linkInfo: "#",
    linkBuy: "#",
  },

  {
    date: "DEC 20 2024",
    subtitle: "Dublin, Ireland",
    eventName: "Celtic Crescendo",
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
export const titleVideo = "Our Video Collection";
export const videoData = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-6.webp?alt=media&token=1e9e0e03-5d68-424b-b60a-ad4dd4c1c5a2",
    title: "Under the Starry Sky",
    videoSrc:
      "https://www.youtube.com/watch?v=xO_x0DAhUT4&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-7.webp?alt=media&token=c9825c1d-ccfb-4230-ae39-9fc61e565fdf",
    title: "I've Waited So Long",
    videoSrc:
      "https://www.youtube.com/watch?v=ngvt3OHx7zQ&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-8.webp?alt=media&token=f4286c03-fb88-4e8c-abd8-3329a5061291",
    title: "Whisper in the Night",
    videoSrc:
      "https://www.youtube.com/watch?v=jOe7JtsTLiM&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-9.webp?alt=media&token=b9148715-2207-46eb-b7de-301d392b359a",
    title: "Worth More?",
    videoSrc:
      "https://www.youtube.com/watch?v=q9X9g2t67PM&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-16.webp?alt=media&token=325217f9-2c3d-402d-b143-fc2822d0f7dc",
    title: "Nostalgic Melody",
    videoSrc:
      "https://www.youtube.com/watch?v=nS9dImtaqLk&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-17.webp?alt=media&token=fc6311de-c731-48c4-b93c-092b3efec2bc",
    title: "Love's Arrow",
    videoSrc:
      "https://www.youtube.com/watch?v=Tcinagiy0hM&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-18.webp?alt=media&token=ae4ca047-d4e8-40aa-aa28-3c713e3c583c",
    title: "Wind in My Hair",
    videoSrc:
      "https://www.youtube.com/watch?v=kI4usARVdaU&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-2.webp?alt=media&token=c9d0650c-93c7-4861-8730-97cd3df88961",
    title: "Magical Moments",
    videoSrc:
      "https://www.youtube.com/watch?v=iPyg-QknNeY&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-3.webp?alt=media&token=96e83c07-22f7-4d61-a970-f2222d4c3146",
    title: "Secrets of the Heart",
    videoSrc:
      "https://www.youtube.com/watch?v=rpPiFMcjF6M&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-4.webp?alt=media&token=1bfee79f-6611-49fd-a9ec-ce4ba6c96774",
    title: "Somewhere...",
    videoSrc:
      "https://www.youtube.com/watch?v=VtMCHahEpSg&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-5.webp?alt=media&token=8c681733-69b4-48bb-a63c-12a4df268dc5",
    title: "Clouds of Dreams",
    videoSrc:
      "https://www.youtube.com/watch?v=FsnluXPC6s0&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-1.webp?alt=media&token=ffe1e926-5425-411e-bcdd-97dc81ffb1c6",
    title: "Midst of the Storm",
    videoSrc:
      "https://www.youtube.com/watch?v=dqC5x7cwwl0&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-10.webp?alt=media&token=7dbc23bd-bac6-4ab5-8dfc-326ae9c7f2c9",
    title: "Taste of Freedom",
    videoSrc:
      "https://www.youtube.com/watch?v=_f7UMIEaf9A&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-11.webp?alt=media&token=3cd6094f-7e86-45e6-9d4f-96a9d3c7e813",
    title: "Light in the Darkness",
    videoSrc:
      "https://www.youtube.com/watch?v=FguBcUk9XP4&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-12.webp?alt=media&token=f2bbb7cb-3416-4f2c-b92e-fdd32c3009dc",
    title: "A Stroll in the Rain",
    videoSrc:
      "https://www.youtube.com/watch?v=F5onIgMSyVg&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-13.webp?alt=media&token=e6c459a2-5acd-4562-af28-b0f3c1ccd04e",
    title: "Searching for Meaning",
    videoSrc:
      "https://www.youtube.com/watch?v=iPyg-QknNeY&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-14.webp?alt=media&token=a4b94e3c-5c78-47c7-b9bb-a1dec65dbdc2",
    title: "Flame of Love",
    videoSrc:
      "https://www.youtube.com/watch?v=_OLrjAWzUR0&ab_channel=NoCopyrightSounds",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/video-thumbnail-15.webp?alt=media&token=4c359adf-863e-48a4-9ae1-9abfdc761e41",
    title: "Footprints in the Sand",
    videoSrc:
      "https://www.youtube.com/watch?v=l0NMbZHqMDk&ab_channel=NoCopyrightSounds",
  },
];

// About Us

export const aboutUsData = [
  {
    name: "William",
    surname: "Wilson",
    desc: " I make the guitar sing with soulful melodies and fiery solos. I stumbled upon this band during a jam session at a local pub, and my love for bluesy licks adds a touch of nostalgia to our sound. Besides my passion for playing guitar, I'm a dedicated surfer, catching waves whenever I can. What sets me apart is my signature vintage hat that I wear on stage, giving our band a bit of old-school cool.",
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/william-wilson.jpg?alt=media&token=aa252c30-6ffe-400e-ae3b-19c36b6d9bb4&_gl=1*585ej*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5MzM5OC4xMS4xLjE2OTYwOTM1NDcuNjAuMC4w",
    alt: "William Wilson",
  },
  {
    name: "Samuela",
    surname: "Harris",
    desc: "My voice is pure magic, soaring to ethereal heights and grounding us with soulful depth. I joined the band after winning a karaoke competition, and I bring a touch of diva elegance to our stage presence.Singing is my soul, but I also love volunteering at animal shelters. My unique trait is my collection of vintage microphones that I use during our performances, each with its own story and sound.",
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/samuel-harris.jpg?alt=media&token=091345dc-75ee-4349-b2e4-2302f269d6dd&_gl=1*1rxrmr9*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5MzM5OC4xMS4xLjE2OTYwOTM1NjAuNDcuMC4w",
    alt: "Samuela Harris",
  },
  {
    name: "Olivia",
    surname: "Smith",
    desc: "My drumming is the heartbeat of our music, keeping us in sync with my infectious groove. I answered an online ad to join the band, and my blend of metal and funk influences adds a unique edge to our beats. When I'm not drumming, you'll find me crafting custom drumsticks for fellow drummers. What makes me stand out is my ever-changing drum kit, with a rotating selection of exotic percussion instruments integrated into it.",
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/olivia-smith.jpg?alt=media&token=0c631106-cfa7-4b11-afa6-fea4b492623a&_gl=1*ujx7hz*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5MzM5OC4xMS4xLjE2OTYwOTM1NjUuNDIuMC4w",
    alt: "Olivia Smith",
  },
  {
    name: "Michael",
    surname: "Taylor",
    desc: "My funky basslines make it impossible not to dance, and my slap technique is second to none. I found my way to the band after a chance encounter at a local record store, and my love for 70s funk is our secret weapon. Apart from singing, I'm a foodie who loves exploring exotic cuisines. I stand out with my ever-changing collection of stage outfits, each one inspired by a different culture from around the world.",
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/michael-taylor.jpg?alt=media&token=cac73b75-31d5-4309-a3aa-2b6a932e7d8d&_gl=1*n4aj9y*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5MzM5OC4xMS4xLjE2OTYwOTM1NjkuMzguMC4w",
    alt: "Michael Taylor",
  },
  {
    name: "James",
    surname: "Davis",
    desc: "I craft soulful melodies and fiery solos on my electric guitar, infusing our music with nostalgia and energy. My vintage hat adds a touch of old-school cool to our stage presence. Synths are my playground, and I'm also a sci-fi book enthusiast. What distinguishes me is my futuristic LED glasses that I wear during performances, creating a visual spectacle to match our music.",
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/james-davis.jpg?alt=media&token=a690924d-3d12-472c-ad91-371b47135a5a&_gl=1*ugfv96*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5MzM5OC4xMS4xLjE2OTYwOTM1NzMuMzQuMC4w",
    alt: "James Davis",
  },
  {
    name: "Daniel",
    surname: "Evans",
    desc: " My synth mastery creates an otherworldly atmosphere in our music. I was introduced to the band by a mutual friend, and my obsession with vintage analog synths transports our sound to the future while paying homage to the past. My love for percussion extends to my hobby of building custom drums. What makes me unique is my collection of rare and handcrafted percussion instruments from various corners of the globe.",
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/daniel-evans.jpg?alt=media&token=0a07b420-f2b4-4d5b-b4c5-d89b3852a965&_gl=1*18zmwg7*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5MzM5OC4xMS4xLjE2OTYwOTM1ODQuMjMuMC4w",
    alt: "Daniel Evans",
  },
  {
    name: "Christopher",
    surname: "White",
    desc: "I bring global rhythms to our music with an array of exotic percussion instruments. I was spotted busking on the streets, and my multicultural influences infuse our songs with a unique world music vibe. My musical versatility is matched by my love for nature, often going on hiking adventures. I'm instantly recognizable by my flowing bohemian dresses and flower crowns that I wear on stage.",
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/christopher-white.jpg?alt=media&token=c87fec07-3432-47cc-8f68-079ab115aa34&_gl=1*pz8r4u*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5MzM5OC4xMS4xLjE2OTYwOTM1ODYuMjEuMC4w",
    alt: "Christopher White",
  },
  {
    name: "Benjamin",
    surname: "Brown",
    desc: "My versatility is our secret weapon. I auditioned for the band with my mesmerizing violin skills and then surprised everyone with my ability to play multiple instruments. My classical background adds a touch of elegance to our music. Poetry is my other passion, and I perform spoken word in my free time. What sets me apart is my enigmatic masks, each one handcrafted and representing a different emotion or theme.",
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/benjamin-brown.jpg?alt=media&token=ee7bac23-cc9d-400d-b9ce-7011d444578a&_gl=1*1u540ws*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5MzM5OC4xMS4xLjE2OTYwOTM1ODguMTkuMC4w",
    alt: "Benjamin Brown",
  },
  {
    name: "Emily",
    surname: "Johnson",
    desc: "My experimental guitar effects and ambient textures create a sonic dreamscape. I joined the band after meeting the others at a music festival, and my penchant for pushing musical boundaries adds a touch of avant-garde to our sound. My love for experimentation extends to my fascination with astronomy. What makes me unique is my collection of custom-made guitar pedals, each with its own quirky design and sound modulation.",
    url: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/emily-johnson.jpg?alt=media&token=c2189a24-fdf1-4041-acd3-6b00b14ae951&_gl=1*tyekxl*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5MzM5OC4xMS4xLjE2OTYwOTM4NzYuNTkuMC4w",
    alt: "Emily Johnson",
  },
];

// Tour

export const cities = [
  "Warsaw",
  "New York",
  "Paris",
  "London",
  "Los Angeles",
  "Tokyo",
  "Sydney",
  "Berlin",
  "Rio De Janeiro",
  "Toronto",
  "Barcelona",
  "Mumbai",
  "Cape Town",
  "Dublin",
];

// Store

export const newCollection = [
  {
    id: 0,
    image: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/Promotion-guitar-red-soundy.png?alt=media&token=734ae0fa-fedf-4ae3-80ae-e203355f42b2&_gl=1*18eq6qd*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5OTE4MjY2MC4xNy4xLjE2OTkxODI2ODkuMzEuMC4w",
    imageAlt: "Red guitar",
    price:"300",
    desc: "Taylor 814ce Acoustic Guitar"
  },
  {
    id: 1,
    image: "https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/Promotion-guitar-purple-soundy.png?alt=media&token=0d6f8405-de9b-40de-971c-da68a2313db5&_gl=1*sp9sgu*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5OTE4MjY2MC4xNy4xLjE2OTkxODMzMTAuNTQuMC4w",
    imageAlt: "Purlple guitar",
    price:"450",
    desc: "Fender Stratocaster Retro Guitar"
  },
];