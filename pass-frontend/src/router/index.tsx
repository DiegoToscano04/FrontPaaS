import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "@/pages/landing/LandingPage";
import { LoginPage } from "@/pages/auth/LoginPage";
import { RegisterPage } from "@/pages/auth/RegisterPage";
import { StudentDashboard } from "@/pages/dashboard/StudentDashboard";
import { AdminDashboard } from "@/pages/admin/AdminDashboard";
import { ProtectedRoute } from "./ProtectedRoute"; // Importar

export const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },

    // RUTA PROTEGIDA: ESTUDIANTE
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute allowedRoles={['STUDENT']}>
                <StudentDashboard />
            </ProtectedRoute>
        ),
    },

    // RUTA PROTEGIDA: ADMIN
    {
        path: "/admin",
        element: (
            <ProtectedRoute allowedRoles={['ADMIN']}>
                <AdminDashboard />
            </ProtectedRoute>
        ),
    },
]);