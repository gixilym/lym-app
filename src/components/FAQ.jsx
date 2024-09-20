import { ArrowBigRight } from "lucide-react";

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
        <div className="flex w-full gap-x-4 justify-start items-center bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <ArrowBigRight />
          <p>Cuánto demora la creación de un sitio web?</p>
        </div>
        <div className="flex w-full gap-x-4 justify-start items-center bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <ArrowBigRight />
          <p>Ofrecen servicio de mantenimiento?</p>
        </div>
        <div className="flex w-full gap-x-4 justify-start items-center bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <ArrowBigRight />
          <p>Qué métodos de pago aceptan?</p>
        </div>
        <div className="flex w-full gap-x-4 justify-start items-center bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <ArrowBigRight />
          <p>Les gusta el sexo?</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
