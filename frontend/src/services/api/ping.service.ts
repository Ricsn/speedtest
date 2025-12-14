import { API_CONFIG } from "@/config/api.config";

export const pingService = {
  async test(): Promise<number> {
    const startTime = Date.now();
    await fetch(`${API_CONFIG.BASE_URL}/ping`);
    const endTime = Date.now();
    return endTime - startTime;
  },
};
