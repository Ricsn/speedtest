import { Request, Response } from "express";
import { error } from "node:console";
import path from "node:path";

export const ping = (req: Request, res: Response) => {
  const timestamp = Date.now();
  res.json({
    timestamp,
    message: "pong",
  });
};

export const download = (req: Request, res: Response) => {
  const size = req.query.size || "1mb"; //Default value
  const filePath = path.join(__dirname, "../../test-files", `${size}.bin`);

  res.download(filePath, (err) => {
    if (err) {
      res.status(404).json({ error: "File not found" });
    }
  });
};

export const upload = (req: Request, res: Response) => {
  const startTime = parseInt(req.headers["x-start-time"] as string);
  const receivedTime = Date.now();
  const dataSize = parseInt(req.headers["content-length"] || "0");

  res.json({
    receivedTime,
    dataSize,
    duration: receivedTime - startTime,
  });
};
