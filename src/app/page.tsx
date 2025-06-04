import { GalleryCard, TrubaIcon } from "@/components";

const galleryImages = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
];

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center py-3">
        <nav className="flex gap-4 text-white">
          <a href="#" className="hover:text-yellow-400">
            Početna
          </a>
          <a href="#" className="hover:text-yellow-400">
            O Nama
          </a>
          <a href="#" className="hover:text-yellow-400">
            Galerija
          </a>
          <a href="#" className="hover:text-yellow-400">
            Kontakt
          </a>
        </nav>
      </header>

      <main className="h-full">
        <div className="-mt-12 h-dvh bg-center bg-no-repeat bg-cover bg-[url(https://www.dejanpetrovic.com/wp-content/uploads/089B2670.jpg)]">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              Welcome to Our Awesome Website
            </h1>
            <p className="text-lg text-white mb-8">
              Discover amazing features and services that await you.
            </p>
          </div>
        </div>

        <div className="min-h-[300px] parallax bg-[url(https://www.dejanpetrovic.com/wp-content/uploads/356211773_857817135705281_1178315569457812968_n-21-1.webp)]" />

        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 text-white">
            <h2 className="text-3xl md:text-4xl text-center text-primary font-bold mb-5">
              Muzika koja pokreće svet!
            </h2>
            <p className="text-center mb-5">
              U vrtlogu dobrih vibracija upoznajte muziku Srbije i Balkana koja
              ostavlja bez daha i reči, a
            </p>
            <p className="text-center mb-5">
              “Onde gde prestaju reči, onde počinje muzika”…
            </p>
            <div className="flex justify-center gap-10">
              <div className="flex gap-2">
                <TrubaIcon className="size-11" />
                <div>
                  <div>Najbolji orkestar</div>
                  <div>1998, 2000, 2003, 2010</div>
                </div>
              </div>
              <div className="flex gap-2">
                <TrubaIcon className="size-11" />
                <div>
                  <div>Najbolji orkestar</div>
                  <div>1998, 2000, 2003, 2010</div>
                </div>
              </div>
              <div className="flex gap-2">
                <TrubaIcon className="size-11" />
                <div>
                  <div>Najbolji orkestar</div>
                  <div>1998, 2000, 2003, 2010</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="min-h-[300px] parallax bg-[url(https://www.dejanpetrovic.com/wp-content/uploads/369632351_874757104011284_5870771341747358899_n-21.jpg)]" />

        <section className="bg-black">
          <div className="container relative flex mx-auto px-6">
            <div className="flex-1 bg-center bg-contain bg-[url(https://www.dejanpetrovic.com/wp-content/uploads/Dejan-Petrovic-045-1.webp)]" />
            <div className="flex-1 flex flex-col justify-center text-white min-h-[80dvh] ml-10 mr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                <span className="text-primary">O</span> NAMA
              </h2>
              <div className="mb-5 font-semibold text-primary text-sm uppercase">
                Ukratko o nama
              </div>
              <div>
                Ako negde čujete melodije poznatih svetskih hitova, isprepletene
                motivima srpske izvorne muzike, a sve sjajno ukomponovano u
                jednu celinu, znaćete da je to Dejan Petrovic Big Band.
                Prepoznatljivi zvuci truba, gitare i dobar “groove” su lična
                karta ovog benda.
              </div>
            </div>
          </div>
        </section>

        <div className="min-h-[300px] parallax bg-[url(https://www.dejanpetrovic.com/wp-content/uploads/DSC474211.jpg)]" />

        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center text-white mb-16">
              <span className="text-primary font-semibold">OUR GALLERY</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Captured Moments
              </h2>
              <p className="max-w-2xl mx-auto mt-6 text-lg">
                A visual journey through our most memorable events and projects
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((imgSrc) => (
                <GalleryCard key={imgSrc} src={imgSrc} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
