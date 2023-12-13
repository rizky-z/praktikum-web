import express from "express";
import {
    getCategories,
    getCategoriById,
    createCategori,
    updateCategori,
    deleteCategori
} from "../controllers/CategoriController.js";

const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoriById);
router.post('/categories', createCategori);
router.patch('/categories/:id', updateCategori);
router.delete('/categories/:id', deleteCategori);

export default router;