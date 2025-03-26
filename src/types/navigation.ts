import { z } from 'zod';

export const navigationItemSchema = z.object({
  name: z.string(),
  href: z.string(),
  icon: z.string().optional(),
  items: z.array(z.lazy(() => navigationItemSchema)).optional()
});

export const navigationSchema = z.object({
  main: z.array(navigationItemSchema),
  resources: z.array(navigationItemSchema),
  social: z.array(navigationItemSchema)
});

export type NavigationItem = z.infer<typeof navigationItemSchema>;
export type Navigation = z.infer<typeof navigationSchema>;