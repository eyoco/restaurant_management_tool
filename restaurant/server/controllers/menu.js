import mongoose from 'mongoose';
import MealMessage from '../models/mealMessage.js';


export const getMenu =  async (req, res) => {
    try {
        const mealMessages = await MealMessage.find();
        res.status(200).json(mealMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createMeal = async (req, res) => {
    const meal = req.body;

    const newMeal = new MealMessage(meal);

    try {
        await newMeal.save();
        res.status(201).json(newMeal);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateMeal = async (req, res) => {
    const { id: _id } = req.params;
    const meal = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No meal with that id');

    const updatedMeal = await MealMessage.findByIdAndUpdate(_id, { ...meal, _id }, { new: true });

    res.json(updatedMeal);
}

export const deleteMeal = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No meal with that id');

    await MealMessage.findByIdAndRemove(id);
}

export const addMeal = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No meal with that id');

    const meal = await MealMessage.findById(id);
    const updatedMeal = await MealMessage.findByIdAndUpdate(id, { mealCount: meal.mealCount + 1 }, { new: true });

    res.json(updatedMeal);
}

export const removeMeal = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No meal with that id');

    const meal = await MealMessage.findById(id);
    const updatedMeal = await MealMessage.findByIdAndUpdate(id, { mealCount: meal.mealCount - 1 }, { new: true });

    res.json(updatedMeal);
}