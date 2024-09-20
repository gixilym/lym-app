import { Link } from "wouter";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start pt-32 h-screen text-slate-100">
      <p className="text-8xl font-bold mb-4">404</p>
      <p className="text-2xl mb-4">Página no encontrada</p>
      <Link
        href="/"
        className="px-6 text-lg py-2 bg-purple-500 text-white mt-4 rounded hover:bg-purple-600 transition-colors"
      >
        Inicio
      </Link>
    </div>
  );
}

export default NotFound;
