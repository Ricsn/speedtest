import { useState } from "react";
import { pingService, uploadService, downloadService } from "@/services/api";
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
      //Test ping
      setStatus("ping");
      const ping = await pingService.test();

      //Test download
      setStatus("download");
      const download = await downloadService.test();

      //Test upload
      setStatus("upload");
      const upload = await uploadService.test();

      setResults({ ping, download, upload });
      setStatus("complete");
    } catch (err) {
      console.log("Speed test failed", err);
      setError("Test failed. Please try again");
      setStatus("error");
    } finally {
      setIsRunning(false);
    }
  };

  return { isRunning, results, status, error, runTest };
};
