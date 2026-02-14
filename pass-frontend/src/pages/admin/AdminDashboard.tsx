import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Search,
    Bell,
    MoreHorizontal,
    Cloud,
    Filter
} from "lucide-react";

// Datos simulados para la tabla de estudiantes
const studentsData = [
    { id: 1, name: "Juan Pérez", email: "juan2201980@uis.edu.co", code: "2201980", status: "Habilitado", initials: "JP", color: "bg-indigo-100 text-indigo-700" },
    { id: 2, name: "Juan Pérez", email: "juan2201980@uis.edu.co", code: "2201980", status: "Habilitado", initials: "JP", color: "bg-indigo-100 text-indigo-700" }, // Duplicado en la imagen por ejemplo
    { id: 3, name: "Juan Pérez", email: "juan2201980@uis.edu.co", code: "2201980", status: "Habilitado", initials: "JP", color: "bg-indigo-100 text-indigo-700" },
    { id: 4, name: "Juan Pérez", email: "juan2201980@uis.edu.co", code: "2201980", status: "Habilitado", initials: "JP", color: "bg-indigo-100 text-indigo-700" },
    { id: 5, name: "Carlos Ruiz", email: "carlos20231102@uis.edu.co", code: "20231102", status: "Inhabilitado", initials: "CR", color: "bg-slate-200 text-slate-600" },
    { id: 6, name: "Juan Pérez", email: "juan2201980@uis.edu.co", code: "2201980", status: "Habilitado", initials: "JP", color: "bg-indigo-100 text-indigo-700" },
    { id: 7, name: "Juan Pérez", email: "juan2201980@uis.edu.co", code: "2201980", status: "Habilitado", initials: "JP", color: "bg-indigo-100 text-indigo-700" },
];

export const AdminDashboard = () => {
    return (
        <div className="flex flex-col h-screen bg-white overflow-hidden font-sans">

            {/* --- NAVBAR ADMIN (Oscuro) --- */}
            <nav className="sticky top-0 z-50 w-full bg-[#0F172A] text-white px-6 h-16 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
                        <Cloud className="h-6 w-6 text-blue-400" />
                        <span>PaaS Core Education</span>
                    </div>
                    {/* Separador vertical */}
                    <div className="h-6 w-px bg-slate-700 mx-2"></div>
                    <Badge variant="outline" className="border-slate-600 text-slate-300 font-mono text-xs tracking-wider px-2 py-0.5 rounded-md">
                        ADMIN CONSOLE
                    </Badge>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-slate-400 hover:text-white relative transition-colors">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0F172A]"></span>
                    </button>
                    <Avatar className="h-9 w-9 bg-indigo-500 text-white cursor-pointer border-2 border-indigo-400">
                        <AvatarImage src="" />
                        <AvatarFallback className="font-bold">GF</AvatarFallback>
                    </Avatar>
                </div>
            </nav>

            <div className="flex flex-1 overflow-hidden">

                {/* --- SIDEBAR IZQUIERDO (Solicitudes) --- */}
                <aside className="w-[380px] bg-[#F8FAFC] border-r border-slate-200 flex flex-col z-10">

                    <div className="p-6 pb-2">
                        <div className="flex items-center gap-2 mb-6">
                            <h2 className="font-bold text-slate-900 text-lg">Solicitudes Pendientes</h2>
                            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 border-yellow-200 h-6 w-6 flex items-center justify-center rounded-full p-0">
                                3
                            </Badge>
                        </div>

                        {/* Filtros Superiores */}
                        <div className="flex gap-2 mb-4">
                            <Button variant="outline" className="flex-1 bg-white border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold shadow-sm h-9">
                                Despliegues
                            </Button>
                            <Button variant="ghost" className="flex-1 text-slate-500 hover:text-slate-900 hover:bg-slate-200 h-9">
                                Historial
                            </Button>
                        </div>

                        {/* Filtro Secundario (Aumento de Cuotas) */}
                        <Button variant="ghost" className="w-full justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 h-9 mb-4 px-3">
                            Aumento de Cuotas
                        </Button>

                        {/* Buscador Sidebar */}
                        <div className="relative mb-2">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                placeholder="Buscar..."
                                className="pl-9 bg-white border-slate-200 focus-visible:ring-slate-400 h-10 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Lista de Solicitudes (Scrollable) */}
                    <div className="flex-1 overflow-y-auto p-4 pt-0 space-y-3">

                        {/* ITEM 1 */}
                        <div className="bg-white p-4 rounded-xl border border-slate-300 shadow-sm cursor-pointer hover:border-blue-400 transition-all group relative">
                            <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-yellow-400"></div>
                            <div className="flex items-center gap-3 mb-2">
                                <Avatar className="h-8 w-8 bg-indigo-100 text-indigo-600 border border-indigo-200">
                                    <AvatarFallback className="text-xs font-bold">JP</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-xs font-bold text-slate-700">Juan Pérez</p>
                                    <p className="text-[10px] text-slate-500">Cod: 2201980</p>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600">proyecto-final-bases2</h3>
                            <p className="text-[11px] text-slate-500">Backend + Database</p>
                            <p className="text-[10px] text-slate-400 mt-3 font-mono">Hace 15 minutos</p>
                        </div>

                        {/* ITEM 2 */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 shadow-sm cursor-pointer transition-all group relative opacity-75 hover:opacity-100">
                            <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-yellow-400"></div>
                            <div className="flex items-center gap-3 mb-2">
                                <Avatar className="h-8 w-8 bg-pink-100 text-pink-600 border border-pink-200">
                                    <AvatarFallback className="text-xs font-bold">MA</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-xs font-bold text-slate-700">María Ávila</p>
                                    <p className="text-[10px] text-slate-500">Cod: 2201980</p>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600">blog-personal</h3>
                            <p className="text-[11px] text-slate-500">Monolith Standalone</p>
                            <p className="text-[10px] text-slate-400 mt-3 font-mono">Hace 45 minutos</p>
                        </div>

                    </div>
                </aside>

                {/* --- MAIN CONTENT (Directorio de Estudiantes) --- */}
                <main className="flex-1 bg-white flex flex-col h-full overflow-y-auto scroller">

                    {/* Header Principal */}
                    <header className="px-10 py-10 pb-6">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">Directorio de Estudiantes</h1>
                                <p className="text-slate-500 mt-1">Administra el acceso y estado de las cuentas.</p>
                            </div>

                            {/* Buscador Principal */}
                            <div className="w-[350px] relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    placeholder="Buscar por nombre o código..."
                                    className="pl-10 h-11 bg-white border-slate-200 focus-visible:ring-slate-400 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>

                        {/* TABLA DE DATOS */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">

                            {/* Cabecera de Tabla */}
                            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <div className="col-span-4">Estudiante</div>
                                <div className="col-span-3">Código</div>
                                <div className="col-span-3">Estado</div>
                                <div className="col-span-2 text-right">Acciones</div>
                            </div>

                            {/* Cuerpo de Tabla */}
                            <div className="divide-y divide-slate-100 bg-white">
                                {studentsData.map((student) => (
                                    <div key={student.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-slate-50 transition-colors">

                                        {/* Estudiante */}
                                        <div className="col-span-4 flex items-center gap-3">
                                            <div className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold border border-white shadow-sm ${student.color}`}>
                                                {student.initials}
                                            </div>
                                            <div className={student.status === "Inhabilitado" ? "opacity-50" : ""}>
                                                <p className="text-sm font-bold text-slate-900">{student.name}</p>
                                                <p className="text-xs text-slate-500">{student.email}</p>
                                            </div>
                                        </div>

                                        {/* Código */}
                                        <div className={`col-span-3 ${student.status === "Inhabilitado" ? "opacity-50" : ""}`}>
                                            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-mono font-medium">
                                                {student.code}
                                            </span>
                                        </div>

                                        {/* Estado */}
                                        <div className="col-span-3">
                                            {student.status === "Habilitado" ? (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                    Habilitado
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500 border border-slate-200">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                                    Inhabilitado
                                                </span>
                                            )}
                                        </div>

                                        {/* Acciones */}
                                        <div className="col-span-2 flex justify-end">
                                            <button className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors">
                                                <MoreHorizontal className="h-5 w-5" />
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Paginación */}
                        <div className="flex items-center justify-between mt-4 text-xs text-slate-500 px-2">
                            <p>Mostrando 1-7 de 28 estudiantes</p>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="h-8 text-xs bg-white hover:bg-slate-50" disabled>
                                    Anterior
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 text-xs bg-white hover:bg-slate-50">
                                    Siguiente
                                </Button>
                            </div>
                        </div>

                    </header>
                </main>

            </div>
        </div>
    );
};