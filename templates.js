function home() {
  // let contentItem = `<li>${content}</li>`;
  return `<!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <link href="styles/index.css" rel="stylesheet"
    </head>
    <body>
      <header>
      </header>
      <section>
        <h1>Welcome!</h1>
      </section
    </body>

    </html>`;
}

function users(content) {
  return `<!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <link href="styles/index.css" rel="stylesheet"
  </head>
  <body>
    <header>
    </header>
    <section>
      <h1>Users</h1>
      <ul>${content}</ul>
    </section
  </body>

  </html>`;
}

function register() {
  return `<!doctype html>
    <html>
      <head>
      </head>
      <body>
        <header style="border-bottom: 1px solid black;">
          <h1>
            Todoist
          </h1>
          <nav>
            <li>Home</li>
            <li>My Todos</li>
            <li>Register</li>
          </nav>
        </header>
        <section class="main-form">
          <form method="post">
            <input type="text" name="name" placeholder="Name">
            <input type="email" name="email" placeholder="email">
            <input type="text" name="phone" placeholder="phone">
            <input type="submit" name="submit">
          </form>
        </section>
        <footer>
        </footer>
      </body>
    </html>`;
}


module.exports = {
  home,
  register,
  users
}