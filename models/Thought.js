const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reactions');

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
    },
    reactions: [ReactionSchema],
},
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;