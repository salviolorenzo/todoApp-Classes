const db = require('./db');

// CREATE
function add(name, isCompleted) {
  return db.one(
    `insert into todos(name, isCompleted)
    values
      ($1, $2)
      returning id`,
    [name, isCompleted]
  );
}

// RETRIEVE
function getAll() {
  return db.any(`select * from todos`);
}

function getById(id) {
  return db.one(`select * from todos where id=$1`, [id])
    .catch(err => {
      return {
        name: `No todo found`
      }
    });
}
// UPDATE
function assignToUser(todoId, userId) {
  return db.result(`
    update todos
      set user_id = $2
    where id=$1`,
    [todoId, userId]);
}

function updateName(id, name) {
  return db.result(`update todos
    set name=$2
  where id=$1`,
    [id, name]);
}

function updateCompleted(id, isCompleted) {
  return db.result(`update todos
    set isCompleted=$2
  where id=$1`,
    [id, isCompleted]);
}

// DELETE
function deleteById(id) {
  return db.result(`delete from todos where id=$1`, [id]);
}