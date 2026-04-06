import { DefaultError, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { useAuthContext } from '@auth/hooks/use-auth-context';
import { UserDto } from 'shared/api/api.types';
import { RegisterUser } from './register.types';

export function useRegisterMutation(
  options: Partial<UseMutationOptions<UserDto, DefaultError, RegisterUser, unknown>> = {}
) {
  const { register } = useAuthContext();
  const { mutationKey = [], onMutate, onError, onSettled, onSuccess } = options;

  return useMutation({
    mutationKey: ['session', 'register-user', ...mutationKey],
    mutationFn: async (registerUserData: RegisterUser) => {
      const data = await register(registerUserData);
      return data;
    },
    onMutate,
    onSuccess: async (data, variables, context) => {
      onSuccess?.(data, variables, context);
    },
    onError,
    onSettled,
  });
}
