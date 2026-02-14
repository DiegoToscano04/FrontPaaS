// src/services/mockApi.ts
import { mockProjects, mockQuotaRequests, mockUsers } from "@/mocks/data";
import type { Project, User } from "@/mocks/types";

// Simula retardo de red (500ms)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const MockApi = {


    /// LOGIN: Busca por email
    login: async (email: string) => {
        await delay(800);
        const user = mockUsers.find(u => u.email === email);

        // Simulación simple: Si existe el correo, pasa. 
        // En producción aquí validaríamos el password hash.
        if (!user) throw new Error("Usuario no encontrado o credenciales inválidas");

        return user;
    },

    // REGISTRO: Simula creación
    register: async (data: any) => {
        await delay(1500);
        // Simulamos que devolvemos un usuario nuevo con rol STUDENT
        const newUser: User = {
            id: `u-${Date.now()}`,
            code: data.code,
            email: data.email,
            name: data.name,
            role: 'STUDENT', // Por defecto todos entran como estudiantes
            is_active: true,
            quota_cpu_limit: 2.0,
            quota_memory_limit_mb: 2048,
            quota_storage_limit_mb: 2048,
            created_at: new Date().toISOString()
        };
        return newUser;
    },
    getCurrentUser: async () => {
        // Simula obtener el usuario del token. Retornamos a Juan Pérez por defecto.
        await delay(300);
        return mockUsers[0];
    },

    // --- PROJECT SERVICES (STUDENT) ---
    getMyProjects: async () => {
        await delay(600);
        return mockProjects; // Retorna los 3 proyectos de ejemplo
    },

    getProjectById: async (id: string) => {
        await delay(400);
        return mockProjects.find(p => p.id === id);
    },

    createProject: async (data: Partial<Project>) => {
        await delay(1500); // Simula el tiempo de validación del backend
        console.log("Simulación: Proyecto creado", data);
        return { success: true, id: "p-new-" + Date.now() };
    },

    // --- ADMIN SERVICES ---
    getPendingRequests: async () => {
        await delay(500);
        // Retorna proyectos que estén en PENDING_APPROVAL
        return mockProjects.filter(p => p.status === 'PENDING_APPROVAL');
    },

    getQuotaRequests: async () => {
        await delay(500);
        return mockQuotaRequests;
    },

    getAllStudents: async () => {
        await delay(600);
        return mockUsers.filter(u => u.role === 'STUDENT');
    }
};