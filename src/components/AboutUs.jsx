function AboutUs() {
  return (
    <section
      id="aboutus"
      className="w-full bg-purple-950/15 pb-20 pt-4 font-ubuntu flex flex-col justify-center items-center gap-y-10"
    >
      <p className="text-[54px] text-purple-50 w-full text-center">
        <span className="text-purple-300">¿</span>Quiénes somos
        <span className="text-purple-300">?</span>
      </p>
      <div className="flex flex-col gap-y-4 w-full max-w-[600px] text-xl justify-center text-pretty items-center text-purple-100">
        <p className="text-center w-full">
          Somos una empresa emergente comprometida con el desarrollo de
          soluciones de software innovadoras y de alta calidad.
        </p>
        <p className="text-center w-full">
          Nuestro equipo multidisciplinario incluye personal en marketing,
          desarrolladores y diseñadores apasionados por crear productos que
          marcan la diferencia.
        </p>
        <p className="text-center w-full">
          Entendemos tus necesidades y objetivos para ofrecerte soluciones
          personalizadas y eficientes.
        </p>
        <p className="text-center w-full">
          Nuestra misión es simplificar procesos complejos a través de sistemas
          efectivos, garantizando la satisfacción de nuestros clientes.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
