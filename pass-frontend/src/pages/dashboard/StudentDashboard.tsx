import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Search,
    Plus,
    Database,
    Layers,
    Box,
    Bell,
    Loader2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { MockApi } from "@/services/mockApi";
import { useProjectStore } from "@/hooks/useProjectStore";
import { cn } from "@/lib/utils"; // Utilidad de shadcn para clases condicionales

// Componente Navbar específico para el Dashboard (con perfil)
const DashboardNavbar = () => {
    const user = useAuthStore((state) => state.user);

    // Función para obtener iniciales (ej. "Juan Pérez" -> "JP")
    const getInitials = (name: string = "") => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .substring(0, 2);
    };
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white px-6 h-16 flex items-center justify-between">
            {/* Izquierda */}
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xl tracking-tight">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-blue-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M17.5 19c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3" />
                            <path d="M16 11.5V6a4 4 0 0 0-8 0v5.5" />
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" />
                            <path d="M20 19.5v-15A2.5 2.5 0 0 0 17.5 2" />
                        </svg>
                    </div>
                    <span>PaaS Core Education</span>
                </div>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                    <a href="#" className="hover:text-black">Documentación</a>
                    <a href="#" className="hover:text-black">Laboratorios</a>
                </div>
            </div>

            {/* Derecha */}
            <div className="flex items-center gap-4">
                <button className="text-slate-400 hover:text-slate-600 relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>
                <Avatar className="h-9 w-9 bg-indigo-100 border border-indigo-200 text-indigo-700 cursor-pointer">
                    <AvatarImage src="" />
                    <AvatarFallback className="font-bold">{getInitials(user?.name)}</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    );
};


export const StudentDashboard = () => {
    const navigate = useNavigate();
    const setSelectedProject = useProjectStore((state) => state.setSelectedProject);
    const selectedProjectId = useProjectStore((state) => state.selectedProjectId);

    // 1. PETICIÓN A LA API SIMULADA
    // 1. PETICIÓN A LA API SIMULADA
    // TODO: Usar 'projects' para renderizar la lista dinámica en lugar de la estática
    const { data: _projects, isLoading: _isLoading } = useQuery({
        queryKey: ["my-projects"],
        queryFn: MockApi.getMyProjects,
    });

    return (
        <div className="flex flex-col h-screen bg-slate-50 overflow-hidden font-sans">
            <DashboardNavbar />

            <div className="flex flex-1 overflow-hidden">

                {/* --- SIDEBAR IZQUIERDO (Lista de Proyectos) --- */}
                <aside className="w-[400px] bg-white border-r border-slate-200 flex flex-col z-10">

                    {/* Header Sidebar */}
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-bold text-slate-900 text-lg">Mis Proyectos</h2>
                            <Badge variant="secondary" className="text-xs font-normal bg-slate-100 text-slate-500 hover:bg-slate-100">
                                {_projects?.length || 0} total
                            </Badge>
                        </div>
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                placeholder="Buscar..."
                                className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-slate-400"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto scroller p-3 space-y-3 bg-slate-50/50">
                        {_isLoading ? (
                            <div className="flex flex-col items-center justify-center py-10 text-slate-400 gap-2">
                                <Loader2 className="h-6 w-6 animate-spin" />
                                <span className="text-xs">Cargando proyectos...</span>
                            </div>
                        ) : (
                            _projects?.map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => setSelectedProject(project.id)}
                                    className={cn(
                                        "bg-white p-3 rounded-lg border transition-all cursor-pointer relative group",
                                        selectedProjectId === project.id
                                            ? "border-blue-400 shadow-sm ring-1 ring-blue-500/20"
                                            : "border-slate-200 hover:border-slate-300"
                                    )}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                                                {project.architecture === "THREE_TIER" && <Layers className="w-4 h-4" />}
                                                {project.architecture === "MONOLITH" && <Box className="w-4 h-4" />}
                                                {project.architecture === "DB_STANDALONE" && <Database className="w-4 h-4" />}
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-slate-900 leading-none">{project.name}</h3>
                                                <p className="text-[11px] text-slate-500 mt-1 capitalize">
                                                    {project.architecture.replace("_", " ").toLowerCase()}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Punto de estado dinámico */}
                                        <span className={cn(
                                            "h-2 w-2 rounded-full",
                                            project.status === "DEPLOYED" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" :
                                                project.status === "PENDING_APPROVAL" ? "bg-amber-400" : "bg-red-500"
                                        )}></span>
                                    </div>

                                    <div className="border-t border-slate-50 my-2"></div>

                                    <div className="flex justify-between items-center">
                                        <code className="text-[10px] text-slate-400 font-mono truncate max-w-[180px]">
                                            {project.access_urls?.web || "Esperando host..."}
                                        </code>
                                        <Badge className={cn(
                                            "text-[10px] font-bold px-1.5 py-0 h-5 border",
                                            project.status === "DEPLOYED" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                                                project.status === "PENDING_APPROVAL" ? "bg-amber-50 text-amber-700 border-amber-100" :
                                                    "bg-red-50 text-red-700 border-red-100"
                                        )}>
                                            {project.status === "DEPLOYED" ? "Deployed" : project.status === "PENDING_APPROVAL" ? "Pending" : "Failed"}
                                        </Badge>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-3 border-t border-slate-200 bg-slate-50 text-center text-[10px] text-slate-400 font-medium">
                        v1.0.4 • Paas Core Education
                    </div>
                </aside>

                {/* --- ÁREA DERECHA (Contenido Dinámico) --- */}
                <main className="flex-1 bg-slate-50 flex items-center justify-center p-12 relative">
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    </div>

                    {/* Si no hay proyecto seleccionado, mostramos el "Crear" */}
                    {!selectedProjectId ? (
                        <div className="w-full max-w-2xl bg-white rounded-2xl border-2 border-dashed border-slate-300 hover:border-slate-400 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center py-20 px-8 text-center z-10">
                            <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-200 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                                <Plus className="w-10 h-10 text-slate-400 group-hover:text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Crear Nuevo Proyecto</h2>
                            <p className="text-slate-500 max-w-md mx-auto mb-8">
                                Sube tu archivo <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-mono text-sm border border-slate-200">docker-compose.yml</code> o pégalo en nuestro editor.
                            </p>

                        </div>
                    ) : (
                        // Aquí irá la vista detallada que haremos después
                        <div className="text-slate-400 flex flex-col items-center gap-4">
                            <Loader2 className="animate-spin h-8 w-8" />
                            <p>Cargando detalles del proyecto {selectedProjectId}...</p>
                            <Button variant="outline" onClick={() => setSelectedProject(null)}>Volver</Button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};