import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean; // 로그인 여부
  accessToken: string | null; // JWT 토큰
  user: {
    id: string; // 사용자 ID
    role: string; // 사용자 역할 (예: admin, user 등)
    nationality: string; // 사용자 국적 (예: KR, US 등)
  } | null;
  setAccessToken: (token: string) => void;
  setUser: (user: { id: string; role: string; nationality: string }) => void;
  setIsLoggedIn: (flag: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  accessToken: null,
  user: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  setUser: (user) => set({ user }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  logout: () =>
    set({
      isLoggedIn: false,
      accessToken: null,
      user: null,
    }),
}));
