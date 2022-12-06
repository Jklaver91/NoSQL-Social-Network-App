const router = require('express').Router();

const {
    getUsers,
    addUser,
    getUserByID,
    deleteUser,
    updateUsers,
} = require('../../controllers/user-controller');

// /api/users
router.route('/')
.get(getUsers)
.post(addUser);

// /api/users/:id
router.route('/:id')
.get(getUserByID)
.delete(deleteUser)
.put(updateUsers);

module.exports = router;