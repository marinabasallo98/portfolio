function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 flex flex-col gap-6">
      <nav className="flex gap-6">
        <a href="#projects" className="link link-hover">Proyectos</a>
        <a href="#about" className="link link-hover">Sobre mí</a>
        <a href="#contactMe" className="link link-hover">Contáctame</a>
      </nav>

      <nav className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/marina-fernandez-basallo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.786-1.75-1.754s.784-1.752 1.75-1.752 1.75.784 1.75 1.752-.784 1.754-1.75 1.754zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.758 1.379-1.556 2.841-1.556 3.038 0 3.6 2.001 3.6 4.602v5.587z" />
          </svg>
        </a>

        <a
          href="https://github.com/marinabasallo98"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.468-2.382 1.236-3.222-.123-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.403c1.018.004 2.044.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.242 2.872.119 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.096.823 2.21 0 1.595-.015 2.878-.015 3.27 0 .32.216.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </nav>

      <p className="text-sm text-center">
        &copy; {new Date().getFullYear()} - Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
