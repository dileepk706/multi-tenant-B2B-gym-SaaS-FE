import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullable().optional(),
  email: z.string().email(),
  tenant_id: z.string().nullable().optional(),
  gym_id: z.string().nullable().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  created_on: z.string().or(z.number()).optional(),
  updated_on: z.string().or(z.number()).optional(),
});
