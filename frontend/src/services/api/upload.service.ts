import { API_CONFIG } from "@/config/api.config";

export const uploadService = {
  async test(sizeInMB: number = 1): Promise<number> {
    const data = new Uint8Array(1024 * 1024 * sizeInMB);
    const startTime = Date.now();

    await fetch(`${API_CONFIG.BASE_URL}/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
        "x-start-time": startTime.toString(),
      },
      body: data,
    });

    const endTime = Date.now();
    const durationInSeconds = (endTime - startTime) / 1000;
    const speedMbps = (sizeInMB * 8) / durationInSeconds;

    return Math.round(speedMbps * 100) / 100;
  },
};
