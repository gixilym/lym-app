import { Link, useLocation } from "wouter";

function Footer() {
  const [path] = useLocation();
  return (
    <footer className="px-4 sm:px-6 h-16 text-sm sm:text-[16px] flex items-center border-t border-gray-700 bg-violet-600/10 ">
      <div className="container mx-auto flex justify-between items-center">
        <p className=" text-slate-300">&copy; Copyright 2024 Lym</p>
        {path == "/termsandconditions" ? (
          <Link
            to="/"
            onClick={() => scrollTo(0, 0)}
            className="hover:text-purple-300 text-slate-300"
          >
            Inicio
          </Link>
        ) : (
          <Link
            to="/termsandconditions"
            className=" hover:text-purple-300 text-slate-300"
            onClick={() => scrollTo(0, 0)}
          >
            Términos de Servicio
          </Link>
        )}
      </div>
    </footer>
  );
}

export default Footer;
