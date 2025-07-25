import Services from "@/components/Services";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import React from "react";

const ServicesPage = () => {
  return (
    <PagesWrapper title="Services">
      <h2>
        Kata studio razvija kompletna vizuelna rješenja od ideje do realizacije,
        sa fokusom na:
      </h2>
      <div>
        <Services />
      </div>
    </PagesWrapper>
  );
};

export default ServicesPage;
