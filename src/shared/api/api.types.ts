import { z } from 'zod';
import {
  ApiErrorDataDtoSchema,
  ApiErrorDataSchema,
  LoginUserDtoSchema,
  OnboardingDtoSchema,
  RegisterUserDtoSchema,
} from './api.contracts';

export type LoginUserDto = z.infer<typeof LoginUserDtoSchema>;
export type ApiErrorData = z.infer<typeof ApiErrorDataSchema>;
export type ApiErrorDataDto = z.infer<typeof ApiErrorDataDtoSchema>;
export type RegisterUserDto = z.infer<typeof RegisterUserDtoSchema>;
export type OnboardingDto = z.infer<typeof OnboardingDtoSchema>;
