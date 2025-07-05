"use client";

import { AwardCard, GalleryCard } from "@/components";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import VideoPlayOverlay from "@/components/VideoPlayOverlay";
import { useClickOutside } from "@/hooks";
import cn from "@/lib/cn";
import Image from "next/image";
import { useEffect, useState } from "react";

type Section = "pocetna" | "o_nama" | "galerija" | "kontakt";

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

const sections: Array<{ id: Section; label: string }> = [
  {
    id: "pocetna",
    label: "POCETNA",
  },
  {
    id: "o_nama",
    label: "O NAMA",
  },
  {
    id: "galerija",
    label: "GALERIJA",
  },
  {
    id: "kontakt",
    label: "KONTAKT",
  },
];

const awards = [
  {
    title: "Najbolji orkestar",
    body: "1998, 2000, 2003, 2010",
  },
  {
    title: "Najbolji orkestar",
    body: "1998, 2000, 2003, 2010",
  },
  {
    title: "Najbolji orkestar",
    body: "1998, 2000, 2003, 2010",
  },
];

export default function Home() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("pocetna");

  const [imagePreviewSrc, setImagePreviewSrc] = useState("");

  const mobileMenuRef = useClickOutside(() => setIsOpenMobileMenu(false));

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
    document.getElementById(`#${activeSection}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeSection]);

  return (
    <>
      <nav className="absolute top-0 z-50 w-full">
        <div
          className={`absolute sm:hidden pointer-events-none top-0 bg-black/40 -z-50 w-full h-dvh ${
            isOpenMobileMenu ? "block" : "opacity-0"
          }`}
        />

        <div ref={mobileMenuRef}>
          <div
            className={cn(
              "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 transition-colors delay-200",
              isOpenMobileMenu && "delay-0 bg-black"
            )}
          >
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-hidden"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setIsOpenMobileMenu((prev) => !prev)}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  {isOpenMobileMenu ? (
                    <svg
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:block">
                  <div className="flex gap-4">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        id={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={cn(
                          "cursor-pointer font-dosis tracking-widest font-medium px-3 py-2 text-2xl text-white hover:text-primary/80",
                          activeSection === section.id &&
                            "text-primary hover:text-primary"
                        )}
                        aria-current="page"
                      >
                        {section.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`sm:hidden transition-all bg-black duration-300 ease-in-out overflow-hidden
            ${isOpenMobileMenu ? "h-[192px]" : "h-0"}
            `}
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  id={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsOpenMobileMenu(false);
                  }}
                  className={cn(
                    "block font-dosis tracking-widest rounded-md px-3 py-2 text-base font-medium text-white hover:text-primary/70",
                    activeSection === section.id &&
                      "text-primary hover:text-primary"
                  )}
                  aria-current="page"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="h-full">
        <div
          id="#pocetna"
          className="relative h-dvh bg-center bg-no-repeat bg-cover bg-[url(/images/pocetna.webp)]"
        >
          <div className="bg-[#1A1A1A] opacity-50 size-full absolute pointer-events-none" />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-4xl md:text-5xl text-white uppercase leading-tight mb-4 font-dosis tracking-widest text-shadow-[0px_0px_10px_rgba(0,0,0,0.6)]">
              Orkestar <span className="text-primary">Veljka Vasiljkovića</span>
            </h1>
            <p className="text-lg uppercase text-white mb-8 px-4">
              Očuvanje trubačke tradicije u savremenom dobu
            </p>
            <VideoPlayOverlay />
          </div>
          <div className="mouse-icon">
            <svg
              width="19"
              height="30"
              viewBox="0 0 19 30"
              fill="none"
              opacity="0.7"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.875 20.625V9.375C16.875 7.38588 16.0848 5.47822 14.6783 4.0717C13.2718 2.66518 11.3641 1.875 9.375 1.875C7.38588 1.875 5.47822 2.66518 4.0717 4.0717C2.66518 5.47822 1.875 7.38588 1.875 9.375V20.625C1.875 22.6141 2.66518 24.5218 4.0717 25.9283C5.47822 27.3348 7.38588 28.125 9.375 28.125C11.3641 28.125 13.2718 27.3348 14.6783 25.9283C16.0848 24.5218 16.875 22.6141 16.875 20.625ZM9.375 0C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 0 6.8886 0 9.375V20.625C0 23.1114 0.98772 25.496 2.74587 27.2541C4.50403 29.0123 6.8886 30 9.375 30C11.8614 30 14.246 29.0123 16.0041 27.2541C17.7623 25.496 18.75 23.1114 18.75 20.625V9.375C18.75 6.8886 17.7623 4.50403 16.0041 2.74587C14.246 0.98772 11.8614 0 9.375 0Z"
                fill="white"
                className="mouse"
              ></path>
              <path
                d="M10.0379 7.39959C9.8621 7.22377 9.62364 7.125 9.375 7.125C9.12636 7.125 8.8879 7.22377 8.71209 7.39959C8.53627 7.5754 8.4375 7.81386 8.4375 8.0625V11.8125C8.4375 12.0611 8.53627 12.2996 8.71209 12.4754C8.8879 12.6512 9.12636 12.75 9.375 12.75C9.62364 12.75 9.8621 12.6512 10.0379 12.4754C10.2137 12.2996 10.3125 12.0611 10.3125 11.8125V8.0625C10.3125 7.81386 10.2137 7.5754 10.0379 7.39959Z"
                fill="white"
                className="cursor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="min-h-[300px] hidden sm:block parallax grayscale bg-[url(/images/parallax1.webp)]" />

        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 text-white">
            <h2 className="text-3xl md:text-5xl uppercase text-center text-primary font-bold mb-5">
              Muzika koja ne poznaje granice!
            </h2>
            <p className="text-center mb-4">
              U ritmu pozitivnih vibracija doživite muziku Balkana i Srbije -
              zvukove koji oduzimaju dah, a
            </p>
            <p className="text-center italic mb-8">
              “Onde gde prestaju reči, onde počinje muzika”…
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              {awards.map((award, i) => (
                <AwardCard key={i} title={award.title} body={award.body} />
              ))}
            </div>
          </div>
        </section>

        <div className="min-h-[300px] hidden sm:block parallax grayscale bg-[url(/images/parallax2.webp)]" />

        <section id="#o_nama" className="bg-black">
          <div className="container relative flex flex-col md:flex-row mx-auto py-10 px-6">
            <div className="flex-1 bg-center bg-contain bg-no-repeat min-h-dvw md:bg-auto md:min-h-auto bg-[url(/images/o_nama.webp)]" />
            <div className="flex-1 flex flex-col justify-center text-white md:min-h-[80dvh] md:mx-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                <span className="text-primary">O</span> NAMA
              </h2>
              <div className="mb-5 font-semibold text-primary text-sm uppercase">
                Ukratko o nama
              </div>
              <p className="mb-2">
                Mi smo Orkestar Veljka Vasiljkovića - spoj tradicije i
                savremenog zvuka. Naša muzika kombinuje ritmove savremenih
                hitova i autentične motive izvorne srpske muzike, stvarajući
                energiju koja pokreće. Sviramo sa srcem, bilo da je reč o
                svadbi, rođendanu, veselju, koncertu ili bilo kom posebnom
                trenutku.
              </p>
              <p>
                Truba je naš glas, ritam je naš pokretač, a zadovoljna publika -
                naša najveća nagrada. Ako želite muziku koja ostavlja utisak i
                diže atmosferu do vrhunca - tu smo. Pozovite nas i neka vaša
                proslava zasvira punim glasom.
              </p>
            </div>
          </div>
        </section>

        <div className="min-h-[300px] hidden sm:block parallax grayscale bg-[url(https://beogradtrubaci.com/logo/trubaci-beograd.jpg)]" />

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
              {galleryImages.map((imgSrc) => (
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
          </div>
        </section>
      </main>

      <footer
        id="#kontakt"
        className="relative bg-cover bg-[url(https://music.utk.edu/wp-content/uploads/2023/05/jazz-header.jpeg)]"
      >
        <div className="bg-[#1A1A1A] opacity-50 size-full absolute top-0 pointer-events-none" />

        <div className="relative container m-auto flex flex-col items-center justify-between py-20 px-6 text-white min-h-dvh">
          <div />
          <div className="flex flex-col">
            <h2 className="text-3xl uppercase md:text-5xl text-center text-primary font-bold mb-5">
              Kontaktirajte nas
            </h2>
            <a
              className="text-center font-bold font-sans text-4xl md:text-5xl mb-5"
              href="tel:+381631894031"
            >
              063 189 40 31
            </a>
            <p className="text-center font-bold text-2xl mb-5">
              Za vrhunske proslave uz trubu
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/instagram.webp"
                width={40}
                height={40}
                alt="insta logo"
              />
              <a
                className="font-semibold underline"
                href="https://www.instagram.com/beogradski_trubacki_orkestar"
              >
                @beogradski_trubacki_orkestar
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/youtube.webp"
                width={40}
                height={30}
                alt="insta logo"
              />
              <a
                className="font-semibold underline"
                href="https://www.youtube.com/@veljko-y6t9g"
              >
                YouTube channel
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
