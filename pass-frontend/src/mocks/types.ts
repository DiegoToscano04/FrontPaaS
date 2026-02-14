// src/mocks/types.ts

// --- ENUMS (Igual que en la BD) ---
export type UserRole = 'STUDENT' | 'ADMIN';

export type ProjectStatus =
    | 'DRAFT'
    | 'WAITING_USER_CONFIRMATION'
    | 'PENDING_APPROVAL'
    | 'APPROVED'
    | 'REJECTED'
    | 'DEPLOYING'
    | 'DEPLOYED'
    | 'FAILED'
    | 'TERMINATING'
    | 'TERMINATED';

export type ArchitectureType =
    | 'DB_STANDALONE'
    | 'BACKEND_STANDALONE'
    | 'FRONTEND_STANDALONE'
    | 'MONOLITH'
    | 'BACKEND_DB'
    | 'MONOLITH_DB'
    | 'THREE_TIER';

export type QuotaRequestStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

// --- INTERFACES ---

export interface User {
    id: string;
    code: string;
    email: string;
    name: string;
    role: UserRole;
    is_active: boolean;
    quota_cpu_limit: number;
    quota_memory_limit_mb: number;
    quota_storage_limit_mb: number;
    created_at: string;
}

export interface Project {
    id: string;
    user_id: string;
    name: string;
    namespace_name: string; // nombre-codigo
    description: string;
    architecture: ArchitectureType;
    status: ProjectStatus;

    // Recursos consumidos por este proyecto
    req_cpu: number;
    req_memory_mb: number;
    req_storage_mb: number;

    // Datos técnicos
    docker_compose_content?: string; // YAML original
    generated_manifests?: any; // JSONB con los objetos K8s
    access_urls?: {
        web?: string;     // URL del Ingress
        db_host?: string; // IP Nodo (si es NodePort)
        db_port?: number; // Puerto (si es NodePort)
    };

    created_at: string;
}

export interface QuotaRequest {
    id: string;
    user_id: string;
    // Datos del usuario para mostrar en la tabla sin hacer join manual
    user_name?: string;
    user_code?: string;

    quota_cpu_request: number;
    quota_memory_request_mb: number;
    quota_storage_request_mb: number;

    justification: string;
    status: QuotaRequestStatus;
    created_at: string;
}

export interface AuditLog {
    id: string;
    actor_name: string;
    action: string;
    target: string;
    timestamp: string;
    details: string;
}