const { User } = require('../models');

const userController = {
    addUser({ body }, res) {
        User.create(body)
            .then(userData => res.json(userData))
            .catch(err => res.status(400).json(err));
    },
    getUsers(req, res) {
        User.find({})
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getUserByID({ params }, res) {
        User.findOne({ _id: params.id })
            .then(userData => res.json(userData))
            .catch(err => res.status(400).json(err));
    },
    deleteUser({params}, res) {
        User.findOneAndDelete({_id: params.id})
        .then(userData => {
            if(!userData) {
                res.status(404).json({ message: 'There is no user with this ID, please try again.' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    },
    updateUsers({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(userData => {
                if(!userData) {
                    res.status(404).json({ message: 'There is no user with this ID, please try again.' });
                    return;
                }

                res.json(userData);
            })
            .catch(err => res.status(400).json(err));
    },
}

module.exports = userController;