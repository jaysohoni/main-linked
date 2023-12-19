const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        newGoal: {
            type: String,
            required: true,
        },

        steps: {
            type: Number,
        },

        weight: {
            type: Number,
        },

        distance: {
            type: Number,
        },

        heartRate: {
            type: Number,
        },

        calorieIntake: {
            type: Number,
        },

        sleep: {
            type: Number,
        },

        exercise: {
            type: Number,
        },

        workout: {
            type: Number,
        },
    });

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;
