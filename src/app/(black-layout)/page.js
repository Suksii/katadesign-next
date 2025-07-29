import TypewriterText from "@/components/Typewriter";
import Image from "next/image";

function HomePage() {
  return (
    <div className="min-h-[calc(100vh-288px)] flex flex-col md:justify-end relative pb-12">
      <div className="fixed top-0 right-0 -translate-y-[8%] translate-x-[40%] sm:-translate-y-[15%] md:-translate-y-[15%] lg:-translate-y-[42%] inset-0 z-0">
        <Image
          src="/3s_logo_crveni.png"
          alt="3s_logo_crveni"
          width={3543}
          height={1341}
        />
      </div>
      <h1 className="mb-12 md:mb-32">Who we are</h1>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <TypewriterText
          lines={["Design", "Global", "Agency."]}
          colors={["text-white", "text-white/85", "text-white/70"]}
        />
        <p className="flex-1 flex justify-end pt-16 md:pt-0 md:text-lg">
          Branding & Creative Direction / Product and Packaging,
          <br />
          Editorial & Photography / Digital Media & Animation /
          <br />
          Spatial Design & Experiential
        </p>
      </div>
      <p className="absolute right-0 bottom-2 border-r border-gray-500 text-xl pr-8 leading-12">
        What we do
      </p>
    </div>
  );
}

export default HomePage;
