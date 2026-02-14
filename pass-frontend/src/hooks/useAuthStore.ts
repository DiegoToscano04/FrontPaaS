import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // Para guardar en localStorage automáticamente
import type { User } from '@/mocks/types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            login: (user) => set({ user, isAuthenticated: true }),

            logout: () => set({ user: null, isAuthenticated: false }),
        }),
        {
            name: 'paas-auth-storage', // Nombre en localStorage
        }
    )
);