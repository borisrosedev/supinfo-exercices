import { Router } from "express";
import ProductController from "../controllers/product.js";

export const router = Router();

router.get("/", ProductController.index);
router.put("/", ProductController.store);
router.get("/:id", ProductController.findOneById);
router.delete("/:id", ProductController.delete);
router.post("/:id", ProductController.update);
// end of the CRUD
router.get("/filter/price", ProductController.findMultipleByPrice);
router.get("/filter/type-and-price", ProductController.sortSpecificProductsByPrice);



