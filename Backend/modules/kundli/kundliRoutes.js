import express from "express";
import {
  generateKundli,
  getSavedKundlis,
  getKundliById,
  deleteKundli,
} from "./kundliController.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generate", generateKundli); // Could be protected or unprotected

// Protect all routes below
router.use(protect);

router.route("/").get(getSavedKundlis);

router
  .route("/:id")
  .get(getKundliById)
  .delete(deleteKundli);

export default router;
