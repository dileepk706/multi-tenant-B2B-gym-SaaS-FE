import { z } from 'zod';
import {
  ApiErrorDataDtoSchema,
  ApiErrorDataSchema,
  LoginUserDtoSchema,
  RegisterUserDtoSchema,
  UserDtoSchema,
} from './api.contracts';

export type UserDto = z.infer<typeof UserDtoSchema>;
export type LoginUserDto = z.infer<typeof LoginUserDtoSchema>;
export type ApiErrorData = z.infer<typeof ApiErrorDataSchema>;
export type ApiErrorDataDto = z.infer<typeof ApiErrorDataDtoSchema>;
export type RegisterUserDto = z.infer<typeof RegisterUserDtoSchema>;
