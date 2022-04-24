import mongoose from 'mongoose';

const mealSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    mealCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const MealMessage = mongoose.model('MealMessage', mealSchema);

export default MealMessage;