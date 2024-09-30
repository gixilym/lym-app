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
        <div className="flex flex-col w-full gap-y-2 justify-start items-start bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <div className="text-xl flex justify-center items-center gap-x-2">
            <ArrowBigRight strokeWidth={1.5} className="mt-0.5" />
            <p>¿Cuánto dura la creación de un proyecto?</p>
          </div>
          <p className="text-[16px] w-full text-pretty px-8">
            El tiempo depende de la complejidad y requisitos del proyecto. Uno
            básico puede durar entre 2 y 3 semanas. Mientras que uno más
            avanzado puede tardar 1 mes o más.
          </p>
        </div>
        <div className="flex flex-col w-full gap-y-2 justify-start items-start bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <div className="text-xl flex justify-center items-center gap-x-2">
            <ArrowBigRight strokeWidth={1.5} className="mt-0.5" />
            <p>¿Qué métodos de pago aceptan?</p>
          </div>
          <p className="text-[16px] w-full text-pretty px-8">
            Aceptamos transferencias bancarias. Transferencia vía PayPal o USDT.
          </p>
        </div>
        <div className="flex flex-col w-full gap-y-2 justify-start items-start bg-purple-950/60 p-4 rounded-xl border-2 border-purple-900">
          <div className="text-xl flex justify-center items-center gap-x-2">
            <ArrowBigRight strokeWidth={1.5} className="mt-0.5" />
            <p>¿Ofrecen servicio de mantenimiento?</p>
          </div>
          <p className="text-[16px] w-full text-pretty px-8">
            Ofrecemos planes que incluyen actualizaciones, optimización, y
            soporte técnico para garantizar que tu proyecto funcione de manera
            estable y segura.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
