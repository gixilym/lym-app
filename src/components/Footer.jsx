import { Link } from "wouter";

function Footer() {
  return (
    <footer className="px-6 h-16 text-[16px] flex items-center border-t border-gray-700 bg-violet-600/10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className=" text-slate-300">&copy; Copyright 2024 Lym</p>
        <Link
          to="/termsandconditions"
          className=" hover:text-purple-300 text-slate-300"
          onClick={() => window.scrollTo(0, 0)}
        >
          Términos de Servicio
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
