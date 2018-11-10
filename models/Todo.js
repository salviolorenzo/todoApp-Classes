const db = require('./db');

class Todo {
  constructor(id, name, isCompleted) {
    this.id = id,
      this.name = name,
      this.isCompleted = isCompleted
  }

  // CREATE
  static add(name, isCompleted) {
    return db.one(
      `insert into todos(name, isCompleted)
      values 
        ($1, $2)
      returning id`,
      [name, isCompleted]
    )
      .then(data => {
        const t = new Todo(data.id, name, isCompleted);
        return t;
      })
  }

  // RETRIEVE
  static getAll() {
    return db.any(`
    select * from todos`)
      .then(todoArray => {
        const instanceArray = todoArray.map(todoObj => {
          const t = new Todo(todoObj.id, todoObj.name, todoObj.isCompleted);
          return t;
        })
        return instanceArray;
      })
  }

  static getById(id) {
    return db.one(`
    select * from todos where id =$1`, [id])
      .then(result => {
        const t = new Todo(result.id, result.name, result.isCompleted);
        return t;
      })
  }
  // UPDATE
  assignTodo(userId) {
    return db.result(`
      update todos
        set user_id=$2
      where id=$1`,
      [this.id, userId]);
  }

  updateName(name) {
    this.name = name;
    return db.result(`update todos
      set name=$2
      where id =$1`,
      [this.id, name])
  }

  updateCompleted(isCompleted) {
    this.isCompleted = isCompleted;
    return db.result(`update todos
      set isCompleted=$2
    where id=$1`,
      [this.id, isCompleted]);
  }

  // DELETE
  static deleteById(id) {
    return db.result(`
      delete from todos where id=$1`, [id]);
  }
}

module.exports = Todo;


// // CREATE
// function add(name, isCompleted) {
//   return db.one(
//     `insert into todos(name, isCompleted)
//     values
//       ($1, $2)
//       returning id`,
//     [name, isCompleted]
//   );
// }

// // RETRIEVE
// function getAll() {
//   return db.any(`select * from todos`);
// }

// function getById(id) {
//   return db.one(`select * from todos where id=$1`, [id])
//     .catch(err => {
//       return {
//         name: `No todo found`
//       }
//     });
// }
// // UPDATE
// function assignToUser(todoId, userId) {
//   return db.result(`
//     update todos
//       set user_id = $2
//     where id=$1`,
//     [todoId, userId]);
// }

// function updateName(id, name) {
//   return db.result(`update todos
//     set name=$2
//   where id=$1`,
//     [id, name]);
// }

// function updateCompleted(id, isCompleted) {
//   return db.result(`update todos
//     set isCompleted=$2
//   where id=$1`,
//     [id, isCompleted]);
// }

// // DELETE
// function deleteById(id) {
//   return db.result(`delete from todos where id=$1`, [id]);
// }