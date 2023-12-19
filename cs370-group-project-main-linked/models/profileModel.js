const mongoose = require('mongoose');

const profileSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },

        email: {
            type: String,
        },

        age: {
            type: Number,
        },

        gender: {
            type: String,
        },

        height: {
            type: String,
        },

        weight: {
            type: String,
        },

    });

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
