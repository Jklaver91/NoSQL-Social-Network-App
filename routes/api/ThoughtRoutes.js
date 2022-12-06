const router = require('express').Router();

const {
    addThought,
    getThoughts,
    getThoughtById,
    updateThought,
    deleteThought
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

module.exports = router;