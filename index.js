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


// User Registry || CREATE NEW USER
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

// UPDATE THE NAME OF A SPECIFIC USER
app.post(`/users/:id([0-9]+)/edit`, (req, res) => {
  const newName = req.body.name;
  User.getById(req.params.id)
    .then(user => {
      user.updateName(newName)
      res.redirect(`/users/${user.id}`);
    });
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

app.get('/todos/:id([0-9]+)/', (req, res) => {
  Todo.getById(req.params.id)
    .then(todo => {
      res.send(todo);
    })
})

// ASSIGN TODOS BASED ON USER ID
app.get(`/todos/:id([0-9]+)/assign`, (req, res) => {
  res.send(templates.assignTodo());
})
app.post(`/todos/:id([0-9]+)/assign`, (req, res) => {
  const userId = req.body.id;
  Todo.getById(req.params.id)
    .then(todo => {
      todo.assignTodo(userId);
      res.redirect(`/todos/${req.params.id}`)
    })
})

app.listen(3000, () => {
  console.log(`Ready...`);
})

