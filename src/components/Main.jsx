import { DatabaseZap, Monitor, ShoppingBag } from "lucide-react";

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
          <h3 className="text-xl text-center text-slate-300 max-w-[500px] text-pretty">
            Sitios web, ecommerces, apps de escritorio, <br /> sistemas de
            gestión y mucho más.
          </h3>
          <button className="bg-purple-700 tracking-wide flex justify-center items-center gap-x-2 text-lg text-purple-100 border border-purple-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-purple-400 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            ¡Contactanos!
          </button>
        </div>
      </section>

      <section className="w-full bg-purple-950/15 py-10 h-[500px] space-y-10 font-ubuntu">
        <p className="text-[54px] text-purple-50 w-full text-center">
          Servicios
        </p>
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
            <h3 className="text-xl font-bold text-white mb-2">Ecommerces</h3>
            <p className="text-slate-200 text-lg text-pretty">
              Diseñamos tu tienda online para impulsar tu negocio.
            </p>
          </div>
          <div className="bg-purple-950/60 border-2 border-purple-900 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-600 border-2 border-purple-500 flex items-center justify-center mb-4">
              <DatabaseZap color="#fff" size={30} />
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
