const router = require('express').Router();

const {
    getUsers,
    addUser,
    getUserByID,
    deleteUser,
    updateUsers,
    addFriend,
    deleteFriend
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

router.route('/:id/friends/:friendID')
//.post(addFriend)
//.delete(deleteFriend)

module.exports = router;