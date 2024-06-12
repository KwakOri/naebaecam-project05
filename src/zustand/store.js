import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuth: false,
  user: null,
  setUserInfo: (user) =>
    set(() => ({
      user: user,
      isAuth: true,
    })),
  logout: () =>
    set(() => ({
      user: null,
      isAuth: false,
    })),
}));
