const helper = require(`./helper`);

function page(content, isLoggedIn = false) {
  return `<!doctype html>
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="../styles/index.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css" rel="stylesheet">
    </head>
    <body>
    ${helper.header()}
    ${
    isLoggedIn ? helper.logoutButton() : helper.loginOrRegister()
    }
    ${content}
    </body>
    <scripts src="">
    </html>`;
}

module.exports = page;