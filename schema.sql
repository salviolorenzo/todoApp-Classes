
create table users(
  id serial primary key,
  name text,
  email text,
  phone text
);

create table todos(
  id serial primary key,
  name text,
  isCompleted boolean,
  user_id integer references users (id) on delete cascade
);