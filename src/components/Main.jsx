import { ShoppingBag } from "lucide-react";
import { Monitor } from "lucide-react";

function Main() {
  return (
    <main className="flex-1">
      <section className="w-full flex items-start h-[550px] justify-center pt-32 relative">
        <div className="flex flex-col justify-start items-center gap-y-6 text-white w-full">
          <h1
            className="text-8xl tracking-tighter font-semibold font-quick"
            translate="no"
          >
            L<span className="text-purple-300">y</span>m
          </h1>
          <h2 className="text-6xl text-purple-50">Software a Medida</h2>
          <h3 className="text-xl text-center text-slate-400 max-w-[500px] text-pretty">
            Sitios web, ecommerces, apps móviles, apps de escritorio, sistemas
            de gestión y mucho más.
          </h3>
        </div>
      </section>

      <section className="w-full bg-purple-950/15 py-10 h-[500px] space-y-10 font-ubuntu">
        {/* <div className="flex w-full flex-col justify-center items-center gap-y-10"> */}
        <p className="text-6xl text-purple-50 w-full text-center">Servicios</p>
        <div className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-3 px-8">
          <div className="bg-purple-950/60 border-2 border-purple-900 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-600 border-2 border-purple-500 flex items-center justify-center mb-4">
              <Monitor color="#fff" size={36} />
            </div>
            <p className="text-xl font-bold text-white mb-2">Sitios Web</p>
            <p className="text-slate-200 text-lg text-pretty">
              Creamos experiencias web únicas, adaptadas a tus necesidades y
              objetivos.
            </p>
          </div>
          <div className="bg-purple-950/60 border-2 border-purple-900 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-600 border-2 border-purple-500 flex items-center justify-center mb-4">
              <ShoppingBag color="#fff" size={30} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">E-commerce</h3>
            <p className="text-slate-200 text-lg text-pretty">
              Diseñamos tu tienda online para impulsar tu negocio.
            </p>
          </div>
          <div className="bg-purple-950/60 border-2 border-purple-900 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-600 border-2 border-purple-500 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <p className="text-xl font-bold text-white mb-2">
              Sistemas de gestión
            </p>
            <p className="text-slate-200 text-lg text-pretty">
              Sistemas diseñados para mejorar la eficiencia y el control de tu
              negocio.
            </p>
          </div>
          {/* </div> */}
        </div>
      </section>
    </main>
  );
}

export default Main;
