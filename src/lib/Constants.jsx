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
  <p className="flex flex-row items-center gap-1 text-center font-light">
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
