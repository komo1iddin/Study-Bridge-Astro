import { z } from 'zod';

export const featureSchema = z.object({
  icon: z.any(), // For Lucide icons
  text: z.string()
});

export const deadlineSchema = z.object({
  date: z.string(),
  text: z.string()
});

export type Feature = z.infer<typeof featureSchema>;
export type Deadline = z.infer<typeof deadlineSchema>;