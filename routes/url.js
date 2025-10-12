import express from "express";
import {
    handleCreateNewId, handleGetUrl, handleGetAnalyticsOfId, handleGetAnalytics
} from "../controller/url.js";

const router = express.Router();


router.post("/", handleCreateNewId);
router.get("/analytic", handleGetAnalytics);
router.get("/analytic/:id", handleGetAnalyticsOfId);
router.get("/:id", handleGetUrl);

export default router;