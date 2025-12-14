import { API_CONFIG } from "@/config/api.config";

export const downloadService = {
  async test(sizeInMb: number = 1): Promise<number> {
    const startTime = Date.now();
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/download?size=${sizeInMb}mb`
    );
    await response.blob();
    const endTime = Date.now();

    const durationInSeconds = (endTime - startTime) / 1000;
    const speedMbps = (sizeInMb * 8) / durationInSeconds;

    return Math.round(speedMbps * 100) / 100;
  },
};
