import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from '@/services/userApi';

export const useUserMutation = () => {
  const [
    createUser,
    { isLoading: isCreating, isError: isCreateError, error: createError },
  ] = useCreateUserMutation();
  const [
    updateUser,
    { isLoading: isUpdating, isError: isUpdateError, error: updateError },
  ] = useUpdateUserMutation();
  const [
    deleteUser,
    { isLoading: isDeleting, isError: isDeleteError, error: deleteError },
  ] = useDeleteUserMutation();

  return {
    createUser: {
      mutate: createUser,
      isLoading: isCreating,
      isError: isCreateError,
      error: createError,
    },
    updateUser: {
      mutate: updateUser,
      isLoading: isUpdating,
      isError: isUpdateError,
      error: updateError,
    },
    deleteUser: {
      mutate: deleteUser,
      isLoading: isDeleting,
      isError: isDeleteError,
      error: deleteError,
    },
  };
};
