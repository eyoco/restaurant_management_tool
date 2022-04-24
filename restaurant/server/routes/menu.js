import express from 'express';

import { getMenu, createMeal, updateMeal, deleteMeal, addMeal, removeMeal } from '../controllers/menu.js';
const router = express.Router();

router.get('/', getMenu);
router.post('/', createMeal);
router.patch('/:id', updateMeal);
router.delete('/:id', deleteMeal);
router.patch('/:id/addMeal', addMeal);
router.patch('/:id/removeMeal', removeMeal);

export default router;