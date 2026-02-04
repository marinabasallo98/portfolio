import bgHero from '../assets/bg-hero.jpg'

function Home() {
  return (
    <section id="home" data-aos="fade-up" className="scroll-mt-16">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${bgHero})`
        }}
      >
        <div className="hero-overlay bg-black/50"></div>
        <div className="hero-content text-neutral-content text-left items-start justify-start">
          <div className="max-w-2xl lg:max-w-3xl text-left">
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold">
              Hola, mi nombre es Marina.
              Soy desarrolladora web full-stack.</h1>
            <p className="mb-5 text-lg max-w-xl">
              Desarrollo aplicaciones web modernas con React, Laravel y Tailwind,
              enfocadas en experiencia de usuario y código limpio.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="
    px-4 py-2
    rounded-s-sm
    font-medium
    text-white
    bg-[#2A9D8F]
    border border-[#2A9D8F]
    hover:bg-[#70BFB5]
    hover:border-[#70BFB5]
    focus:outline-none
    focus:ring-2 focus:ring-[#2A9D8F]/40
    transition-colors duration-200
    shadow
  ">
                Ver mis proyectos
              </a>
              <a
                href="/CV_FERNANDEZBASALLO_MARINA_2025_ESP.pdf" download
                className="
    px-4 py-2
    rounded-s-sm
    font-medium
    text-white
    bg-[#2A9D8F]
    border border-[#2A9D8F]
    hover:bg-[#70BFB5]
    hover:border-[#70BFB5]
    focus:outline-none
    focus:ring-2 focus:ring-[#2A9D8F]/40
    transition-colors duration-200
    shadow
  " >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;