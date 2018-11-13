const db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
class User {
  constructor(id, name, email, phone, username, pwhash) {
    this.id = id,
      this.name = name,
      this.email = email,
      this.phone = phone,
      this.username = username,
      this.pwhash = pwhash
  }

  // CREATE
  static add(name, email, phone, username, password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return db.one(`
      insert into users(name, email, phone, username, password)
      values
        ($1, $2, $3, $4, $5)
      returning id`,
      [name, email, phone, username, hash])
      .then(data => {
        const u = new User(data.id, name, email, phone);
        return u;
      })
  }
  // RETRIEVE
  static getAll() {
    return db.any(`
     select * from users`)
      .then(userArray => {
        const instanceArray = userArray.map(userObj => {
          const u = new User(userObj.id, userObj.name, userObj.email, userObj.phone);
          return u;
        });
        return instanceArray;
      })
  }

  static getById(id) {
    return db.one(`
    select * from users
    where id=$1`,
      [id])
      .then(result => {
        const u = new User(result.id, result.name, result.email, result.phone, result.username, result.password);
        return u;
      })
  }

  static searchByName(name) {
    return db.one(`
    select * from users where name ilike %$1:raw%`, [name]);
  }

  static getByUsername(username) {
    return db.one(`
      select * from users where username ilike '%$1:raw%'`, [username])
      .then(result => {
        const u = new User(result.id, result.name, result.email, result.phone, result.username, result.password);
        return u;
      })
  }

  checkPassword(password) {
    return bcrypt.compareSync(password, this.pwhash);
  }

  getTodos() {
    return db.any(`
    select * from todos where user_id = $1`, [this.id]);
  }
  // UPDATE
  updateName(name) {
    this.name = name;
    return db.result(`
    update users
      set name=$2
      where id=$1`,
      [this.id, name]);
  }

  // DELETE
  deleteSelf() {
    return db.result(`
    delete from users where id=$1`,
      [this.id]);
  }

  static deleteById(id) {
    return db.result(`
    delete from users where id =$1`,
      [id]);
  }
}

module.exports = User;


// WITHOUT CLASS

// // CREATE
// function addUser(name) {
//   return db.one(`insert into users(name)
//     values
//       ($1)
//       returning id`,
//     [name]);
// }

// // RETRIEVE
// function getAll() {
//   return db.any(`select * from users`);
// }

// function getUsersById(id) {
//   return db.any(`select * from users where id=$1`, [id]);
// }

// function getTodosForUser(id) {
//   return db.any(`
//     select * from todos
//       where user_id = $1`, [id]);
// }
// // UPDATE
// function updateName(id, name) {
//   return db.result(`
//     update users
//       set name=$2
//       where id=$1`,
//     [id, name]);
// }

// // DELETE
// function deleteById(id) {
//   return db.result(
//     `delete from users 
//     where id=$1`,
//     [id]
//   );
// }