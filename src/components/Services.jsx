import { DatabaseZap, Monitor, ShoppingBag } from "lucide-react";

function Services() {
  return (
    <section
      id="services"
      className="w-full bg-purple-950/15 py-10 h-[500px] space-y-10 font-ubuntu"
    >
      <p className="text-[54px] text-purple-50 w-full text-center">Servicios</p>
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
  );
}

export default Services;
