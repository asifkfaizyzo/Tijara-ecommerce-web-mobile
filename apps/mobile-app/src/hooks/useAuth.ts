import { useAuthStore } from '@/stores/auth.store';

export function useAuth() {
  const store = useAuthStore();
  
  return {
    isAuthenticated: store.isAuthenticated,
    isLoading: store.isLoading,
    login: store.login,
    verifyOtp: store.verifyOtp,
    logout: store.logout,
  };
}