import { Router } from "express";
import { ping } from "../controllers/speedtest.controller";
import { download } from "../controllers/speedtest.controller";
import { upload } from "../controllers/speedtest.controller";

const router = Router();

router.get("/ping", ping);
router.get("/download", download);
router.post("/upload", upload);

export default router;
