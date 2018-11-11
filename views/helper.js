function addUser(users) {
  let userList = ``;
  users.forEach(user => {
    userList += `<li>Name: <a href="/users/${user.id}/todos">${user.name}</a><br>Email: ${user.email}<br>Phone Number: ${user.phone}</li>`
  });
  return userList;
}

function showTodos(todos) {
  let todosList = ``;
  todos.forEach(todo => {
    todosList += `<li>Title: ${todo.name}<br> Completed: false</li>`
  });
  return todosList;
}

function header() {
  return `
  <header>
  <h1>
    Todoist
  </h1>
  <nav>
    <li>Home</li>
    <li>My Todos</li>
    <li>Register</li>
  </nav>
</header>`
}



function footer() {
  return `<footer></footer>`
}

function users(content) {
  return `<section>
  <h1>Users</h1>
  <ul>${content}</ul>
  </section>`
}

function register() {
  return `<section class="main-form">
  <form method="post">
    <input type="text" name="name" placeholder="Name">
    <input type="email" name="email" placeholder="email">
    <input type="text" name="phone" placeholder="phone">
    <input type="submit" name="submit">
  </form>
</section>`
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
  header,
  footer,
  users,
  deleteUser,
  todos,
  register,
  addTodo,
  assignTodo
}