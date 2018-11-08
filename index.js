require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const User = require(`./models/User`);
const Todo = require(`./models/Todo`);

// ROOT
app.get('/', (req, res) => {
  res.send('What up');
})

// Users
app.get('/users', (req, res) => {
  User.getAll()
    .then(users => {
      res.send(users);
    })
})

app.get('/users/user', (req, res) => {
  User.getById(4)
    .then(user => {
      res.send(user);
    })
})


app.get('/users/user/todos', (req, res) => {
  User.getById(2)
    .then(user => {
      user.getTodos()
        .then(todo => {
          res.send(todo);
        })
    })
})

app.get('/todos', (req, res) => {
  Todo.getAll()
    .then(todos => {
      res.send(todos);
    })
})

app.get('/todos/todo', (req, res) => {
  Todo.getById(4)
    .then(todo => {
      res.send(todo);
    })
})

app.listen(3000, () => {
  console.log(`Server started...`);
})

