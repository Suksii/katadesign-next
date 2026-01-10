export const socialMediaList = [
  {
    name: "Instagram",
    twoLettersName: "Ig",
    icon: "",
    link: "https://instagram.com",
  },
  { name: "Vimeo", twoLettersName: "Vm", icon: "", link: "https://vimeo.com" },
  {
    name: "Linkedin",
    twoLettersName: "Li",
    icon: "",
    link: "https://linkedin.com",
  },
];

export const images = [
  {
    src: "/pexels-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    src: "/pexels-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    src: "/pexels-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "/pexels-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",
  },
  {
    src: "/pexels-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
  },
  {
    src: "/pexels-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
  },
];

export const newsData = [
  {
    id: "brskut",
    titleKey: "brskut_naslov",
    subtitleKey: "brskut_teaser",
    main_paragraphsKey: "brskut_desc_1",
    paragraphsKey: "brskut_desc_2",
    banner_image: {
      src: "/brskut/Brskut0.jpg",
      alt: "1",
      width: 400,
      height: 800,
    },
    main_images: [
      { src: "/1.jpg", alt: "1", width: 400, height: 800 },
      { src: "/2.jpg", alt: "2", width: 400, height: 800 },
    ],
    slider_images: [
      { src: "/1.jpg", alt: "1", width: 400, height: 800 },
      { src: "/1.jpg", alt: "2", width: 400, height: 800 },
      { src: "/1.jpg", alt: "3", width: 400, height: 800 },
      { src: "/1.jpg", alt: "4", width: 400, height: 800 },
      { src: "/1.jpg", alt: "5", width: 400, height: 800 },
      { src: "/1.jpg", alt: "6", width: 400, height: 800 },
    ],
    date: "28.08.2025",
    slug: "brskut",
  },
  {
    id: "histora",
    titleKey: "histora_naslov",
    subtitleKey: "histora_teaser",
    main_paragraphsKey: "histora_desc_1",
    paragraphsKey: "histora_desc_2",
    banner_image: {
      src: "/histora/histora0.jpg",
      alt: "1",
      width: 400,
      height: 800,
    },
    main_images: [{ src: "/1.jpg", alt: "1", width: 400, height: 800 }],
    date: "28.08.2025",
    slug: "histora",
  },
];

export const sidebarMenu = [
  {
    id: 1,
    name: "Projekti",
    link: "/projekti",
    options: [
      {
        name: "Dodaj projekat",
        link: "/dodaj-projekat",
      },
      {
        name: "Pogledaj projekte",
        link: "/pogledaj-projekte",
      },
      {
        name: "Kategorije",
        link: "/kategorije",
      },
    ],
  },
  {
    id: 2,
    name: "Karijera",
    link: "/karijera",
    options: [
      {
        name: "Dodaj oglas",
        link: "/dodaj-oglas",
      },
      {
        name: "Pogledaj oglase",
        link: "/pogledaj-oglase",
      },
    ],
  },
  {
    id: 3,
    name: "Novosti",
    link: "/novosti",
    options: [
      {
        name: "Dodaj novost",
        link: "/dodaj-novost",
      },
      {
        name: "Pogledaj novosti",
        link: "/pogledaj-novosti",
      },
    ],
  },
  {
    id: 4,
    name: "Usluge",
    link: "/usluge",
    options: [
      {
        name: "Dodaj uslugu",
        link: "/dodaj-uslugu",
      },
      {
        name: "Pogledaj usluge",
        link: "/pogledaj-usluge",
      },
    ],
  },
  {
    id: 5,
    name: "O nama",
    link: "/o-nama",
  },
];

export const shimmerStyle = {
  background: "linear-gradient(90deg, #e2e8f0 25%, #f8fafc 50%, #e2e8f0 75%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 3s infinite",
  backgroundPosition: "-200% 0",
};
