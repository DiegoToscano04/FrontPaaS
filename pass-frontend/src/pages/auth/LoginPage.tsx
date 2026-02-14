import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cloud, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MockApi } from "@/services/mockApi";
import { useAuthStore } from "@/hooks/useAuthStore";

export const LoginPage = () => {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const user = await MockApi.login(email);
            login(user);
            if (user.role === 'ADMIN') {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }
        } catch (err) {
            setError("Credenciales inválidas o usuario no encontrado.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full h-screen lg:grid lg:grid-cols-2 overflow-hidden font-sans">
            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-white h-full relative z-10">
                <div
                    className="flex items-center gap-2 font-bold text-slate-900 text-xl tracking-tight cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <Cloud className="h-8 w-8 text-blue-600 fill-blue-50" />
                    <span>PaaS Core Education</span>
                </div>
                <div className="mx-auto w-full max-w-[380px] space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Bienvenido de nuevo
                        </h1>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Ingresa tus credenciales institucionales para acceder.
                        </p>
                    </div>

                    {/* El formulario ahora tiene el onSubmit */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-700 font-semibold">Correo Institucional</Label>
                            <Input
                                id="email"
                                placeholder="estudiante@uis.edu.co"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Corregido
                                required
                                className="h-12 border-slate-200 focus-visible:ring-black"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-slate-700 font-semibold">Contraseña</Label>
                                <a href="#" className="text-xs font-medium text-slate-500 hover:text-blue-600 hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                            <Input
                                id="password"
                                placeholder="••••••••"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Corregido
                                required
                                className="h-12 border-slate-200 focus-visible:ring-black"
                            />
                        </div>

                        {error && <p className="text-sm font-medium text-red-500">{error}</p>}

                        {/* El botón ahora es de tipo "submit" y no tiene su propio onClick */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-black hover:bg-slate-800 text-white font-bold rounded-lg shadow-lg shadow-black/10 transition-all text-base mt-2"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" />
                            ) : (
                                <>
                                    Iniciar Sesión
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>
                    <div className="text-center text-sm text-slate-500">
                        ¿No tienes cuenta?{" "}
                        <a href="#" className="font-bold text-slate-900 hover:underline" onClick={() => navigate("/register")}>
                            Regístrate con tu código
                        </a>
                    </div>
                </div>
                <div className="text-xs text-slate-400">
                    © 2026 PaaS Core Education. Todos los derechos reservados.
                </div>
            </div>
            {/* ... Columna Derecha se mantiene igual ... */}
        </div>
    );
};