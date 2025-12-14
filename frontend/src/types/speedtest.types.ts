export interface SpeedTestResult {
  ping: number;
  download: number;
  upload: number;
}

//Status list
export type TestStatus =
  | "idle"
  | "ping"
  | "download"
  | "upload"
  | "complete"
  | "error";
