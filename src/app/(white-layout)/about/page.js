import PagesWrapper from "@/components/wrappers/PagesWrapper";
import React from "react";

const AboutPage = () => {
  return (
    <PagesWrapper title="About">
      <div>
        <h2>
          Kreiramo brendove, oblikujemo vizuelne sisteme i gradimo digitalna
          iskustva koja ostavljaju trag.
        </h2>
        <p className="tracking-wide text-lg leading-8">
          Kata studio je savremeni dizajn studio koji razvija vizuelne
          identitete, digitalne proizvode i prostorne sisteme za brendove,
          autore, institucije i kulturni sektor širom svijeta.
          <br />
          Naš pristup zasnovan je na funkcionalnom dizajnu i preciznom
          razumijevanju ekosistema u kojima brendovi i projekti pronalaze svoje
          mjesto. Vjerujemo da promišljen i upečatljiv dizajn gradi povjerenje,
          izaziva emocije i povezuje ljude s idejom.
          <br />
          Povezujući strategiju, narativ i tehnologiju, razvijamo fleksibilne i
          promišljene dizajnerske sisteme koji funkcionišu kroz različite
          formate, kanale i kontekste i čine osnovu našeg vizuelnog izraza.
          <br />
          Kao tim posvećen oblikovanju i realizaciji ideja, razvijamo digitalna
          iskustva koja povezuju potrebe klijenata sa savremenim tokovima u
          dizajnu i inovacijama, stvarajući rješenja koja su estetski relevantna
          i funkcionalno održiva.
          <br />
          Kroz svaki projekat stvaramo komunikaciju koja se pamti.
        </p>
      </div>
    </PagesWrapper>
  );
};

export default AboutPage;
