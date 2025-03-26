import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: z.string()
    .email('Invalid email address')
    .optional(),
  phone: z.string()
    .regex(/^\+?[0-9]{10,15}$/, 'Invalid phone number format'),
  message: z.string()
    .optional()
});

export type ContactForm = z.infer<typeof contactFormSchema>;