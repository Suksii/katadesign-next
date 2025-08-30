"use client";

import { useState } from "react";
import GalleryImage from "./GalleryImage";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

const GalleryHover = () => {
  const t = useTranslations("ProjectPage");

  const projects = [
    {
      title: "Explore Montenegro",
      main_project_img: {
        src: "/explore_mne-06-19-60.jpg",
        alt: "Slika1",
      },
      galery_images: [
        {
          src: "/explore_mne-06-19-123.jpg",
          alt: "1",
          width: 1500,
          height: 800,
        },
        {
          src: "/explore_mne-06-19-96.jpg",
          alt: "4",
          width: 1200,
          height: 800,
        },
        {
          src: "/explore_mne-06-19-79.jpg",
          alt: "3",
          width: 1200,
          height: 800,
        },
        {
          src: "/explore_mne-06-19-71.jpg",
          alt: "2",
          width: 1200,
          height: 800,
        },
      ],
      sub_title: "Priroda. Kultura. Igra.",
      description: (
        <span>
          <u>Explore Montenegro </u>
          spaja igru i estetiku, otkrivajući prirodna i kulturna bogatstva Crne
          Gore. Od koncepta i imena, preko vizuelnog identiteta, do pakovanja i
          komunikacije – svaki detalj priča priču o ovoj jedinstvenoj zemlji.
        </span>
      ),
      category: t("kategorije.produkti"),
      slug: "explore-montenegro",
      paragraphs: [
        "Dio po dio, kamen po kamen, puzlu po puzlu – otkrivamo Crnu Goru. Zemlju u kojoj najviši mauzolej na svijetu stražari nad valovitim Lovćenom i budno motri na mirne obale Boke.Tu su nacionalni parkovi, jezera i rijeke, duboki kanjoni i zavodljive obale Jadrana. Barska maslina, starija od Hrista, i krajolici u kojima se miješaju mirisi mora i planine.",
        "Sve to bilježi objektiv Duška Miljanića, jednog od najistaknutijih crnogorskih fotografa, u serijalu koji otkriva prirodno bogatstvo ove, gotovo jedinstvene zemlje.Serija puzli Explore Montenegro namijenjena je djeci srednjeg uzrasta – i svima koji su zadržali radoznalost djeteta u sebi. ",
        "Suvenir i ukras, mali bijeg u pejzaže koji vrijede vječnosti.",
      ],
      project_desc:
        "Za Explore Montenegro razvili smo cjelokupan koncept brenda i proizvoda – od imena i narativa do vizuelnog identiteta, pakovanja i komunikacione strategije. Dizajn pakovanja zamišljen je kao spoj funkcionalnosti i suvenirskog karaktera, dok je sam proizvod oblikovan tako da bude istovremeno edukativan i atraktivan. Serija puzli, sa fotografijama Duška Miljanića, otkriva prirodna i kulturna bogatstva Crne Gore, kombinujući igru, estetiku i priču o ovoj jedinstvenoj zemlji.",
      list: [
        "Koncept",
        "Naming",
        "Copywriting",
        "Logo & Branding",
        "Packaging",
        "Communication strategy",
      ],
    },
    {
      title: "Fort Kosmač",
      main_project_img: {
        src: "/4.jpg",
        alt: "Slika1",
      },
      galery_images: [
        {
          src: "/explore_mne-06-19-123.jpg",
          alt: "1",
          width: 1500,
          height: 800,
        },
        {
          src: "/explore_mne-06-19-96.jpg",
          alt: "4",
          width: 1200,
          height: 800,
        },
        {
          src: "/explore_mne-06-19-79.jpg",
          alt: "3",
          width: 1200,
          height: 800,
        },
        {
          src: "/explore_mne-06-19-71.jpg",
          alt: "2",
          width: 1200,
          height: 800,
        },
      ],
      sub_title: "Baština u novom svjetlu",
      description:
        "Projekat Fort Kosmač približava monumentalne austrougarske tvrđave Crne Gore publici. Naš tim je oblikovao vizuelni identitet, dizajn knjige, izložbe i interaktivne info table, spajajući istraživanje, edukaciju i savremenu prezentaciju kulturne baštine.",
      alt: "Slika1",
      category: t("kategorije.digital"),
      slug: "fort-kosmac",
      paragraphs: [
        "Na 330 strana je predstavljena studija objavljena na Tehničkom univerzitetu u Beču o mogućnostima valorizacije austrougarskih fortifikacija u Crnoj Gori, sa posebnim fokusom na tvrđavu Fort Kosmač. Fortifikacije koje vjekovima oblikuju obalu i zaleđe Boke, iako monumentalne i istorijski neprocjenjive, danas pretežno stoje u ruševinama, skrivene od pogleda i kolektivnog sjećanja. Upravo zato, rad na njihovoj interpretaciji i predstavljanju javnosti nameće se kao kulturna i društvena obaveza.",
        "U okviru projekta, naš studio je razvijao kompletan vizuelno-komunikacioni okvir – od uređivanja sadržaja i prilagođavanja tekstova, preko oblikovanja kreativne vizije  koja objedinjuje knjigu, izložbu i info tablu, do sprovođenja umjetničkog usmjeravanja kroz tipografiju, boje i vizuelne simbole, sve do završnog dizajna i rasporeda publikacije, plakata i interaktivne info table na samom lokalitetu kulturnog dobra.",
        "Rezultat ovog procesa je studija koja je pretočena u knjigu, zatim postavljanje interaktivne informativne table na lokalitetu tvrđave, kao i izložba u Budvi. Na taj način, teorijsko istraživanje dobilo je i svoju materijalizaciju u prostoru i komunikaciji sa publikom, čineći kulturnu baštinu prepoznatljivijom i istaknutijom. Projekat je zatim nastavio da se razvija uz podršku Ministarstva kulture i medija Crne Gore, omogućavajući razvoj imerzivne prezentacije ovog značajnog kulturno-istorijskog spomenika.",
      ],
      project_desc:
        "Za projekat valorizacije austrougarskih tvrđava razvili smo cjelokupan koncept – od uređivanja sadržaja i oblikovanja narativa do vizuelnog identiteta, info table i izložbene promocije. Knjiga i interaktivna tabla na lokalitetu Kosmača osmišljene su da istovremeno edukuju i privuku posjetioce, dok izložbeni materijali i plakati povezuju istraživački rad sa savremenom prezentacijom kulturne baštine Crne Gore.",
      list: [
        "Uređivanje",
        "Kreativna direkcija",
        "Art direkcija",
        "Dizajn & layout",
      ],
    },
  ];

  const categories = [
    t("kategorije.sve"),
    t("kategorije.identitet"),
    t("kategorije.komunikacije"),
    t("kategorije.digital"),
    t("kategorije.film_mediji"),
    t("kategorije.produkti"),
    t("kategorije.prostori"),
  ];

  // const categories = [
  //   t("kategorije.sve"),
  //   ...new Set(images.map((img) => img.category)),
  // ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(t("kategorije.sve"));

  const filteredProjects =
    selectedCategory === t("kategorije.sve")
      ? projects
      : projects.filter((img) => img.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap gap-x-16 gap-y-8 pb-8 md:w-2/3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="relative cursor-pointer overflow-hidden text-nowrap text-xl group"
          >
            <span className="relative z-10">{category}</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>
      {/* Desktop View */}
      <div onMouseLeave={() => setHoveredIndex(null)}>
        <div className="hidden md:flex overflow-hidden h-auto relative">
          {filteredProjects.map((project, index) => (
            <GalleryImage
              key={index}
              src={project.main_project_img.src}
              alt={`Image ${index + 1}`}
              slug={project.slug}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.1 }}
              className=" py-4 bg-white"
            >
              <h3 className="font-bold">{projects[hoveredIndex].sub_title}</h3>
              <p className="line-clamp-2">
                {projects[hoveredIndex].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden flex-col gap-6 divide-y divide-gray-300">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={`Image-${index}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col"
          >
            <GalleryImage
              key={index}
              src={project.main_project_img.src}
              slug={project.slug}
              alt={`Image ${index + 1}`}
            />
            <div className="py-4">
              <h3 className="font-bold">{project.sub_title}</h3>
              <p className=" line-clamp-3">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default GalleryHover;
