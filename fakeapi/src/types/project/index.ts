import { Project } from "@prisma/client";
import { type ZodIssue } from 'zod'

export interface CreatedProject {
    error: string | ZodIssue[] | null;
    createdProject: Project | null
}

// export interface RevokeApiData {
//     error: string | ZodIssue[] | null;
//     success: boolean
// }