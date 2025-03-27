import { z } from 'zod';

export const programTypeSchema = z.enum(['language', 'bachelor', 'master']);
export type ProgramType = z.infer<typeof programTypeSchema>;

export const programSchema = z.object({
  id: z.string(),
  type: programTypeSchema,
  title: z.string(),
  description: z.string(),
  duration: z.string(),
  features: z.array(z.string()),
  fields: z.array(z.string()).optional(),
  levels: z.array(z.string()),
  icon: z.string(),
  bgColor: z.string(),
  textColor: z.string().optional(),
  color: z.string().optional(),
  language: z.string(),
  price: z.string().optional(),
  slug: z.string().optional()
});

export type Program = z.infer<typeof programSchema>;

export function isValidProgram(program: unknown): program is Program {
  try {
    programSchema.parse(program);
    return true;
  } catch {
    return false;
  }
}