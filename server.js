const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/userdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


// Use this to log mongo queries being executed!
mongoose.set('debug', true);


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

// // Create a new notebook
// app.post('/submit', ({ body }, res) => {
//     User.create(body)
//       .then(dbUserData => {
//         res.json(dbUserData);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  
//   // Retrieve all users
//   app.get('/users', (req, res) => {
//     User.find()
//       .then(dbUserData => {
//         res.json(dbUserData);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
