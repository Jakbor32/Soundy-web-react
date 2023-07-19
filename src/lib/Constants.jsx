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
  AiOutlineLock,
  AiOutlineShopping,
  AiOutlineCopyright,
} from "react-icons/ai";
import SoundyLogo from "../assets/soundy-logo.svg";
import ImgCard1 from "../assets/festival.webp";
import ImgCard2 from "../assets/festival_2.webp";
import ImgCard3 from "../assets/festival_3.webp";

import spotifyLogo from "../assets/spotify-logo.svg";
import youtubeLogo from "../assets/youtube-logo.svg";
import tiktokLogo from "../assets/tiktok-logo.svg";
import appleMusicLogo from "../assets/apple-music-logo.svg";

import cupImg from "../assets/soundy_cup.png";
import tshirtImg from "../assets/soundy_t-shirt.png";
import tshirtImg2 from "../assets/soundy_t-shirt2.png";
export const navLinks = [
  {
    id: "home",
    val: "Home",
  },
  {
    id: "tour",
    val: "Tour",
  },
  {
    id: "media",
    val: "Media",
  },
  {
    id: "aboutUs",
    val: "About us",
  },
  {
    id: "store",
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
    url: "#store",
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
    lock: <AiOutlineLock />,
  },

  {
    shoppingCart: <AiOutlineShopping />,
  },
  {
    bars: <FaBars size={20} />,
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
  <p className="flex flex-row items-center gap-1 font-light text-center">
    <AiOutlineCopyright />
    2023 Borowy Jakub. All rights reserved.
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
    url: "#",
  },
  {
    id: "tour",
    label: "Tour",
    url: "#",
  },
  {
    id: "shop",
    label: "Shop",
    url: "#",
  },
  {
    id: "contact",
    label: "Contact",
    url: "#",
  },
];

// Featured News

export const featuredNews = [
  {
    id: 1,
    image: ImgCard1,
    imageAlt: "festival-photo-1",
    dateNumber: "2023-04-03",
    date: "MONDAY, APRIL 3RD, 2023",
    title: "Soundy Surprises Fans with New Music at Local Festival",
    description:
      "During their set, Soundy debuted several new songs from their upcoming album, which had been kept under wraps until that moment. Fans were thrilled to hear the fresh material.",
  },
  {
    id: 2,
    image: ImgCard2,
    imageAlt: "festival-photo-2",
    dateNumber: "2023-07-05",
    date: "FRIDAY JULY 5TH, 2023",
    title: "Soundy Night: Energetic Sounds on Stage. Beats",
    description:
      "The crowd erupted with excitement as they immersed themselves in the fresh sounds and infectious rhythms. It was a night of sheer delight and a testament to Soundy's artistic evolution.",
  },
  {
    id: 3,
    image: ImgCard3,
    imageAlt: "festival-photo-3",
    dateNumber: "2023-08-10",
    date: "SATURDAY AUGUST 10TH, 2023",
    title: "Sonic Fusion: Soundy Live. Grooves",
    description:
      "The audience burst with anticipation as they surrendered to the captivating melodies. It became an evening of unadulterated joy and a testament to Soundy's creative growth.",
  },
];
// Music Section

export const musicSectionTitle = "Immerse Yourself in Our Music";

export const musicData = [
  "https://open.spotify.com/track/4hJ9GlqWQKgEU24yUbqDZB?si=49595976d03b4aa8",
  "https://open.spotify.com/track/2Bhv2dpgjAfpJejQltrlOJ?si=4c6e80965b6a44e1",
  "https://open.spotify.com/track/4mljaiRBQOvFCjcnzxlQ3F?si=d85d357f72b444ae",
  "https://open.spotify.com/track/0vyzWCQaPRwaJPbRv9SB1q?si=20fcd0c799914f97",
  "https://open.spotify.com/track/2RdwrJkx3swffe5ylzvfKR?si=4a50e8fa57e94f9e",
  "https://open.spotify.com/track/6JRKroQWBkGk44TV4HbSl5?si=2c689ab481354f86",
];

//  Brand Slider

export const brandLogos = [
  { src: spotifyLogo, alt: "Spotify Logo" },
  { src: youtubeLogo, alt: "YouTube Logo" },
  { src: tiktokLogo, alt: "TikTok Logo" },
  { src: appleMusicLogo, alt: "Apple Music Logo" },
];

// Tour Section

export const TourSectionTitle = "Check the latest venues we will be at";
export const tickets = [
  {
    date: "10.11.2023",
    location: "Warsaw, Poland",
    eventName: "Fretboard Fury",
    link: "#",
  },
  {
    date: "15.12.2023",
    location: "New York, USA",
    eventName: "Guitar Extravaganza",
    link: "#",
  },
  {
    date: "20.01.2024",
    location: "London, UK",
    eventName: "Rock Revolution",
    link: "#",
  },
  {
    date: "05.03.2024",
    location: "Paris, France",
    eventName: "Melody Mania",
    link: "#",
  },
];

// Promotions Section

export const promotionSectionTitle = "Check the current promotions";
export const promotionSlides = [
  {
    title: "Quality",
    description: "Style, warmth, and discount!",
    customerTitle: "Customer review",
    rating: [1, 2, 3, 4, 5],
    discount: "14$",
    price: "19$",
    benefits: [
      "Print/pattern options",
      "Neckline style",
      "Button or zipper closure",
      "Embellishments",
    ],
    img: tshirtImg2,
    imgDesc: "Soundy T-shirt",
  },
  {
    title: "Comfort",
    description: "T-shirt Revolution",
    customerTitle: "Customer review",
    rating: [1, 2, 3, 4],
    discount: "11$",
    price: "15$",
    benefits: ["Color variety", "Sleeve length", "Stylee", "Breathability"],
    img: tshirtImg,
    imgDesc: "Soundy T-shirt",
  },
  {
    title: "Stylish",
    description: "Cup promotion at a great price!",
    customerTitle: "Customer review",
    rating: [1, 2, 3, 4],
    discount: "20$",
    price: "24$",
    benefits: ["Durability", "Heat insulation", "Easy to clean", "Versatility"],
    img: cupImg,
    imgDesc: "Soundy Cup",
  },
];
