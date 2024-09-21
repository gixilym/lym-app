import { Link } from "wouter";

function Header() {
  return (
    <header className="px-4 sm:px-6 h-[70px] flex items-center border-b border-gray-800 bg-violet-600/5">
      <Link className="flex items-center justify-center gap-x-2" to="/">
        <img src="/favicon.ico" width={35} height={35} />
        <span
          className="text-xl sm:text-2xl font-bold text-white font-quick"
          translate="no"
        >
          L<span className="text-purple-300">y</span>m
        </span>
      </Link>
      <nav className="ml-auto flex gap-x-4 text-sm sm:text-lg [&>a]:py-1">
        <a
          className="font-medium hover:text-purple-300 text-gray-200"
          href="#services"
        >
          Servicios
        </a>
        <a
          className="font-medium hover:text-purple-300 text-gray-200"
          href="#aboutus"
        >
          ¿Quiénes somos?
        </a>
        <a
          className="font-medium hover:text-purple-300 text-gray-200"
          href="#faq"
        >
          FAQ
        </a>
        <a
          className="hidden sm:inline-block font-medium  hover:bg-purple-600 text-white bg-purple-500 px-6 rounded-lg"
          href="#contact"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Header;
