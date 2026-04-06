// eslint-disable-next-line import/no-extraneous-dependencies
import { UserSchema } from 'entities/user/user.contracts';
import { z } from 'zod';

// Base response schema for all API calls
export const createApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    message: z.string(),
    data: dataSchema,
  });

export const ApiErrorDataDtoSchema = z.object({
  errors: z.record(z.string(), z.array(z.string())),
});

export const ApiErrorDataSchema = z.array(z.string());

export const LoginUserDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const RegisterUserDtoSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

// Specific data schemas
export const LoginDataSchema = z.object({
  user: UserSchema,
  accessToken: z.string(),
});

export const ProfileDataSchema = z.object({
  user: UserSchema,
});

// Full response schemas
export const LoginResponseSchema = createApiResponseSchema(LoginDataSchema);
export const ProfileResponseSchema = createApiResponseSchema(ProfileDataSchema);
export const RegisterResponseSchema = createApiResponseSchema(ProfileDataSchema);
