import { z } from 'zod';

// Zod schema for runtime validation
export const programFilterSchema = z.object({
  language: z.string().optional(),
  duration: z.string().optional(),
  priceRange: z.object({
    min: z.number(),
    max: z.number()
  }).optional()
});

export type ProgramFilter = z.infer<typeof programFilterSchema>;

export interface DetailedProgram { 
  id: string;
  title: string;
  description: string;
  duration: string;
  language: string;
  price: number;
  features: string[];
  requirements: string[];
}