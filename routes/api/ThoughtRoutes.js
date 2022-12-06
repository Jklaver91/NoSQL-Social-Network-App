const router = require('express').Router();

const {
    addThought,
    getThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router.route('/')
.get(getThoughts)

// api/thoughts/:userId
router.route('/:userId')
.post(addThought)

// api/thoughts/:userId
router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;