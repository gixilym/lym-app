function Footer() {
  return (
    <footer className="px-4 lg:px-6 h-16 text-[16px] flex items-center border-t border-gray-700 bg-violet-600/10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className=" text-gray-400">
          &copy; Copyright 2024 Lym. Todos los derechos reservados.
        </p>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <a className=" hover:text-purple-400 text-gray-400" href="#">
            Términos de Servicio
          </a>
          <a className=" hover:text-purple-400 text-gray-400" href="#">
            Política de Privacidad
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
