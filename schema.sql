create table todos(
  id serial primary key,
  name text,
  isCompleted boolean
);

create table users(
  id serial primary key,
  name text
);