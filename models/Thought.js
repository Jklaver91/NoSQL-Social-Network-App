const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    title: {
        type: String,
        required: 'Type your title.',
        trim: true,
        validate: [(newText) => newText.length <= 130]
    },

    text: {
        type: String,
        required: 'Type your thought.',
        trim: true,
        validate: [(newText) => newText.length <= 280]
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;