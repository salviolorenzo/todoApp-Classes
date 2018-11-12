insert into users
  (name, email, phone, username, password)
values
  ('John', 'john@john.com', '555555555', 'jonjon', '$2b$10$496xPe8qFemf1791rZsP8.z/m8vTfplJMZ.IllM6E9z9G.BrCx50q'),
  ('Jeff', 'jeff@jeff.com', '555555555', 'jeffy', '$2b$10$496xPe8qFemf1791rZsP8.z/m8vTfplJMZ.IllM6E9z9G.BrCx50q'),
  ('Jesus', 'john@john.com', '555555555', 'jonjon', '$2b$10$496xPe8qFemf1791rZsP8.z/m8vTfplJMZ.IllM6E9z9G.BrCx50q'),
  ('Joan', 'jeff@jeff.com', '555555555', 'jeffy', '$2b$10$496xPe8qFemf1791rZsP8.z/m8vTfplJMZ.IllM6E9z9G.BrCx50q');

insert into todos
  (name, isCompleted)
values
  ('walk the cat', false),
  ('eat some cheese', false),
  ('burn the money', false),
  ('secure the coin', false),
  ('get this bread', false);