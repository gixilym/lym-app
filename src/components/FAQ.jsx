import { ArrowBigRight } from "lucide-react";

function FAQ() {
  return (
    <section
      id="faq"
      className="w-full bg-purple-950/15 pb-20 pt-4 font-ubuntu flex flex-col justify-center items-center gap-y-10 sm:gap-y-16"
    >
      <p className="text-3xl sm:text-[54px] text-purple-50 w-full text-center">
        Preguntas Frecuentes
      </p>

      <div className="flex flex-col gap-4 px-6 sm:px-0 w-full max-w-[550px] text-lg sm:text-[20px] justify-center items-center text-purple-100 text-balance">
        <div className="flex w-full gap-x-4 justify-start items-center bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <ArrowBigRight />
          <p>Cuánto demora la creación de un sitio web?</p>
        </div>
        <div className="flex w-full gap-x-4 justify-start items-center bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <ArrowBigRight />
          <p>Qué métodos de pago aceptan?</p>
        </div>
        <div className="flex w-full gap-x-4 justify-start items-center bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <ArrowBigRight />
          <p>Ofrecen servicio de mantenimiento?</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
