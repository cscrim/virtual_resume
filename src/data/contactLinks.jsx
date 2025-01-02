import { Envelope, GithubLogo, LinkedinLogo, MapPin, Phone } from "@phosphor-icons/react";

export const contactLinks = [
  {
    id: 1,
    url: "https://www.google.com/maps/place/5+Camelot+Dr,+Hamilton,+ON+L8V+2L1/@43.2197071,-79.853498,17z/data=!3m1!4b1!4m6!3m5!1s0x882c9a360b8fbc7f:0x28ebe09fe5808307!8m2!3d43.2197071!4d-79.8509231!16s%2Fg%2F11c23zcx1k?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
    icon: MapPin,
    title: "Hamilton, ON",
  },
  {
    id: 2,
    url: "mailto:courtneyscrimshaw@gmail.com",
    icon: Envelope,
    title: "Email",
  },
  {
    id: 3,
    url: "#",
    icon: Phone,
    title: "647-822-6078",
  },
  {
    id: 4,
    url: "https://www.linkedin.com/in/courtneyscrimshaw/",
    icon: LinkedinLogo,
    title: "LinkedIn",
  },
  {
    id: 5,
    url: "https://github.com/cscrim",
    icon: GithubLogo,
    title: "GitHub",
  },
];