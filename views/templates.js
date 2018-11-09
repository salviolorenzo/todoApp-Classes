function home() {
  // let contentItem = `<li>${content}</li>`;
  return `<!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <link href="index.css" rel="stylesheet">
      <style>
        hmtl, body{
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        body{ 
          font-family: 'Courier New', Courier, monospace;
        }

        header{
          border: 1px solid rgba(0,0,0,0.4);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        nav{
          width: 100%;
          list-style-type: none;
          display: flex;
          padding: 0;
          justify-content: space-evenly;
        }
        </style>
    </head>
    <body>
      <header>
        <h1>TODOIST</h1>
        <nav>
        <li>Home</li>
        <li>My Todos</li>
        <li>Register</li>
      </nav>
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="styles/index.css" rel="stylesheet">
</head>
  <body>
  <header>
    <h1>TODOIST</h1>
    <nav>
      <li>Home</li>
      <li>My Todos</li>
      <li>Register</li>
    </nav>
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
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="styles/index.css" rel="stylesheet">
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

function assignTodo() {
  return `<!doctype html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="styles/index.css" rel="stylesheet">
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
      <h1>Assign Todos</h1>
        <form method="post">
          <input type="text" name="id" placeholder="UserId">
          <input type="submit" name="submit">
        </form>
      </section>
      <footer>
      </footer>
    </body>
  </html>`
}


module.exports = {
  home,
  register,
  users,
  assignTodo
}