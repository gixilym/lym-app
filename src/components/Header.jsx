function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-violet-600/5     ">
      <a className="flex items-center justify-center" href="#">
        <span
          className="text-2xl font-bold text-white font-quick"
          translate="no"
        >
          L<span className="text-purple-300">y</span>m
        </span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6 text-lg [&>a]:py-1">
        <a className="font-medium hover:text-purple-400 text-gray-200" href="#">
          Inicio
        </a>
        <a className="font-medium hover:text-purple-400 text-gray-200" href="#">
          Servicios
        </a>
        <a className="font-medium hover:text-purple-400 text-gray-200" href="#">
          Sobre Nosotros
        </a>
        <a
          className="font-medium hover:bg-purple-400 text-white bg-purple-500 px-6 rounded-lg"
          href="#"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Header;
