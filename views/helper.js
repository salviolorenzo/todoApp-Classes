function addUser(users) {
  let userList = ``;
  users.forEach(user => {
    userList += `<li>Name: <a href="/users/${user.id}/todos">${user.name}</a><br>Email: ${user.email}<br>Phone Number: ${user.phone}<br><a href="/users/${user.id}/delete">Delete User</a></li>`
  });
  return userList;
}

function showTodos(todos) {
  let todosList = ``;
  todos.forEach(todo => {
    todosList += `<li>Title: <a href="/todos/${todo.id}">${todo.name}</a><br> Completed: false</li>`
  });
  return todosList;
}

function logoutButton() {
  return `
  <form action="/logout" method="POST">
    <input type="submit" value="Logout">
    </form>`;
}

function loginOrRegister() {
  return `<a href="/login">Login</a> |
  <a href="/users/register">Register</a>`
}

function header() {
  return `
  <header>
  <h1>
    Todo-Thing
  </h1>
  <nav>
    <li><a href="/">Home</a></li>
    <li><a href="/users">Users</a></li>
    <li><a href="/todos">My Todos</a></li>
    
  </nav>
</header>`;
}

function home(content) {
  return `
    <section class="home">
      <h1>Hey ${content}</h1>
    </section>`
}



function footer() {
  return `<footer>
    <p>Brought to you by the beanie boiz</p>
  </footer>`
}

function users(content) {
  return `<section>
  <h1>Users</h1>
  <ul>${content}</ul>
  </section>`
}

function register() {
  return `<section class="main-form">
  <form method="post" action="/users/register">
    <input type="text" name="name" placeholder="Name">
    <input type="email" name="email" placeholder="email">
    <input type="text" name="phone" placeholder="phone">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="pass" placeholder="Password">
    <input type="submit" name="submit">
  </form>
</section>`
}

function login() {
  return `
      <section class="login">
        <form method="post" action="/login">
        <label>Username: </label><br>
          <input type="text" name="username" placeholder="Joe123"><br>
          <label>Password: </label><br>
          <input type="password" name="password" placeholder="p455word!"><br>
          <input type="submit">
        </form>
      </section>
  `
}

function deleteUser(user) {
  return `
    <section>
      <h1>Are you sure you want to delete ${user.name}?</h1>
      <form method="post">
        <input type="radio" name="choice" value="yes">Yes
        <input type="radio" name="choice" value="no">No
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>`
}

function todos(content) {
  return `<section>
  <h1>Todos</h1>
  <ul>${content}</ul>
  </section>`
}

function addTodo() {
  return `
    <section class="todo-form">
      <form method="post">
        <input type="text" name="name" placeholder="Title">
        <input type="submit" name="Submit" value="Add">
      </form>
    </section>
  `
}

function assignTodo() {
  return `<section class="main-form">
  <h1>Assign Todos</h1>
    <form method="post">
      <input type="text" name="id" placeholder="UserId">
      <input type="submit" name="submit">
    </form>
  </section>`
}



module.exports = {
  addUser,
  showTodos,
  home,
  header,
  footer,
  users,
  deleteUser,
  todos,
  login,
  register,
  addTodo,
  assignTodo,
  logoutButton,
  loginOrRegister
}