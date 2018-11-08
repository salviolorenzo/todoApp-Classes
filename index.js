require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const User = require(`./models/User`);
const Todo = require(`./models/Todo`);

const templates = require(`./templates`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// ROOT
app.get('/', (req, res) => {
  res.send(templates.home());
})


// Users
app.get('/users', (req, res) => {
  User.getAll()
    .then(users => {
      let userList = ``;
      users.forEach(user => {
        userList += `<li>Name: ${user.name}<br>Email: ${user.email}<br>Phone Number: ${user.phone}</li>`
      });
      res.send(templates.users(userList));
    });
})


// User Registry
app.get('/users/register', (req, res) => {
  res.send(templates.register());
});

app.post(`/users/register`, (req, res) => {
  console.log(req.body);
  User.add(req.body.name, req.body.email, req.body.phone)
    .then(user => {
      res.redirect(`/users/${user.id}`);
    })
})


// User Info by ID
app.get('/users/:id([0-9]+)', (req, res) => {
  User.getById(req.params.id)
    .then(user => {
      res.send(user);
    })
})

app.get(`/users/:id([0-9]+)/edit`, (req, res) => {
  res.send(templates.register());
})

app.post(`/users/:id([0-9]+)/edit`, (req, res) => {
  User.updateName(req.body.name)
    .then(user => {
      res.redirect(`/users/${user.id}`);
    })
})


app.get('/users/:id([0-9]+)/todos', (req, res) => {
  User.getById(req.params.id)
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

app.get('/todos/:id([0-9]+)', (req, res) => {
  Todo.getById(req / params / id)
    .then(todo => {
      res.send(todo);
    })
})

app.listen(3000, () => {
  console.log(`Ready...`);
})

