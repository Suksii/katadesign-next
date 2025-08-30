"use client";

import CustomGallery from "@/components/CustomGallery";
import GoBackButton from "@/components/GoBackButton";
import ProjectInfo from "@/components/ProjectInfo";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import useSectionScroll from "@/hooks/useSectionScroll";
import { useProjectStore } from "@/store/projectStore";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SingleProject = ({ params }) => {
  const t = useTranslations("ProjectPage");
  const { isProjectOpened, setIsProjectOpened } = useProjectStore();

  const projects = [
    {
      title: "Explore Montenegro",
      main_project_img: {
        src: "/explore_mne-06-19-60.jpg",
        alt: "Slika1",
      },
      main_banner_img: {
        src: "/explore_mne-06-19-60.jpg",
        alt: "Slika1",
      },
      galery_row_images: [
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
      galery_images: [],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
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
      main_banner_img: {
        src: "/1.jpg",
        alt: "Slika1",
      },
      galery_images: [
        {
          src: "/1.jpg",
          alt: "1",
          width: 1500,
          height: 800,
        },
        {
          src: "/2.jpg",
          alt: "2",
          width: 1200,
          height: 800,
        },
        {
          src: "/3.jpg",
          alt: "3",
          width: 1200,
          height: 800,
        },
        {
          src: "/4.jpg",
          alt: "4",
          width: 1200,
          height: 800,
        },
        {
          src: "/5.jpg",
          alt: "5",
          width: 1200,
          height: 800,
        },
        {
          src: "/6.jpg",
          alt: "6",
          width: 1200,
          height: 800,
        },
        {
          src: "/7.jpg",
          alt: "7",
          width: 1200,
          height: 800,
        },
        {
          src: "/8.jpg",
          alt: "8",
          width: 1200,
          height: 800,
        },
        {
          src: "/9.jpg",
          alt: "9",
          width: 1200,
          height: 800,
        },
        {
          src: "/10.jpg",
          alt: "10",
          width: 1200,
          height: 800,
        },
        {
          src: "/11.jpg",
          alt: "11",
          width: 1200,
          height: 800,
        },
        {
          src: "/12.jpg",
          alt: "12",
          width: 1200,
          height: 800,
        },
        {
          src: "/13.jpg",
          alt: "13",
          width: 1200,
          height: 800,
        },
        {
          src: "/14.jpg",
          alt: "14",
          width: 1200,
          height: 800,
        },
        {
          src: "/15.jpg",
          alt: "15",
          width: 1200,
          height: 800,
        },
        {
          src: "/16.jpg",
          alt: "16",
          width: 1200,
          height: 800,
        },
        {
          src: "/17.jpg",
          alt: "17",
          width: 1200,
          height: 800,
        },
        {
          src: "/18.jpg",
          alt: "18",
          width: 1200,
          height: 800,
        },
        {
          src: "/19.jpg",
          alt: "19",
          width: 1200,
          height: 800,
        },
        {
          src: "/20.jpg",
          alt: "20",
          width: 1200,
          height: 800,
        },
        {
          src: "/21.jpg",
          alt: "21",
          width: 1200,
          height: 800,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
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

  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useSectionScroll();
  return (
    <div>
      <ScrollToTopButton />
      <div ref={containerRef}>
        <section className="section pb-8">
          <div className="flex justify-between">
            <button
              className="cursor-pointer z-50"
              onClick={() => setIsProjectOpened(!isProjectOpened)}
            >
              <div className="flex gap-2 items-center z-50">
                <h4
                  className={`text-xl transition-colors duration-300 z-50 ${
                    isProjectOpened ? "text-white" : "text-black"
                  }`}
                >
                  {isProjectOpened ? project.title : "Projects informations"}
                </h4>
                <span className="relative w-8 h-8 flex items-center justify-center cursor-pointer shrink-0 z-50">
                  <span
                    className={`absolute w-6 h-[2px] transition-transform duration-300 ${
                      isProjectOpened ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                  <span
                    className={`absolute w-[2px] h-6 transition-transform duration-300 ${
                      isProjectOpened ? "scale-y-0" : "scale-y-100 bg-black"
                    }`}
                  ></span>
                </span>
              </div>
            </button>
            <GoBackButton />
          </div>

          <ProjectInfo isOpen={isProjectOpened} project={project} />
          <div className="w-full mt-2">
            <Image
              src={project.main_banner_img.src}
              alt={project.main_banner_img.alt}
              width={1800}
              height={800}
              className="object-cover"
            />
          </div>
        </section>
        <section className="section pb-8 h-screen flex items-center bg-white">
          {project.project_desc && project.list && (
            <div className="py-32 flex flex-col md:flex-row w-full lg:w-3/4">
              <div className="flex-1 flex flex-col gap-2 pb-8">
                <h3 className="font-semibold uppercase tracking-wide">
                  Uradili smo
                </h3>
                <div>
                  {project.list.map((item, index) => (
                    <p key={index} className="text-2xl">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex-2 md:pl-12">
                <p className="text-2xl tracking-wider leading-10">
                  {project.project_desc}
                </p>
              </div>
            </div>
          )}
        </section>
        {project.galery_images[0] && (
          <div className="section h-screen pb-2">
            <div className="relative w-full h-full">
              <Image
                src={project.galery_images[0].src}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
        {project.galery_row_images[2] &&
          project.galery_row_images[3] &&
          project.galery_row_images[1] &&
          project.galery_row_images[0] && (
            <section className="pb-2">
              <CustomGallery
                gallery={project.galery_row_images}
                layout="two"
                index1={0}
                index2={3}
                index3={2}
                index4={1}
              />
            </section>
          )}
        {project.galery_images[2] &&
          project.galery_images[3] &&
          project.galery_images[1] && (
            <section className="pb-[300px]">
              <CustomGallery
                gallery={project.galery_images}
                type={"reverse"}
                index1={2}
                index2={3}
                index3={1}
              />
            </section>
          )}
        {project.galery_images[4] &&
          project.galery_images[5] &&
          project.galery_images[6] && (
            <section className="pb-[300px]">
              <CustomGallery
                gallery={project.galery_images}
                flexNum={2}
                index1={4}
                index2={5}
                index3={6}
              />
            </section>
          )}
        {project.galery_images[7] && project.galery_images[8] && (
          <section className="pb-[300px]">
            <CustomGallery
              gallery={project.galery_images}
              flexNum={2}
              index1={7}
              index3={8}
            />
          </section>
        )}
        {project.galery_images[9] && project.galery_images[10] && (
          <section className="pb-[500px]">
            <CustomGallery
              gallery={project.galery_images}
              flexNum={2}
              type="reverse"
              index2={10}
              index3={9}
            />
          </section>
        )}
        {project.galery_images[11] &&
          project.galery_images[12] &&
          project.galery_images[13] && (
            <section className="pb-2">
              <CustomGallery
                gallery={project.galery_images}
                flexNum={2}
                index1={11}
                index2={12}
                index3={13}
              />
            </section>
          )}
        {project.galery_images[11] &&
          project.galery_images[16] &&
          project.galery_images[14] && (
            <section className="pb-[300px]">
              <CustomGallery
                gallery={project.galery_images}
                type="reverse"
                flexNum={2}
                index1={11}
                index2={16}
                index3={14}
              />
            </section>
          )}
        {project.galery_images[17] && project.galery_images[18] && (
          <section className="pb-2">
            <CustomGallery
              gallery={project.galery_images}
              flexNum={2}
              index2={17}
              index3={18}
            />
          </section>
        )}
        {project.galery_images[19] && project.galery_images[20] && (
          <section className="pb-[500px]">
            <CustomGallery
              gallery={project.galery_images}
              type="reverse"
              flexNum={2}
              index1={20}
              index3={19}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
