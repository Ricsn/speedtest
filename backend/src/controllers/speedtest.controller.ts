import { Request, Response } from "express";

export const ping = (req: Request, res: Response) => {
  const timestamp = Date.now();
  res.json({
    timestamp,
    message: "pong",
  });
};
