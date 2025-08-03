import Image from "next/image";
import Image1 from "../assets/pexels-1.jpg";
import Image2 from "../assets/pexels-2.jpg";
import Image3 from "../assets/pexels-3.jpg";
import Image4 from "../assets/pexels-4.jpg";
import Image5 from "../assets/pexels-5.jpg";
import Image6 from "../assets/pexels-6.jpg";

const GalleryHover = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <div className="flex overflow-hidden h-[400px]">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-1 overflow-hidden transition-all duration-500 hover:flex-[3]"
        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={500}
            height={400}
            unoptimized
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryHover;
