function ContactMe() {
  return (
    <section
      id="contactMe"
      className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto p-6 scroll-mt-16"
    >
      <div className="card bg-base-100 flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Formulario de Contacto</h1>

        <form className="flex flex-col gap-6" name="contact" method="POST" data-netlify="true" action="/success.html">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="mail@site.com"
              className="input input-bordered"
              required
            />
            <span className="text-sm text-gray-500">Introduce un email válido</span>
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-semibold">Nombre</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Escribe tu nombre"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-semibold">Mensaje</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered h-32"
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>

          <input type="hidden" name="bot-field" />

          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn btn-primary w-full hover:bg-orange-600 transition-colors duration-300"
            >
            </button>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex items-center">
        <div className="divider divider-horizontal">O</div>
      </div>

      <div className="card bg-base-100 flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Contacta conmigo</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/marina-fern%C3%A1ndez-basallo/"
            className="btn btn-outline btn-sm"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/marinabasallo98"
            className="btn btn-outline btn-sm"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
