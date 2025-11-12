import express from "express";
import { loginAdmin, listarUsuarios } from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/usuarios", listarUsuarios);

export default router;
