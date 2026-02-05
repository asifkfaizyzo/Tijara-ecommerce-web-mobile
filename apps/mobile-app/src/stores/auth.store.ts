import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  phone: string | null;
  
  initialize: () => Promise<void>;
  login: (phone: string) => Promise<void>;
  verifyOtp: (otp: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isLoading: true,
  phone: null,

  initialize: async () => {
    // Simulate checking stored auth
    await new Promise((resolve) => setTimeout(resolve, 500));
    set({ isLoading: false });
  },

  login: async (phone: string) => {
    // Store phone for OTP verification
    set({ phone });
    console.log('[AUTH] OTP requested for:', phone);
  },

  verifyOtp: async (otp: string) => {
    // Simulate OTP verification
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // For testing: any 4-digit code works
    if (otp.length === 4) {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },

  logout: () => {
    set({ isAuthenticated: false, phone: null });
  },
}));