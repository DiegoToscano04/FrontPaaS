import { Button } from "@/components/ui/button";
import { Cloud, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <--- 1. IMPORTAR

export const Navbar = () => {
    const navigate = useNavigate(); // <--- 2. INICIALIZAR HOOK

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* GRUPO IZQUIERDA: Logo + Navegación */}
                <div className="flex items-center gap-10">
                    <div
                        className="flex items-center gap-2 font-bold text-slate-900 text-xl tracking-tight cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        <Cloud className="h-8 w-8 text-blue-600 fill-blue-50" />
                        <span>PaaS Core Education</span>
                    </div>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                        <a href="#" className="hover:text-blue-600 transition-colors">Documentación</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Laboratorios</a>
                    </div>
                </div>

                {/* GRUPO DERECHA: Botones de Acción */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        className="hidden md:flex text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium"
                        onClick={() => navigate("/login")} // <--- 3. AGREGAR EVENTO
                    >
                        Acceder
                    </Button>

                    <Button className="bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200 rounded-lg px-6 font-medium"
                        onClick={() => navigate("/register")}>
                        Crear Cuenta
                    </Button>

                    <button className="md:hidden text-slate-600">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

            </div>
        </nav>
    );
};