import { Router } from "express";
import { ping } from "../controllers/speedtest.controller";
import { download } from "../controllers/speedtest.controller";

const router = Router();

router.get("/ping", ping);
router.get("/download", download);

export default router;
