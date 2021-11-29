const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 3
    },

    LastName: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 3
    },

    Email: {
        type: String,
        required: true,
        unique: true,
        trim: false,
        minlength: 12
    },

    Password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 8
    }
}, {
    timestamps: true,
});