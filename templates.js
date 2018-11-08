function page(content) {
  // let contentItem = `<li>${content}</li>`;
  return `<!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <link href="styles/index.css" rel="stylesheet"
    </head>
    <body>
      <ul>${content}</ul>
    </body>
    </html>`;
}

function register() {
  return `<!doctype html>
    <html>
      <head>
      </head>
      <body>
        <form method="post">
          <input type="text" name="name" placeholder="Name">
          <input type="email" name="email" placeholder="email">
          <input type="text" name="phone" placeholder="phone">
          <input type="submit" name="submit">
        </form>
      </body>
    </html>`;
}


module.exports = {
  page,
  register
}