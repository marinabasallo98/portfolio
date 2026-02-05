function ContactMe() {
  return (
    <section
      id="contactMe"
      className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto p-6 scroll-mt-16"
    >
      <div className="card bg-base-100 flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Formulario de Contacto</h1>

        <form
          className="flex flex-col gap-6"
          action="https://formsubmit.co/5bf3556433cea37c79c085b70ae6dd44"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Nuevo mensaje desde Portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://tudominio.com/gracias" />
          
          <input type="hidden" name="_autoresponse" value="¡Gracias por tu mensaje! Te responderé pronto." />

          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="mail@site.com"
              className="input input-bordered h-10 border-gray-400 border-2 focus:border-orange-600 focus:ring-0 transition-colors duration-300"
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
              className="input input-bordered h-10 border-gray-400 border-2 focus:border-orange-600 focus:ring-0 transition-colors duration-300"
              required
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-semibold">Mensaje</span>
            </label>
            <textarea
              name="message"
              className="textarea h-30 border-gray-400 border-2 focus:border-orange-600 focus:ring-0 transition-colors duration-300"
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>

          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn bg-orange-600 w-full hover:bg-orange-200 transition-colors duration-300 text-white"
            >
              Enviar
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
  )
}

export default ContactMe