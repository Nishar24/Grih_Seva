import express from "express";
import { getHelpers, getHelperById } from "../controllers/helperController.js";

const router = express.Router();

router.get("/", getHelpers);
router.get("/:id", getHelperById);

export default router;
