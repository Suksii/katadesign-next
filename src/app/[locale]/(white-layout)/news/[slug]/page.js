import Slider from "@/components/Slider";
import Image from "next/image";
import React from "react";

const SingleBlog = () => {
  const blog = {
    title: "Brskut – Tradicionalno i savremeno.",
    subtitle:
      "Brskut je brend koji spaja tradiciju i inovaciju u organskim delicijama i prirodnim proizvodima iz Crne Gore. Naš tim je kreirao kompletan identitet – od imena i ambalaže do digitalnog prostora – kako bi svaki proizvod postao priča o ukusu, kvalitetu i emociji.",
    main_paragraphs: [
      "Brskut je crnogorski brend organskih delikatesa i prirodnih proizvoda koji spajaju tradiciju i inovaciju. Njihova ponuda – od džemova i meda, preko sirupa, rakija i turšija, do suhomesnatih proizvoda i prirodne kozmetike – svaki artikal čini malim ambasadorom ukusa i mirisa Crne Gore. Iako raznolika, njihova priča ima zajednički imenitelj: prirodnost, pažnja i domaći ukus.",
      "Naš zadatak bio je da tu raznolikost pretočimo u prepoznatljiv vizuelni identitet. Krenuli smo od samog imena, razvili kreativni pravac i art direkciju, oblikovali branding i dizajn ambalaže, ilustrovali motive koji prate proizvode, osmislili komunikaciju kroz riječi i kreirali digitalni prostor – web sajt koji sve povezuje u jednu cjelinu. Svaki sloj dizajna građen je s namjerom da naglasi prirodni kvalitet i posebnost proizvoda, ali i da stvori emotivnu povezanost sa ljudima, pričajući priču o autentičnom ukusu Crne Gore.",
      "Brskut pokazuje kako dizajn može biti most između prošlosti i budućnosti, između tradicije i inovacije. Pažljivo oblikovana strategija, kreativni impuls i promišljena naracija zajedno stvaraju vizuelni identitet koji je više od estetike – on postaje iskustvo, gradi povjerenje i prenosi vrijednosti brenda na iskren i savremen način. ",
    ],
    paragraphs: [
      "U procesu smo razmišljali o tome kako tradiciju predstaviti kroz savremen dizajn, kako bogatstvo domaćih recepata i sastojaka dobije vizuelni izraz koji je jednako snažan kao i sam proizvod. Ambalaža i ilustracije postale su produžetak priče o zemlji iz koje brend dolazi, dok je digitalna platforma osmišljena da korisnicima pruži intuitivno i estetski privlačno iskustvo.",
      "Za nas je Brskut podsjetnik zašto radimo ono što radimo: da pomažemo ambicioznim brendovima da rastu, izraze se i pronađu svoje mjesto na tržištu, ostavljajući utisak koji traje.",
    ],
    banner_image: { src: "/1.jpg", alt: "1", width: 400, height: 800 },
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
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-full aspect-video">
        <Image
          src={blog.banner_image}
          alt="Placeholder"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center py-12">
        <h2 className="text-center">{blog.title}</h2>
        <h3 className="w-full md:w-2/3 pb-24 text-center text-3xl text-gray-500 italic">
          {blog.subtitle}
        </h3>
        <div className="flex flex-col gap-8 w-full md:w-1/2 mx-auto">
          {blog.main_paragraphs.map((p, index) => (
            <p key={index} className="text-xl">
              {p}
            </p>
          ))}
          <div className="flex gap-4 mt-12">
            {blog.main_images.map((image) => (
              <div key={image.alt} className="relative w-full h-[500px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {blog.paragraphs.map((p, index) => (
            <p key={index} className="text-xl">
              {p}
            </p>
          ))}
          <Slider images={blog.slider_images} slidesToShow={2} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
