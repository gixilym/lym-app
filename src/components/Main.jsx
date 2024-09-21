function Main() {
  return (
    <main className="flex-1">
      <section className="w-full flex items-start h-auto sm:h-[550px] justify-center py-16 sm:py-0 sm:pt-24 relative">
        <div className="flex flex-col justify-start items-center gap-y-6 text-white w-full">
          <h1
            className="text-6xl sm:text-8xl tracking-tighter font-semibold font-quick"
            translate="no"
          >
            L<span className="text-purple-300">y</span>m
          </h1>
          <h2 className="text-4xl text-balance sm:text-6xl text-purple-50">
            Software a Medida
          </h2>
          <h3 className="text-lg sm:text-xl text-center text-slate-300 max-w-[500px] text-pretty">
            Sitios web, ecommerces, apps de escritorio, <br /> sistemas de
            gestión y mucho más.
          </h3>
          <button className="tracking-wide font-[500] bg-purple-600 flex justify-center items-center gap-x-2 text-lg text-purple-100 border border-purple-400 border-b-4 overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-purple-400 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            ¡Contactanos!
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
