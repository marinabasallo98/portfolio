import portfolioAbout from '../assets/portfolio-about.jpeg'

function About() {
    return (
        <section id="about" className="p-10 scroll-mt-16">
            <h1 className="text-3xl font-bold mb-8 text-center">Sobre mí</h1>

            <div className="mb-16 flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="lg:flex-1 text-left max-w-xl">
                    <p className="text-lg px-8 leading-relaxed text-justify">
                        Soy una apasionada del aprendizaje constante y los retos creativos,
                        y encuentro en la programación una forma de unir lógica,
                        comunicación y creatividad. Me desenvuelvo bien tanto en equipo como de forma autónoma.
                    </p>
                    <p className="text-lg px-8 leading-relaxed mt-4 text-justify">
                        En mi tiempo libre disfruto asistiendo a game jams y formándome en disciplinas como los idiomas, la edición de vídeo y el doblaje, que fortalecen mi atención al detalle, creatividad y comunicación.
                    </p>
                </div>
                <figure className="lg:flex-1 flex justify-center">
                    <img
                        src={portfolioAbout}
                        alt="Portfolio"
                        className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg"
                    />
                </figure>
            </div>

            <div className="mb-16 flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                    <div className="divider divider-primary">
                        <h2 className="text-2xl mb-3">Habilidades técnicas</h2>
                    </div>
                    <ul className="list-none">
                        <li className="before:content-['✓'] before:mr-2 before:text-purple-500">Lenguajes: HTML, CSS, JavaScript, TypeScript, Java, PHP, SQL</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-purple-500">Frameworks y librerías: Laravel, Angular, Tailwind CSS</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-purple-500">Gestión de bases de datos: MySQL</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-purple-500">Control de versiones: Git, GitHub</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-purple-500">Herramientas: VS Code, Adobe Creative Suite, Office Suite, herramientas CAT y de subtitulado</li>
                    </ul>
                </div>

                <div className="flex-1">
                    <div className="divider divider-secondary">
                        <h2 className="text-2xl mb-3">Experiencia</h2>
                    </div>
                    <ul className="list-none">
                        <li className="before:content-['✓'] before:mr-2 before:text-pink-500">Desarrolladora Web - NTTData (Oct 2025 - Dic 2025)</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-pink-500">Traductora y coordinadora de subtítulos - Autónoma (2023)</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-pink-500">Gestora de Proyectos de Traducción - TransPerfect (2021-2025)</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-pink-500">Auxiliar de Organización de Eventos Lúdicos - EventosGO (2019-2023)</li>
                    </ul>
                </div>
            </div>

            <div className="mb-16 flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                    <div className="divider divider-accent">
                        <h2 className="text-2xl mb-3">Educación</h2>
                    </div>
                    <ul className="list-none">
                        <li className="before:content-['✓'] before:mr-2 before:text-green-500">Grado Superior de Desarrollo Web - IES Zaidín Vergeles (2023-2025)</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-green-500">Máster en Traducción Audiovisual - ISTRAD y Universidad de Cádiz (2020-2021)</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-green-500">Grado en Traducción e Interpretación - Universidad de Granada (2016-2020)</li>
                    </ul>
                </div>

                <div className="flex-1">
                    <div className="divider divider-info">
                        <h2 className="text-2xl mb-3">Idiomas</h2>
                    </div>
                    <ul className="list-none">
                        <li className="before:content-['✓'] before:mr-2 before:text-blue-500">Español - Nativo</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-blue-500">Inglés - C1-C2</li>
                        <li className="before:content-['✓'] before:mr-2 before:text-blue-500">Chino Simplificado - B2 (HSK4)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
