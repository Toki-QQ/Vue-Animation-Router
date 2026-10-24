import { defineStore } from "pinia";

interface DeviceStore {
  device: "DESKTOP" | "PHONE" | "TABLET";
}

export const useDeviceStore = defineStore({
  id: "device-store",
  state: (): DeviceStore => ({
    device: "DESKTOP",
  }),
  actions: {
    /**
     * 设置设备类型
     * set device type
     */
    setDevice() {
      this.device = this.setDeviceType();

      window.addEventListener("resize", () => {
        this.device = this.setDeviceType();
      });
    },

    /**
     * 设置设备类型
     * set device type
     */
    setDeviceType() {
      const width = window.innerWidth;
      if (width >= 1200) {
        return "DESKTOP";
      } else if (width >= 768) {
        return "TABLET";
      } else {
        return "PHONE";
      }
    },
  },
  getters: {
    /**
     * 获取设备类型
     * get device type
     */
    getDevice: (state) => state.device,
  },
});
