import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PawPrint } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => { console.error("404:", location.pathname); }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--pet-navy)" }}>
      <div className="text-center">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(255,179,0,0.2)" }}>
          <PawPrint className="w-10 h-10" style={{ color: "#FFB300" }} />
        </div>
        <h1 className="text-6xl font-extrabold text-white mb-2" style={{ fontFamily: "'Baloo 2', cursive" }}>404</h1>
        <p className="text-lg text-white/70 mb-6">Página não encontrada</p>
        <a href="/" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.4)" }}>
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
