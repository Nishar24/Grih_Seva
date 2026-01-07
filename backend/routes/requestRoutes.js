import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createRequest, getMyRequests } from "../controllers/requestController.js";

const router = express.Router();

router.post("/", protect, createRequest);
router.get("/me", protect, getMyRequests);

export default router;
