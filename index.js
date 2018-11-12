require('dotenv').config();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('public'));

const User = require(`./models/User`);
const Todo = require(`./models/Todo`);

const page = require(`./views/page`);
const helper = require(`./views/helper`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// ROOT
app.get('/', (req, res) => {
  res.send(page(`
    ${helper.header()}
    ${helper.footer()}
  `));
})


// Users
app.get('/users', (req, res) => {
  User.getAll()
    .then(users => {
      res.send(page(`
      ${helper.header()}
      ${helper.users(helper.addUser(users))}
      ${helper.footer()}`
      ));
    });
})


// User Registry || CREATE NEW USER
app.get('/users/register', (req, res) => {
  res.send(page(`
  ${helper.header()}
  ${helper.register()}
  ${helper.footer()}
  `));
});

app.post(`/users/register`, (req, res) => {
  console.log(req.body);
  User.add(req.body.name, req.body.email, req.body.phone, req.body.username, req.body.pass)
    .then(user => {
      res.redirect(`/users/${user.id}`);
    })
})

// LOGIN PAGE
app.get(`/login`, (req, res) => {
  res.send(page(`
    ${helper.header()}
    ${helper.login()}
    ${helper.footer()}
  `))
})

app.post(`/login`, (req, res) => {
  const userName = req.body.username;
  const passWord = req.body.password;
  User.getByUsername(userName)
    .catch(err => {
      console.log(err);
    })
    .then(user => {
      console.log(passWord);
      console.log(user.pwhash);
      const didMatch = bcrypt.compareSync(passWord, user.pwhash);
      console.log(didMatch);

      if (didMatch) {
        res.redirect('/users');
      }
      else {
        res.redirect('/login');
      }

    })
    .catch(console.log);
})


// User Info by ID
app.get('/users/:id([0-9]+)', (req, res) => {
  User.getById(req.params.id)
    .then(user => {
      res.send(page(`
        ${helper.header()}
        ${user.name}
        ${helper.footer()}
      `));
    })
})

app.get(`/users/:id([0-9]+)/edit`, (req, res) => {
  res.send(page(`
  ${helper.header()}
  ${helper.register()}
  ${helper.footer()}
  `));
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

// DELETE A USER
app.get(`/users/:id([0-9]+)/delete`, (req, res) => {
  User.getById(req.params.id)
    .then(user => {
      res.send(page(`
        ${helper.header()}
        ${helper.deleteUser(user)}
        ${helper.footer()}
      `))
    })
})

app.post(`/users/:id([0-9]+)/delete`, (req, res) => {
  User.getById(req.params.id)
    .then(user => {
      if (req.body.choice === "yes") {
        user.deleteSelf();
        res.redirect('/users')
      }
    })
  // if (req.body.choice === 'yes') {
  //   User.deleteById(req.params.id)
  //     .then(() => {
  //       res.redirect(`/users`);
  //     })
  // }
  // else {
  //   res.redirect(`/users`);
  // }
})


app.get('/users/:id([0-9]+)/todos', (req, res) => {
  User.getById(req.params.id)
    .then(user => {
      user.getTodos()
        .then(todo => {
          res.send(page(`
            ${helper.header()}
            ${user.name}
            ${helper.showTodos(todo)}
            ${helper.footer()}`
          ));
        })
    })
})

app.get('/todos', (req, res) => {
  Todo.getAll()
    .then(todos => {
      res.send(page(`
      ${helper.header()}
      ${helper.todos(helper.showTodos(todos))}
      ${helper.footer()}`
      ));
    });

})

app.get('/todos/:id([0-9]+)/', (req, res) => {
  Todo.getById(req.params.id)
    .then(todo => {
      res.send(todo);
    })
})

// ASSIGN TODOS BASED ON USER ID
app.get(`/todos/:id([0-9]+)/assign`, (req, res) => {
  res.send(page(`
  ${helper.header()}
  ${helper.assignTodo()}
  ${helper.footer()}
  `));
})
app.post(`/todos/:id([0-9]+)/assign`, (req, res) => {
  const userId = req.body.id;
  Todo.getById(req.params.id)
    .then(todo => {
      todo.assignTodo(userId);
      res.redirect(`/todos/${req.params.id}`)
    })
})

// ADD Todo
app.get(`/todos/add`, (req, res) => {
  res.send(page(
    `${helper.header()}
    ${helper.addTodo()}
    ${helper.footer()}`
  ));
})

app.post(`/todos/add`, (req, res) => {
  let compl = false;
  Todo.add(req.body.name, compl)
    .then(todo => {
      console.log(todo);
      res.redirect(`/todos`);
    })
})

app.listen(3000, () => {
  console.log(`Ready...`);
})

