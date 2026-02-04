function Navbar() {
  return (
    <nav className="navbar fixed top-0 z-50 h-16 bg-base-100 shadow"> <div className="flex-1">
        <a href="#home" className="btn btn-ghost text-xl rounded-sm">
          Marina.dev
        </a>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-2">
          <li><a className="rounded-sm" href="#projects">Ver mis proyectos</a></li>
          <li><a className="rounded-sm" href="#about">Sobre mí</a></li>
          <li><a className="rounded-sm" href="#contactMe">Contáctame</a></li>
        </ul>
      </div>
      <div className="md:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li>
            <a href="#contactMe" className="btn btn-primary mt-2">
              Contáctame
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;