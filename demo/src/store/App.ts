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
    /**
     * 切换主题色
     * toggle theme color
     */
    switchTheme() {
      this.setTheme(this.theme === "light" ? "dark" : "light");
    },

    /**
     * 设置主题色
     * set theme color
     */
    setTheme(theme: "light" | "dark") {
      this.theme = theme;

      document.documentElement.classList.toggle("dark", theme === "dark");
    },
  },
  getters: {
    /**
     * 获取主题色
     * get theme color
     */
    getTheme: (state) => state.theme,
  },
});
