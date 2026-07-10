import { create } from 'zustand';

interface AuthStore {
  isAuthenticated: boolean;
  user: any | null;
  login: (code: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (code: string) => {
    // TODO: Call backend to exchange code for token
    set({ isAuthenticated: true });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));
