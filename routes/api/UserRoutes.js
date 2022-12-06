const router = require('express').Router();

const {
    getUsers,
    addUser,
    getUserByID,
} = require('../../controllers/user-controller');

// /api/users
router.route('/')
.get(getUsers)
.post(addUser);

// /api/users/:id
router.route('/:id')
.get(getUserByID)

module.exports = router;