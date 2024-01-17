import { Router } from "express";
import SeederController from "../controllers/seeder.js";

const router = Router();
router.get("/", SeederController.init);

export { router };




