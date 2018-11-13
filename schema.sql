
create table users(
  id serial primary key,
  name text,
  email text,
  phone text,
  username varchar(200) unique not null,
  password varchar(60)
);

create table todos(
  id serial primary key,
  name text,
  isCompleted boolean,
  user_id integer references users (id) on delete cascade
);