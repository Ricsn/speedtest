import { Button } from "./ui/button";
import { TestStatus } from "@/types/speedtest.types";

interface SpeedTestButtonProps {
  isRunning: boolean;
  status: TestStatus;
  onStart: () => void;
}

const STATUS_MESSAGES: Record<TestStatus, string> = {
  idle: "Start test",
  ping: "Testing ping",
  download: "Testing donwload",
  upload: "Testing upload",
  complete: "Testing complete",
  error: "Test failed",
};

export const SpeedTestButton = ({
  isRunning,
  status,
  onStart,
}: SpeedTestButtonProps) => {
  return (
    <Button className="w-full" onClick={onStart} disabled={isRunning}>
      {STATUS_MESSAGES[status]}
    </Button>
  );
};
