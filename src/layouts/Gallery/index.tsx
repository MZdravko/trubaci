"use client";

import { GalleryCard } from "@/components";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import { useWindowSize } from "@/hooks";
import cn from "@/lib/cn";
import { useEffect, useState } from "react";

const galleryImages = [
  "/images/gallery/1.webp",
  "/images/gallery/2.webp",
  "/images/gallery/3.webp",
  "/images/gallery/4.webp",
  "/images/gallery/5.webp",
  "/images/gallery/6.webp",
  "/images/gallery/7.webp",
  "/images/gallery/8.webp",
  "/images/gallery/9.webp",
  "/images/gallery/10.webp",
  "/images/gallery/11.webp",
  "/images/gallery/12.webp",
  "/images/gallery/13.webp",
  "/images/gallery/14.webp",
  "/images/gallery/15.webp",
  "/images/gallery/16.webp",
  "/images/gallery/17.webp",
  "/images/gallery/18.webp",
  "/images/gallery/19.webp",
  "/images/gallery/20.webp",
  "/images/gallery/21.webp",
  "/images/gallery/22.webp",
  "/images/gallery/23.webp",
  "/images/gallery/24.webp",
  "/images/gallery/25.webp",
  "/images/gallery/26.webp",
  "/images/gallery/27.webp",
  "/images/gallery/28.webp",
  "/images/gallery/29.webp",
  "/images/gallery/30.webp",
  "/images/gallery/31.webp",
];

const Gallery = () => {
  const [imagePreviewSrc, setImagePreviewSrc] = useState("");

  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const { width } = useWindowSize({ width: 9999 });

  const handleImagePreviewNavigation = (nextImage: boolean) => {
    const currentImgIndex = galleryImages.findIndex(
      (img) => img === imagePreviewSrc
    );

    let nextImgIndex = null;

    if (nextImage) {
      nextImgIndex = (currentImgIndex + 1) % galleryImages.length;
    } else {
      nextImgIndex =
        (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
    }

    setImagePreviewSrc(galleryImages[nextImgIndex]);
  };

  useEffect(() => {
    if (width && width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <section id="#galerija" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mt-4 uppercase text-primary">
            Galerija
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg">
            Vizuelno putovanje kroz naše najupečatljivije događaje
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages
            .slice(
              0,
              isMobile && !showAll
                ? galleryImages.length / 2
                : galleryImages.length
            )
            .map((imgSrc) => (
              <GalleryCard
                onClick={() => setImagePreviewSrc(imgSrc)}
                key={imgSrc}
                src={imgSrc}
              />
            ))}
          <ImagePreviewModal
            src={imagePreviewSrc}
            showModal={!!imagePreviewSrc}
            onClose={() => setImagePreviewSrc("")}
            onNext={() => handleImagePreviewNavigation(true)}
            onPrev={() => handleImagePreviewNavigation(false)}
          />
        </div>

        <button
          onClick={() => setShowAll((prev) => !prev)}
          className={cn(
            "bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border-2 border-white hover:border-transparent rounded-full mx-auto mt-5 block",
            !isMobile && "hidden"
          )}
        >
          {showAll ? "Prikaži manje" : "Prikaži sve"}
        </button>
      </div>
    </section>
  );
};

export default Gallery;
