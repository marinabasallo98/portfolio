import { useState } from 'react';

function ContactMe() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.target as HTMLFormElement;
    
    try {
      // Enviar el formulario de forma tradicional
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setIsLoading(false);
        form.reset(); // Limpiar el formulario
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

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
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="Nuevo mensaje desde Portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="#" />
          <input type="hidden" name="_template" value="table" />

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

          <div className="form-control mt-4 space-y-4">
            <button
              type="submit"
              className="btn bg-orange-600 w-full hover:bg-orange-200 transition-colors duration-300 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Enviando...
                </>
              ) : (
                'Enviar'
              )}
            </button>

            {isSubmitted && (
              <div className="alert alert-success shadow-lg animate-fadeIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold">¡Mensaje enviado!</h3>
                  <div className="text-xs">Te responderé lo antes posible.</div>
                </div>
              </div>
            )}
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