import { SpeedTestResult } from "@/types/speedtest.types";

interface SpeedTestResultsProps {
  results: SpeedTestResult;
}

export const SpeedTestResults = ({ results }: SpeedTestResultsProps) => {
  return (
    <div className="space-y-3">
      <ResultItem label="Ping" value={`${results.ping} ms`} />
      <ResultItem label="Download" value={`${results.download} Mbps`} />
      <ResultItem label="Upload" value={`${results.upload} Mbps`} />
    </div>
  );
};

interface ResultItemProps {
  label: string;
  value: string;
}

const ResultItem = ({ label, value }: ResultItemProps) => {
  return (
    <div className="flex justify-between items-center p-3 bg-slate-100 rounded">
      <span className="font-medium">{label}</span>
      <span className="text-lg font-bold">{value}</span>
    </div>
  );
};
