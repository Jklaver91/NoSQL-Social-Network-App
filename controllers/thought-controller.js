const { Thought, User } = require('../models');

const thoughtController = {
    
    addThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true }
                );
            })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'Thought Error please enter thought with correct userid and format {"title": "yourtitlehere", "text": "yourtextehere"}' });
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.json(err));
        },

        getThoughts(req, res) {
            Thought.find({})
                .then(thoughtData => res.json(thoughtData))
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err);
                });
        },

        getThoughtById({ params }, res) {
            Thought.findOne({ _id: params.thoughtId })
                .then(thoughtData => res.json(thoughtData))
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err);
                });
        },
    }

module.exports = thoughtController;