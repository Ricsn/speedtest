import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SpeedTestButton } from "./SpeedTestButton";
import { SpeedTestResults } from "./SpeedTestResults";
import { useSpeedTest } from "@/hooks/useSpeedTest";

export const SpeedTestCard = () => {
  const { isRunning, results, status, error, runTest } = useSpeedTest();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">SpeedTest</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <SpeedTestButton
          isRunning={isRunning}
          status={status}
          onStart={runTest}
        />

        {error && (
          <div className="text-red-500 text-center text-sm">{error}</div>
        )}

        {results && <SpeedTestResults results={results} />}
      </CardContent>
    </Card>
  );
};
