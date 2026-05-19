require("dotenv").config();

const { PrismaClient } = require("../src/generated/prisma");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function upsertCategory(titleMn, titleEn) {
  const existing = await prisma.category.findFirst({ where: { titleMn } });
  if (existing) return existing;
  return prisma.category.create({ data: { titleMn, titleEn } });
}

async function main() {
  // --- Admin ---
  const { ADMIN1_EMAIL, ADMIN1_PASSWORD } = process.env;
  const hashedPassword = await bcrypt.hash(ADMIN1_PASSWORD, 12);
  await prisma.admin.upsert({
    where: { email: ADMIN1_EMAIL },
    update: {},
    create: { email: ADMIN1_EMAIL, password: hashedPassword },
  });

  // --- Kategorije ---
  const catProdukti = await upsertCategory("Produkti", "Products");
  const catDigital = await upsertCategory("Digital", "Digital");
  const catIdentitet = await upsertCategory("Identitet", "Identity");
  const catKomunikacije = await upsertCategory("Komunikacije", "Communications");
  const catProstori = await upsertCategory("Prostori", "Environments");
  const catFilm = await upsertCategory("Film & Mediji", "Film / Visual media");

  console.log("Kategorije upisane.");

  // --- Projekti ---

  await prisma.project.upsert({
    where: { slug: "explore-montenegro" },
    update: {},
    create: {
      slug: "explore-montenegro",
      titleMn: "Explore Montenegro",
      titleEn: "Explore Montenegro",
      subTitleMn: "Priroda. Kultura. Igra.",
      subTitleEn: "Nature. Culture. Game.",
      descriptionMn: "Explore Montenegro spaja igru i estetiku, otkrivajući prirodna i kulturna bogatstva Crne Gore. Od koncepta i imena, preko vizuelnog identiteta, do pakovanja i komunikacije – svaki detalj priča priču o ovoj jedinstvenoj zemlji.",
      descriptionEn: "Explore Montenegro combines game and aesthetics revealing both natural and cultural wealth of Montenegro. From concept and name, through visual identity, to package and communication every detail tells a story about this unique country.",
      projectDescMn: "Za Explore Montenegro razvili smo cjelokupan koncept brenda i proizvoda – od imena i narativa do vizuelnog identiteta, pakovanja i komunikacione strategije. Dizajn pakovanja zamišljen je kao spoj funkcionalnosti i suvenirskog karaktera, dok je sam proizvod oblikovan tako da bude istovremeno edukativan i atraktivan. Serija puzli, sa fotografijama Duška Miljanića, otkriva prirodna i kulturna bogatstva Crne Gore, kombinujući igru, estetiku i priču o ovoj jedinstvenoj zemlji.",
      projectDescEn: "Explore Montenegro, the brand whose project concept we developed entirely – from name and narrative to visual identity, packaging and communication strategy. Packaging design is made as a combination of functionality and souvenir character, while product itself is designed to be educational and attractive at the same time. Series of puzzles, with photographs taken by Duško Miljanić, reveal both natural and cultural wealth of Montenegro, combining play, aesthetics and tell stories of this unique country.",
      listMn: ["Koncept", "Naming", "Kopirajting", "Logo & Brending", "Dizajn ambalaže", "Strategija komunikacije"],
      listEn: ["Concept", "Naming", "Copywriting", "Logo & Branding", "Packaging", "Communication strategy"],
      team: [{ name: "Duško Miljanić", role: "Autor fotografija" }],
      paragraphsMn: [
        "Dio po dio, kamen po kamen, puzlu po puzlu – otkrivamo Crnu Goru. Zemlju u kojoj najviši mauzolej na svijetu stražari nad valovitim Lovćenom i budno motri na mirne obale Boke. Tu su nacionalni parkovi, jezera i rijeke, duboki kanjoni i zavodljive obale Jadrana. Barska maslina, starija od Hrista, i krajolici u kojima se miješaju mirisi mora i planine.",
        "Sve to bilježi objektiv Duška Miljanića, jednog od najistaknutijih crnogorskih fotografa, u serijalu koji otkriva prirodno bogatstvo ove, gotovo jedinstvene zemlje. Serija puzli Explore Montenegro namijenjena je djeci srednjeg uzrasta – i svima koji su zadržali radoznalost djeteta u sebi.",
        "Suvenir i ukras, mali bijeg u pejzaže koji vrijede vječnosti.",
      ],
      paragraphsEn: [
        "Piece by piece, stone by stone, puzzle by puzzle – we reveal Montenegro. A country whose largest mausoleum guards Lovćen and pays a close look over peaceful coast of Boka. There we find many national parks, lakes and rivers, deep canyons and intriguing coasts of Jadran. The ancient Olive tree located in Bar dating from years B.C. as well as fascinating landscapes where a refined mixture of sea and mountains arises.",
        "All the above is perfectly captured by camera lens of Duško Miljanić, one of most renowned Montenegrin photographers, in series that reveal natural treasures of this almost unique country. Puzzle series Explore Montenegro is made for school age children or ages above, as well as for everyone who has kept their mind young as well as their child-like curiosity.",
        "Both souvenir and decorative item, a small getaway into landscapes worth of eternity.",
      ],
      mainProjectImg: "/explore_mne-06-19-60.jpg",
      mainBannerImg: "/explore_mne-06-19-60.jpg",
      galleryImages: [
        { src: "/explore_mne-06-19-123.jpg", alt: "1", width: 1500, height: 800 },
        { src: "/explore_mne-06-19-96.jpg", alt: "4", width: 1200, height: 800 },
        { src: "/explore_mne-06-19-79.jpg", alt: "3", width: 1200, height: 800 },
        { src: "/explore_mne-06-19-71.jpg", alt: "2", width: 1200, height: 800 },
      ],
      sliderImages: [
        { src: "/explore_mne/explore_mne-06-19-16.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-17.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-18.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-19.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-20.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-21.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-22.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-23.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-24.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-25.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-26.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-27.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-28.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-29.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-30.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-31.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-32.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-33.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-34.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-35.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-36.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-37.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-38.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-39.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-40.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-41.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-42.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-43.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-44.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-45.jpg", alt: "", width: 400, height: 800 },
        { src: "/explore_mne/explore_mne-06-19-46.jpg", alt: "", width: 400, height: 800 },
      ],
      galleryLayout: [
        { layout: "two", indices: { index1: 0, index2: 3, index3: 2, index4: 1 }, spacing: "pb-2" },
      ],
      categoryId: catProdukti.id,
    },
  });

  await prisma.project.upsert({
    where: { slug: "fort-kosmac" },
    update: {},
    create: {
      slug: "fort-kosmac",
      titleMn: "Fort Kosmač",
      titleEn: "Fort Kosmač",
      subTitleMn: "Monument u dizajnu",
      subTitleEn: "Monument through design",
      descriptionMn: "Projekat Fort Kosmač približava monumentalne austrougarske tvrđave Crne Gore publici. Naš tim je oblikovao vizuelni identitet, dizajn knjige, izložbe i interaktivne info table, spajajući istraživanje, edukaciju i savremenu prezentaciju kulturne baštine.",
      descriptionEn: "Fort Kosmač project brings closer monumental Austro-Hungarian fortresses to the public. Our team has formed visual identity, book design, exhibition and interactive info-board, fusing research, education and modern presentation of cultural heritage.",
      projectDescMn: "Za projekat valorizacije austrougarskih tvrđava razvili smo cjelokupan koncept – od uređivanja sadržaja i oblikovanja narativa do vizuelnog identiteta, info table i izložbene promocije. Knjiga i interaktivna tabla na lokalitetu Kosmača osmišljene su da istovremeno edukuju i privuku posjetioce, dok izložbeni materijali i plakati povezuju istraživački rad sa savremenom prezentacijom kulturne baštine Crne Gore.",
      projectDescEn: "For valorisation project of Austro-Hungarian fortresses we have developed an entire concept – from editing content, shaping narratives to visual identity, info-boards and exhibitional promotions. Book and interactive board at the site of Fort Kosmač are designed to educate and attract visitors at the same time, while exhibition materials and posters connect research work with the contemporary presentation of cultural heritage of Montenegro.",
      listMn: ["Uređivanje", "Kreativnu direkciju", "Art direkciju", "Dizajn & layout"],
      listEn: ["Editing", "Creative direction", "Art direction", "Design & layout"],
      team: [
        { name: "Ivan Vratnica", role: "Arhitekta i autor knjige" },
        { name: "Vuk Zečević", role: "Arhitekta, 3D vizualizacije" },
      ],
      paragraphsMn: [
        "Na 330 strana je predstavljena studija objavljena na Tehničkom univerzitetu u Beču o mogućnostima valorizacije austrougarskih fortifikacija u Crnoj Gori, sa posebnim fokusom na tvrđavu Fort Kosmač. Fortifikacije koje vjekovima oblikuju obalu i zaleđe Boke, iako monumentalne i istorijski neprocjenjive, danas pretežno stoje u ruševinama, skrivene od pogleda i kolektivnog sjećanja. Upravo zato, rad na njihovoj interpretaciji i predstavljanju javnosti nameće se kao kulturna i društvena obaveza.",
        "U okviru projekta, naš studio je razvijao kompletan vizuelno-komunikacioni okvir – od uređivanja sadržaja i prilagođavanja tekstova, preko oblikovanja kreativne vizije koja objedinjuje knjigu, izložbu i info tablu, do sprovođenja umjetničkog usmjeravanja kroz tipografiju, boje i vizuelne simbole, sve do završnog dizajna i rasporeda publikacije, plakata i interaktivne info table na samom lokalitetu kulturnog dobra.",
        "Rezultat ovog procesa je studija koja je pretočena u knjigu, zatim postavljanje interaktivne informativne table na lokalitetu tvrđave, kao i izložba u Budvi. Na taj način, teorijsko istraživanje dobilo je i svoju materijalizaciju u prostoru i komunikaciji sa publikom, čineći kulturnu baštinu prepoznatljivijom i istaknutijom.",
      ],
      paragraphsEn: [
        "A 330-page study published at the Technical University of Vienna presents possibilities for valorization of Austro-Hungarian fortifications, with special focus on Fort Kosmač. Fortifications that shaped the coast of Boka for centuries, although monumental and historically priceless, today stand mostly in ruins, hidden from view and collective memory.",
        "As part of the project, our studio developed a complete visual-communication framework – from editing and adapting contents, through making a creative vision that unites the book, exhibition and info board, to implementation of art direction through typography, colors and visual symbols.",
        "Result of this process is a study that has been made into a book, then installation of an interactive info board at the site of the fortress, as well as an exhibition in Budva. This way, theoretical research has gotten its materialisation in space and communication with the audience.",
      ],
      mainProjectImg: "/4.jpg",
      mainBannerImg: "/Kosmac.jpg",
      galleryImages: [
        { src: "/1.jpg", alt: "1", width: 1200, height: 800 },
        { src: "/2.jpg", alt: "2", width: 1200, height: 800 },
        { src: "/3.jpg", alt: "3", width: 1200, height: 800 },
        { src: "/4.jpg", alt: "4", width: 1200, height: 800 },
        { src: "/5.jpg", alt: "5", width: 1200, height: 800 },
        { src: "/6.jpg", alt: "6", width: 1200, height: 800 },
        { src: "/7.jpg", alt: "7", width: 1200, height: 800 },
        { src: "/8.jpg", alt: "8", width: 1200, height: 800 },
        { src: "/9.jpg", alt: "9", width: 1200, height: 800 },
        { src: "/10.jpg", alt: "10", width: 1200, height: 800 },
        { src: "/11.jpg", alt: "11", width: 1200, height: 800 },
        { src: "/12.jpg", alt: "12", width: 1200, height: 800 },
        { src: "/13.jpg", alt: "13", width: 1200, height: 800 },
        { src: "/14.jpg", alt: "14", width: 1200, height: 800 },
        { src: "/15.jpg", alt: "15", width: 1200, height: 800 },
        { src: "/16.jpg", alt: "16", width: 1200, height: 800 },
        { src: "/17.jpg", alt: "17", width: 1200, height: 800 },
        { src: "/18.jpg", alt: "18", width: 1200, height: 800 },
        { src: "/19.jpg", alt: "19", width: 1200, height: 800 },
        { src: "/20.jpg", alt: "20", width: 1200, height: 800 },
        { src: "/21.jpg", alt: "21", width: 1200, height: 800 },
      ],
      sliderImages: null,
      galleryLayout: [
        { layout: "one", indices: { index3: 0 }, spacing: "pb-2" },
        { layout: "one", type: "reverse", indices: { index1: 2, index2: 3, index3: 1 }, spacing: "pb-2 lg:pb-[300px]" },
        { layout: "one", flexNum: 2, indices: { index1: 4, index2: 5, index3: 6 }, spacing: "pb-2 lg:pb-[300px]" },
        { layout: "one", flexNum: 2, indices: { index1: 7, index3: 8 }, spacing: "pb-2 lg:pb-[300px]" },
        { layout: "one", type: "reverse", flexNum: 2, indices: { index1: 10, index3: 9 }, spacing: "pb-2 lg:pb-[500px]" },
        { layout: "one", flexNum: 2, indices: { index1: 11, index2: 12, index3: 13 }, spacing: "pb-2" },
        { layout: "one", flexNum: 2, type: "reverse", indices: { index1: 11, index2: 16, index3: 14 }, spacing: "pb-2 lg:pb-[300px]" },
        { layout: "one", flexNum: 2, indices: { index2: 17, index3: 18 }, spacing: "pb-2" },
        { layout: "three", indices: { index2: 20, index3: 19 }, spacing: "pb-2 lg:pb-[500px]" },
      ],
      categoryId: catDigital.id,
    },
  });

  await prisma.project.upsert({
    where: { slug: "sloga" },
    update: {},
    create: {
      slug: "sloga",
      titleMn: "Sloga",
      titleEn: "Sloga",
      subTitleMn: "Sistem vizuelne konstrukcije za savremeni inženjering",
      subTitleEn: "Visual construction system for modern engineering",
      descriptionMn: "Redizajn vizuelnog identiteta kompanije SLOGA spaja brutalističku jasnoću i retro-futurističku simboliku. Masivna ćirilična tipografija i iluzionistički 3D simbol – izveden iz ponavljanog slova 'S' – stvaraju prepoznatljiv, tehnički precizan i energičan identitet.",
      descriptionEn: "Re-design of visual identity for SLOGA company blends brutalist clarity and retro-futuristic symbolism. Massive cyrillic typography and illusionist 3D symbol – made out of repeated letter 'C' – create recognisable, technically precise and energetic identity.",
      projectDescMn: "Kata Design Studio pomaže kompanijama i brendovima da izgrade identitete koji jasnije komuniciraju njihovu misiju i poziciju u određenoj industriji. Za SLOGU smo razvili korporativni sistem koji reinterpretira brutalističku estetiku kroz savremen, tehnički precizan pristup. Logotip kombinuje monolitnu ćiriličnu tipografiju sa retro-futurističkim 3D monogramom ponavljajućeg slova 'S', aludirajući na konstrukciju, planiranje i rast. Jarka crvena definiše emocionalni ton identiteta, donoseći energiju i snažnu vidljivost u svim aplikacijama.",
      projectDescEn: "Kata Design Studio enables companies and brands to build identities that clearly communicate their mission and industry role. For SLOGA we've developed a corporate system that re-interprets brutalist aesthetics through a modern, technically precise approach. The logotype combines monolith cyrillic typography with a retro-futuristic 3D monogram of letter 'C', alluding to construction, planning and growth. Bright red defines the identity's emotional tone, bringing energy and strong presence across all formats.",
      listMn: ["Redizajn logotipa", "Art direkciju", "Vizuelni identitet", "Korporativna tipografija", "Dizajn & layout"],
      listEn: ["Logo design", "Art direction", "Visual identity", "Corporate typography", "Design & layout"],
      team: [],
      paragraphsMn: ["Novi identitet kompanije SLOGA predstavlja transformaciju tradicionalne inženjerske i projektantske firme u savremenu korporaciju sa jasnim karakterom i moćnom vizuelnom komunikacijom. Brutalistička tipografija daje osjećaj težine stabilnosti i tehničke ozbiljnosti, dok retro-futuristički 3D simbol unosi dinamiku, napredak i vizuelnu slojevitost."],
      paragraphsEn: ["SLOGA's new identity shifts the company from a traditional engineering and project-development profile to a modern, clearly defined corporate system. Brutalist typography and a retro-futuristic 3D symbol create a structured, precise and visually assertive identity built on geometry, constructive layout and a dominant red tone."],
      mainProjectImg: "/sloga/sloga1.jpg",
      mainBannerImg: "/sloga/sloga1.jpg",
      galleryImages: [
        { src: "/sloga/sloga2.jpg", alt: "1", width: 1200, height: 800 },
        { src: "/sloga/sloga3.jpg", alt: "2", width: 1200, height: 800 },
        { src: "/sloga/sloga4.jpg", alt: "3", width: 1200, height: 800 },
        { src: "/sloga/sloga5.jpg", alt: "4", width: 1200, height: 800 },
        { src: "/sloga/sloga6.jpg", alt: "5", width: 1200, height: 800 },
        { src: "/sloga/sloga7.jpg", alt: "6", width: 1200, height: 800 },
        { src: "/sloga/sloga8.jpg", alt: "7", width: 1200, height: 800 },
        { src: "/sloga/sloga9.jpg", alt: "8", width: 1200, height: 800 },
      ],
      sliderImages: null,
      galleryLayout: [
        { layout: "one", indices: { index3: 3 }, spacing: "pb-2" },
        { layout: "one", indices: { index3: 6 }, spacing: "pb-2" },
        { layout: "one", indices: { index1: 2, index2: 7, index3: 1 }, type: "reverse", spacing: "pb-2" },
        { layout: "one", indices: { index3: 5 }, spacing: "pb-2" },
        { layout: "one", indices: { index3: 4 }, spacing: "pb-2" },
        { layout: "one", flexNum: 2, indices: { index3: 0 }, spacing: "pb-2" },
      ],
      categoryId: catIdentitet.id,
    },
  });

  await prisma.project.upsert({
    where: { slug: "idea" },
    update: {},
    create: {
      slug: "idea",
      titleMn: "IDEA",
      titleEn: "IDEA",
      subTitleMn: "Where tradition meets modern aesthetics",
      subTitleEn: "Where tradition meets modern aesthetics",
      descriptionMn: "Redizajnirani IDEA market u Kolašinu pokazuje kako promišljeno oblikovan prostor može transformisati svakodnevne navike. Kroz arhitektonsko rješenje, vizuelne elemente i autorske objekte, ovaj multimedijalni koncept spaja komercijalnu funkciju sa estetikom koja podiže iskustvo kupovine na nivo umjetnosti.",
      descriptionEn: "The redesigned IDEA store in Kolašin demonstrates how a thoughtfully crafted space can transform everyday routines. Through architectural design solutions, visual elements, and unique design features, this multimedia concept seamlessly blends commercial functionality with an aesthetic that elevates the shopping experience to an artistic level.",
      projectDescMn: "U centru Kolašina, jedne od najbrže rastućih turističkih destinacija u Crnoj Gori, realizovali smo autentičan redizajn IDEA marketa kojima smo udahnuli novi identitet. Pokazali smo da kupovina, kao svakodnevna društvena aktivnost, može postojati sa jasno izraženom dozom umjetnosti i kulture. Renovirani objekat predstavlja harmoničan spoj tradicionalne lokalne arhitekture i moderne minimalističke estetike.",
      projectDescEn: "Located in the heart of Kolašin, one of Montenegro's fastest-growing tourist destinations, we brought an authentic redesign to the IDEA store, giving it a new identity. We've successfully shown that shopping as an everyday social activity can be executed with clearly expressed dose of art and culture. The renovated object harmoniously blends traditional local architecture with modern minimalist aesthetics.",
      listMn: ["Idejno rješenje eksterijera i enterijera", "Kreativnu direkciju", "Art direkciju", "Dizajn & layout", "Dizajn vizuelnih elemenata", "Objekte primijenjene umjetnosti"],
      listEn: ["Concept design for exterior and interior", "Creative direction", "Art direction", "Design & layout", "Visual element design", "Applied art objects"],
      team: [],
      paragraphsMn: [
        "Objekat, kao sastavni dio razvoja Kolašina u prepoznatljivu turističku destinaciju, pojačava prisutnost brenda na lokalnom tržištu i služi kao primjer kako dizajn može nadmašiti svoju osnovnu funkciju i postati medij umjetničkog izražavanja. Kroz kreativnu i art direkciju razvili smo cjeloviti vizuelno-prostorni narativ - od pažljivo odabranih materijala i ritma unutrašnjih formi, preko autorskih objekata primijenjene umjetnosti koji unose karakter i toplinu, do grafičkih intervencija koje prostor povezuju sa identitetom brenda.",
        "Redizajn eksterijera naglašava prepoznatljivost objekta unutar urbane strukture Kolašina, dok enterijer stvara intuitivno i prijatno okruženje koje jasno diferencira funkcionalne zone kroz estetska rješenja. Rezultat je prostor koji podiže svijest o ulozi dizajna i umjetnosti u svakodnevnom životu.",
      ],
      paragraphsEn: [
        "As an integral part of Kolašin's development into a recognized tourist destination, the building strengthens the brand's presence in the local retail market and serves as an example of how design can transcend its basic function to become a medium of artistic expression.",
        "The exterior redesign emphasizes the building's distinctiveness within the urban fabric of Kolašin, while the interior creates an intuitive and welcoming environment that clearly differentiates functional zones through aesthetic solutions. The result is a space that raises awareness of the role of design and art in everyday life.",
      ],
      mainProjectImg: "/idea/idea1.jpg",
      mainBannerImg: "/idea/idea1.jpg",
      galleryImages: [
        { src: "/idea/idea34.jpg", alt: "1", width: 1200, height: 800 },
        { src: "/idea/idea5.jpg", alt: "2", width: 1200, height: 800 },
        { src: "/idea/idea6.jpg", alt: "3", width: 1200, height: 800 },
        { src: "/idea/idea7.jpg", alt: "4", width: 1200, height: 800 },
        { src: "/idea/idea8.jpg", alt: "5", width: 1200, height: 800 },
        { src: "/idea/idea9.jpg", alt: "6", width: 1200, height: 800 },
        { src: "/idea/idea10.jpg", alt: "7", width: 1200, height: 800 },
        { src: "/idea/idea11.jpg", alt: "8", width: 1200, height: 800 },
        { src: "/idea/idea12.jpg", alt: "9", width: 1200, height: 800 },
        { src: "/idea/idea13.jpg", alt: "10", width: 1200, height: 800 },
        { src: "/idea/idea14.jpg", alt: "11", width: 1200, height: 800 },
        { src: "/idea/idea15.jpg", alt: "12", width: 1200, height: 800 },
        { src: "/idea/idea4.jpg", alt: "13", width: 1200, height: 800 },
        { src: "/idea/idea2.jpg", alt: "14", width: 1200, height: 800 },
      ],
      sliderImages: null,
      galleryLayout: [
        { layout: "one", indices: { index3: 13 }, spacing: "pb-2" },
        { layout: "four", indices: { index1: 0, index2: 0 }, spacing: "pb-15" },
        { layout: "one", indices: { index3: 1 }, spacing: "pb-15" },
        { layout: "one", indices: { index3: 2 }, spacing: "pb-15" },
        { layout: "four", indices: { index1: 12, index2: 4 }, spacing: "pb-15", customHeight: "lg:h-[85vh]" },
        { layout: "four", indices: { index1: 5, index2: 6, index3: 7 }, spacing: "pb-2" },
        { layout: "four", indices: { index1: 8, index2: 9 }, spacing: "pb-2", customHeight: "lg:h-screen" },
        { layout: "four", flexNum: 2, indices: { index1: 10, index2: 11 }, spacing: "pb-2" },
      ],
      categoryId: catDigital.id,
    },
  });

  console.log("Projekti upisani.");

  // --- Blogovi ---

  await prisma.blog.upsert({
    where: { slug: "brskut" },
    update: {},
    create: {
      slug: "brskut",
      titleMn: "Brskut – Tradicionalno i savremeno.",
      titleEn: "Brskut – Traditional and contemporary.",
      subtitleMn: "Brskut je brend koji spaja tradiciju i inovaciju u organskim delicijama i prirodnim proizvodima iz Crne Gore. Naš tim je kreirao kompletan identitet – od imena i ambalaže do digitalnog prostora – kako bi svaki proizvod postao priča o ukusu, kvalitetu i emociji.",
      subtitleEn: "Brskut is a brand that blends tradition and innovation in organic delicacies and natural products from Montenegro. Our team created a complete identity – from the name and packaging to the digital space – so that each product becomes a story about taste, quality, and emotion.",
      date: "28.08.2025",
      bannerImage: "/brskut/Brskut0.jpg",
      sections: [
        {
          paragraphsMn: [
            "Brskut je crnogorski brend organskih delikatesa i prirodnih proizvoda koji spajaju tradiciju i inovaciju. Njihova ponuda – od džemova i meda, preko sirupa, rakija i turšija, do suhomesnatih proizvoda i prirodne kozmetike – svaki artikal čini malim ambasadorom ukusa i mirisa Crne Gore. Iako raznolika, njihova priča ima zajednički imenitelj: prirodnost, pažnja i domaći ukus.",
            "Naš zadatak bio je da tu raznolikost pretočimo u prepoznatljiv vizuelni identitet. Krenuli smo od samog imena, razvili kreativni pravac i art direkciju, oblikovali branding i dizajn ambalaže, ilustrovali motive koji prate proizvode, osmislili komunikaciju kroz riječi i kreirali digitalni prostor – web sajt koji sve povezuje u jednu cjelinu.",
            "U procesu smo razmišljali o tome kako tradiciju predstaviti kroz savremen dizajn, kako bogatstvo domaćih recepata i sastojaka dobije vizuelni izraz koji je jednako snažan kao i sam proizvod.",
          ],
          paragraphsEn: [
            "Brskut is a Montenegrin brand of organic delicacies and natural products that combines tradition and innovation. Their range – from jams and honey to syrups, brandy, pickles, cured meat products, and natural cosmetics – makes each item a small ambassador of the taste and scent of Montenegro.",
            "Our task was to translate this diversity into a recognizable visual identity. We started with the name itself, developed the creative and art direction, shaped the branding and packaging design, illustrated the motifs that accompany the products, devised the verbal communication, and created a digital space – a website that brings everything together.",
            "In the process, we considered how to present tradition through modern design, and how to give the wealth of domestic recipes and ingredients a visual expression as strong as the products themselves.",
          ],
          images: [
            { src: "/brskut/Brskut1.jpg", alt: "1", width: 400, height: 800 },
            { src: "/brskut/Brskut2.jpg", alt: "2", width: 400, height: 800 },
          ],
          sliderImages: [],
          secondaryImages: [],
        },
        {
          paragraphsMn: [
            "Brskut pokazuje kako dizajn može biti most između prošlosti i budućnosti, između tradicije i inovacije. Pažljivo oblikovana strategija, kreativni impuls i promišljena naracija zajedno stvaraju vizuelni identitet koji je više od estetike – on postaje iskustvo, gradi povjerenje i prenosi vrijednosti brenda na iskren i savremen način.",
            "Za nas je Brskut podsjetnik zašto radimo ono što radimo: da pomažemo ambicioznim brendovima da rastu, izraze se i pronađu svoje mjesto na tržištu, ostavljajući utisak koji traje.",
          ],
          paragraphsEn: [
            "Brskut shows how design can be a bridge between past and future, between tradition and innovation. A carefully designed strategy, creative impulse, and thoughtful narrative together create a visual identity that is more than just aesthetics – it becomes an experience, builds trust, and conveys brand values in an honest and contemporary way.",
            "For us, Brskut is a reminder of why we do what we do: to help ambitious brands grow, express themselves, and find their place in the market – leaving a lasting impression.",
          ],
          images: [
            { src: "/brskut/Brskut3.jpg", alt: "3", width: 400, height: 800 },
            { src: "/brskut/Brskut4.jpg", alt: "4", width: 400, height: 800 },
          ],
          sliderImages: [
            { src: "/brskut/Brskut5.jpg", alt: "1", width: 400, height: 800 },
            { src: "/brskut/Brskut6.jpg", alt: "2", width: 400, height: 800 },
            { src: "/brskut/Brskut7.jpg", alt: "3", width: 400, height: 800 },
          ],
          secondaryImages: [
            { src: "/brskut/Brskut8.jpg", alt: "1", width: 400, height: 800 },
          ],
        },
      ],
    },
  });

  await prisma.blog.upsert({
    where: { slug: "histora" },
    update: {},
    create: {
      slug: "histora",
      titleMn: "Histora – Koračamo u budućnost stazama prošlosti",
      titleEn: "Histora – Stepping into the Future, Following the Trails of the Past",
      subtitleMn: "Histora je specijalizovani studio savremene muzeografije koji povezuje prošlost i budućnost kroz inovativne pristupe očuvanju i prezentaciji kulturnog naslijeđa.",
      subtitleEn: "Histora is a specialized studio of modern museography which combines history and the future through innovative approaches to the conservation and the presentation of cultural heritage.",
      date: "28.08.2025",
      bannerImage: "/histora/histora0.jpg",
      sections: [
        {
          titleMn: "Kultura i muzeji – naslijeđe koje komunicira savremenim jezikom",
          titleEn: "Culture and museums – heritage communicating through a modern language",
          mainDescriptionMn: "Histora studio svojim klijentima nudi širok spektar usluga, osiguravajući sveobuhvatan pristup u svakom segmentu očuvanja, prezentacije i valorizacije kulturnog naslijeđa.",
          mainDescriptionEn: "Histora studio offers its clients a wide spectrum of services, securing a comprehensive approach to every segment of preservation and cultural heritage valorisation.",
          paragraphsMn: [
            "Histora je posvećena ideji da kulturne, istorijske i edukativne priče prenosi na inovativan način, transformišući muzeje, izložbe i kulturne lokalitete u angažovane prostore u kojima posjetioci postaju aktivni učesnici. Svaka tura, svaki interaktivni sadržaj osmišljeni su da stimulišu sva čula, čineći posjetu nezaboravnim, multisenzornim iskustvom.",
            "Metodologija koju primjenjuju integriše estetsku, funkcionalnu i tehničku preciznost, spajajući arhitektonski, izložbeni i grafički dizajn sa novim medijima i naprednim digitalnim tehnologijama.",
          ],
          paragraphsEn: [
            "Histora is committed to the idea of presenting stories in an innovative manner, transforming museums, exhibitions and cultural sites into dynamic, engaging spaces in which visitors become active participants. Each tour and each interactive content is designed to stimulate all senses, making the visit an unforgettable experience.",
            "The methodology applied integrates aesthetic, functional and technical precision, combining architectural, exhibition and graphic design with new media and advanced digital technologies.",
          ],
          images: [{ src: "/histora/histora_slika.png", alt: "Histora" }],
          sliderImages: [],
          secondaryImages: [],
        },
        {
          titleMn: "Okruženje i turizam – kreativna interpretacija kulturnog pejzaža",
          titleEn: "Environment and tourism – creative interpretation of the cultural landscape",
          paragraphsMn: [
            "Fokusirajući se na očuvanje životne sredine kroz održivi turizam, Histora povezuje lokalni identitet sa inovativnim pristupima u interpretaciji prirodne baštine. Kroz interaktivna iskustva, posjetioci stiču dublje razumijevanje okoline.",
            "Inspirisani globalnim trendovima i dubokim razumijevanjem uloge muzeja u savremenom društvu, Kata Design studio kreirao je potpuno novi komunikacioni sistem i vizuelni identitet za ovaj pionirski iskorak na prostoru Crne Gore.",
          ],
          paragraphsEn: [
            "Histora links local identity with innovative approaches to cultural heritage interpretation by focusing on environmental preservation through sustainable tourism. Through interactive experiences, visitors gain a deeper understanding of the environment.",
            "Inspired by global trends and a profound understanding of the roles of museums in modern society, Kata Design Studio has developed an entirely new communication system and visual identity for this pioneering step forward in Montenegro.",
          ],
          images: [],
          sliderImages: [],
          secondaryImages: [],
        },
      ],
    },
  });

  console.log("Blogovi upisani.");
  console.log("Seed završen.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
