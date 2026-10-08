import { defineStore } from "pinia";

interface AppStore {
  theme: "light" | "dark";
}

export const useAppStore = defineStore({
  id: "app-store",
  state: (): AppStore => ({
    theme: "light",
  }),
  actions: {
    switchTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
  getters: {
    getTheme: (state) => state.theme,
  },
});
