import { Project } from '@prisma/client';
import { type ZodIssue } from 'zod';

export interface CreatedProject {
  error: string | ZodIssue[] | null;
  project: Project | null;
}

// export interface RevokeApiData {
//     error: string | ZodIssue[] | null;
//     success: boolean
// }
