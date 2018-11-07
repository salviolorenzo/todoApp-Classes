require('dotenv').config();

const express = require('express');
const app = express();

const User = require(`./models/User`);
const Todo = require(`./models/Todo`);

app.get('/', (req, res) => {
  res.send('What up');
})

app.get('/allUsers', (req, res) => {
  User.getAll()
    .then(users => {
      res.send(users);
    })
})


app.listen(3000, () => {
  console.log(`Server started...`);
})

