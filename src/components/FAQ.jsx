function FAQ() {
  return (
    <section
      id="faq"
      className="w-full bg-purple-950/15 pb-20 pt-4 font-ubuntu flex flex-col justify-center items-center gap-y-10"
    >
      <p className="text-[50px] text-purple-50 w-full text-center">
        Preguntas Frecuentes
      </p>

      <div className="flex flex-col gap-y-4 w-full max-w-[550px] text-[22px] justify-center items-center text-purple-100">
        <details className="border-2 border-slate-700 bg-slate-800 w-full rounded-lg">
          <summary className="cursor-pointer p-4 font-medium text-lg hover:bg-slate-700/30 rounded-lg duration-100 px-16">
            Cuánto demora la creación de un sitio web?
          </summary>
          <p className="p-4 pt-0 text-purple-50 text-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, laboriosam quam cupiditate molestiae similique minima.
          </p>
        </details>
        <details className="border-2 border-slate-700 focus:outline-none bg-slate-800 w-full rounded-lg">
          <summary className="cursor-pointer p-4 font-medium text-lg hover:bg-slate-700/30 rounded-lg duration-100 px-16">
            Ofrecen un servicio de mantenimiento?
          </summary>
          <p className="p-4 pt-0 text-purple-50 text-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, laboriosam quam cupiditate molestiae similique minima.
          </p>
        </details>
        <details className="border-2 border-slate-700 focus:outline-none bg-slate-800 w-full rounded-lg">
          <summary className="cursor-pointer p-4 font-medium text-lg hover:bg-slate-700/30 rounded-lg duration-100 px-16">
            Qué métodos de pago aceptan?
          </summary>
          <p className="p-4 pt-0 text-purple-50 text-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, laboriosam quam cupiditate molestiae similique minima.
          </p>
        </details>
      </div>
    </section>
  );
}

export default FAQ;
