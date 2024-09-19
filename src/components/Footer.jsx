function Footer() {
  return (
    <footer className="px-6 h-16 text-[16px] flex items-center border-t border-gray-700 bg-violet-600/10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className=" text-gray-400">&copy; Copyright 2024 Lym</p>
        <a className=" hover:text-purple-400 text-gray-400" href="#">
          Términos de Servicio
        </a>
      </div>
    </footer>
  );
}

export default Footer;
