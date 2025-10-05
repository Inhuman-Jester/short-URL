import express from "express";
import {
    handleCreateNewId, handleGetUrl, getAnalyticsOfId
} from "../controller/url.js";

const router = express.Router();

router.post("/url", handleCreateNewId);
router.get("/:id", handleGetUrl);
router.get("/url/analytic/:id", getAnalyticsOfId);

export default router;