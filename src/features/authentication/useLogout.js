import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as LogoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, mutate: logout } = useMutation({
    onSuccess: () => {
      queryClient.refetchQueries();
      navigate('/login', { replace: true });
    },
    mutationFn: LogoutApi,
  });

  return { isLoading, logout };
}
