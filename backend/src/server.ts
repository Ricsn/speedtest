import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import speedtestRoutes from "./routes/speedtest.routes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Route de test
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

app.use("/api", speedtestRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
