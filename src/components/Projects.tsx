import proyectoPortfolio from '../assets/proyecto_portfolio.jpg?url';
import proyectoDubivo from "../assets/proyecto_dubivo.jpg?url";
import proyectoHazas from "../assets/proyecto_hazas.jpg?url";

function Projects() {
  return (
    <section id="projects" className="mt-5 p-10 space-y-8 max-w-6xl mx-auto scroll-mt-16" data-aos="fade-right">

      <h1 className="text-3xl font-bold mb-6 text-center">Mis Proyectos</h1>

      <a href="https://github.com/marinabasallo98/portfolio.git" className="group block flex flex-col lg:flex-row items-center bg-base-100 border border-transparent hover:border-accent transition-colors duration-300 overflow-hidden" data-aos="fade-left">
        <figure className="w-full lg:w-1/3 h-36 overflow-hidden">
          <img
            src={proyectoPortfolio}
            alt="Portfolio"
            className="w-full h-full object-cover" />
        </figure>
        <div className="card-body lg:w-2/3 p-4">
          <h2 className="card-title text-lg px-4 font-bold group-hover:text-accent transition-colors duration-300">Página web de portfolio</h2>
          <p className="mt-1 text-sm text-base-content px-4 line-clamp-3">
            Esta página web de tipo SPA ha sido diseñada con React, Tailwind CSS y DaisyUI como muestra de mis habilidades como desarrolladora web.
          </p>
        </div>
      </a>

      <a href="https://github.com/marinabasallo98/Dubivo_ProyectoFinal_MFB.git" className="group block flex flex-col lg:flex-row-reverse items-center bg-base-100 border border-transparent hover:border-secondary transition-colors duration-300 overflow-hidden" data-aos="fade-right">
        <figure className="w-full lg:w-1/3 h-36 overflow-hidden" >
          <img
            src={proyectoDubivo}
            alt="Dubivo"
            className="w-full h-full object-cover" />
        </figure>
        <div className="card-body lg:w-2/3 p-4">
          <h2 className="card-title text-lg px-4 font-bold group-hover:text-secondary transition-colors duration-300">Dubivo</h2>
          <p className="mt-1 text-sm text-base-content px-4 line-clamp-3">
            Aplicación web para facilitar la búsqueda de actores de doblaje para directores y clientes independientes. Desarrollado con Laravel, PHP, JavaScript y TailwindCSS.
          </p>
        </div>
      </a>

      <a href="#" className="group block flex flex-col lg:flex-row items-center bg-base-100 border border-transparent hover:border-accent transition-colors duration-300 overflow-hidden" data-aos="fade-left">
        <figure className="w-full lg:w-1/3 h-36 overflow-hidden">
          <img
            src={proyectoHazas}
            alt="Hazas de la Suerte"
            className="w-full h-full object-cover" />
        </figure>
        <div className="card-body lg:w-2/3 p-4">
          <h2 className="card-title text-lg px-4 font-bold group-hover:text-accent transition-colors duration-300">Hazas de la Suerte</h2>
          <p className="mt-1 text-sm text-base-content px-4 line-clamp-3">
            Aplicación web para ordenar y facilitar el sorteo de las Hazas de la Suerte de Barbate. Desarrollado con Laravel y CSS nativo.
          </p>
        </div>
      </a>

    </section>
  );
}
export default Projects;
