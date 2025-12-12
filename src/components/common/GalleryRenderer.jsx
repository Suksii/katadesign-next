import CustomGallery from "../CustomGallery";

const GalleryRenderer = ({ gallery, layoutConfig }) => {
  if (!layoutConfig || layoutConfig.length === 0) {
    return null;
  }

  return (
    <>
      {layoutConfig.map((config, idx) => {
        const requiredIndices = Object.values(config.indices || {}).filter(
          (val) => val !== null && val !== undefined
        );

        const hasAllImages = requiredIndices.every(
          (index) => gallery && gallery[index]
        );

        if (!hasAllImages) {
          return null;
        }

        return (
          <section key={idx} className={config.spacing || "pb-2"}>
            <CustomGallery
              gallery={gallery}
              layout={config.layout || "one"}
              type={config.type || "normal"}
              flexNum={config.flexNum || 1}
              {...config.indices}
            />
          </section>
        );
      })}
    </>
  );
};

export default GalleryRenderer;
