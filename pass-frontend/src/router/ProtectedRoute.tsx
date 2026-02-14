import { useAuthStore } from "@/hooks/useAuthStore";
import { Navigate } from "react-router-dom";
import type { UserRole } from "@/mocks/types";
import type { JSX } from "react";

interface Props {
  children: JSX.Element;
  allowedRoles?: UserRole[]; // Roles permitidos para esta ruta
}

export const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // 1. Si no está autenticado, mandar al Login
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Si la ruta exige roles específicos y el usuario no lo tiene
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Si es estudiante intentando entrar a admin, lo mandamos a su dashboard
    if (user.role === 'STUDENT') return <Navigate to="/dashboard" replace />;
    // Si es admin en ruta de estudiante (opcional), lo mandamos a admin
    if (user.role === 'ADMIN') return <Navigate to="/admin" replace />;
  }

  // 3. Si todo está bien, renderizar la página
  return children;
};