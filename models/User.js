const db = require('./db');

class User {
  constructor(id, name, email, phone) {
    this.id = id,
      this.name = name,
      this.email = email,
      this.phone = phone
  }

  // CREATE
  static add(name, email, phone) {
    return db.one(`
      insert into users(name, email, phone)
      values
        ($1, $2, $3)
      returning id`,
      [name, email, phone])
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
        const u = new User(result.id, result.name, result.email, result.phone);
        return u;
      })
  }

  static searchByName(name) {
    return db.one(`
    select * from users where name ilike %$1:raw%`, [name]);
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