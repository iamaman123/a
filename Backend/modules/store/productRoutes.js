import express from "express";
import { getAllProducts, getProductById, createProduct } from "./productController.js";
import { protect, restrictTo } from "../../middleware/authMiddleware.js";
import { upload } from "../../utils/multer.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Admin only route
router.post("/", protect, restrictTo("admin"), upload.single("thumbnail"), createProduct);

export default router;
