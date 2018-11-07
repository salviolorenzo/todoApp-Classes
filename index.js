require('dotenv').config();

const User = require(`./models/User`);
const Todo = require(`./models/Todo`);


User.getById(2)
  .then(result => {
    result.getTodos()
      .then(result => {
        console.log(result)
      })
  })

  .then(result => { console.log(result) })



