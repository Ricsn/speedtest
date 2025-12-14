import { useState } from "react";
import { pingService, downloadService, uploadService } from "@/services/api";
import { SpeedTestResult, TestStatus } from "@/types/speedtest.types";

export const useSpeedTest = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<SpeedTestResult | null>(null);
  const [status, setStatus] = useState<TestStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const runTest = async () => {
    setIsRunning(true);
    setResults(null);
    setError(null);

    try {
      // Test ping 3 times
      setStatus("ping");
      const pingTests = await Promise.all([
        pingService.test(),
        pingService.test(),
        pingService.test(),
      ]);
      const ping = Math.round(
        pingTests.reduce((a, b) => a + b, 0) / pingTests.length
      );

      // Test download 2 times
      setStatus("download");
      const downloadTests = await Promise.all([
        downloadService.test(10),
        downloadService.test(10),
      ]);
      const download = Math.max(...downloadTests);

      // Test upload 2 times
      setStatus("upload");
      const uploadTests = await Promise.all([
        uploadService.test(10),
        uploadService.test(10),
      ]);
      const upload = Math.max(...uploadTests);

      setResults({ ping, download, upload });
      setStatus("complete");
    } catch (err) {
      console.error("Speed test failed:", err);
      setError("Test failed. Please try again.");
      setStatus("error");
    } finally {
      setIsRunning(false);
    }
  };

  return { isRunning, results, status, error, runTest };
};
