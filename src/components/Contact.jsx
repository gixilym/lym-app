import { Instagram, Mail, Smartphone } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-purple-950/15 pb-20 pt-4 font-ubuntu flex flex-col justify-center items-center gap-y-10 sm:gap-y-16"
    >
      <p className="text-4xl sm:text-[50px] text-purple-50 w-full text-center">
        Contacto
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-8">
        <a
          href="mailto:lym.sofwaresa@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-purple-950/60 border-2 border-purple-900 rounded-lg p-6 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-purple-600 border-2 border-purple-500 flex items-center justify-center mb-4">
            <Mail color="#fff" size={28} />
          </div>
          <p className="text-lg sm:text-xl font-[500] text-white mb-2">Email</p>
          <p className="text-slate-200 text-sm sm:text-lg text-pretty">
            lym.sofwaresa@gmail.com
          </p>
        </a>
        <a
          href="https://www.instagram.com/lym_software"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-purple-950/60 border-2 border-purple-900 rounded-lg p-6 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-purple-600 border-2 border-purple-500 flex items-center justify-center mb-4">
            <Instagram color="#fff" size={28} />
          </div>
          <p className="text-lg sm:text-xl font-[500] text-white mb-2">
            Instagram
          </p>
          <p className="text-slate-200 text-sm sm:text-lg text-pretty">
            @lym_software
          </p>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+54-261-686-7205&text=Hola,%20quiero%20consultarles%20por..."
          target="_blank"
          rel="noreferrer noopener"
          className="bg-purple-950/60 border-2 border-purple-900 rounded-lg p-6 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-purple-600 border-2 border-purple-500 flex items-center justify-center mb-4">
            <Smartphone color="#fff" size={28} />
          </div>
          <p className="text-lg sm:text-xl font-[500] text-white mb-2">
            Celular
          </p>
          <p className="text-slate-200 text-sm sm:text-lg text-pretty">
            +54 261 686 7205
          </p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
