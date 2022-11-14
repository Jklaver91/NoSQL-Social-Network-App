const router = require('express').Router();
const { User } = require('../../models/User');

// Create a User
router.post('/submit', ({ body }, res) => {
    User.create(body)
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => {
            res.json(err);
        });
});

// Retrieve all users
router.get('/users', (req, res) => {
    User.find()
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;