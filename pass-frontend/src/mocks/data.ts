// src/mocks/data.ts
import type { User, Project, QuotaRequest } from "./types";

// 1. USUARIOS
export const mockUsers: User[] = [
    {
        id: "u-001",
        code: "2201980",
        email: "juan2201980@uis.edu.co",
        name: "Juan Pérez",
        role: "STUDENT",
        is_active: true,
        quota_cpu_limit: 2.0,
        quota_memory_limit_mb: 2048,
        quota_storage_limit_mb: 2048,
        created_at: "2026-01-15T08:00:00Z"
    },
    {
        id: "u-002",
        code: "20231102",
        email: "carlos.ruiz@uis.edu.co",
        name: "Carlos Ruiz",
        role: "STUDENT",
        is_active: false, // Inhabilitado
        quota_cpu_limit: 1.0,
        quota_memory_limit_mb: 1024,
        quota_storage_limit_mb: 1024,
        created_at: "2026-02-01T10:00:00Z"
    },
    {
        id: "u-admin",
        code: "ADMIN01",
        email: "profesor@uis.edu.co",
        name: "Roberto Gomez",
        role: "ADMIN",
        is_active: true,
        quota_cpu_limit: 10.0,
        quota_memory_limit_mb: 10240,
        quota_storage_limit_mb: 10240,
        created_at: "2025-01-01T00:00:00Z"
    }
];

// 2. PROYECTOS (Pertenecen a Juan Pérez)
export const mockProjects: Project[] = [
    {
        id: "p-001",
        user_id: "u-001",
        name: "e-commerce-final",
        namespace_name: "e-commerce-final-2201980",
        description: "Proyecto final de arquitectura de software",
        architecture: "THREE_TIER",
        status: "DEPLOYED",
        req_cpu: 0.5,
        req_memory_mb: 512,
        req_storage_mb: 1024,
        access_urls: {
            web: "https://frontend-ecommerce.apps.lab.edu.co"
        },
        created_at: "2026-02-10T14:30:00Z",
        // Simulamos un manifiesto básico para el visor
        generated_manifests: [
            { kind: "Deployment", metadata: { name: "frontend" } },
            { kind: "Service", metadata: { name: "frontend-svc" } }
        ]
    },
    {
        id: "p-002",
        user_id: "u-001",
        name: "blog-personal",
        namespace_name: "blog-personal-2201980",
        description: "Blog simple con base de datos sqlite",
        architecture: "MONOLITH",
        status: "PENDING_APPROVAL",
        req_cpu: 0.2,
        req_memory_mb: 256,
        req_storage_mb: 512,
        created_at: "2026-02-12T09:15:00Z"
    },
    {
        id: "p-003",
        user_id: "u-001",
        name: "test-db-01",
        namespace_name: "test-db-01-2201980",
        description: "Pruebas de persistencia",
        architecture: "DB_STANDALONE",
        status: "FAILED",
        req_cpu: 0.5,
        req_memory_mb: 512,
        req_storage_mb: 5120, // 5GB (Excede cuota de ejemplo)
        created_at: "2026-02-05T11:00:00Z"
    }
];

// 3. SOLICITUDES DE CUOTA (Para Admin Dashboard)
export const mockQuotaRequests: QuotaRequest[] = [
    {
        id: "qr-001",
        user_id: "u-001",
        user_name: "Juan Pérez",
        user_code: "2201980",
        quota_cpu_request: 2.0,      // Mantiene CPU
        quota_memory_request_mb: 4096, // Pide 4GB RAM
        quota_storage_request_mb: 5120, // Pide 5GB Disco
        justification: "Necesito desplegar un dataset grande para la materia de Big Data y mi cuota actual de 2GB no alcanza.",
        status: "PENDING",
        created_at: "2026-02-13T08:00:00Z"
    }
];