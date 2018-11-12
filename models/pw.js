const bcrypt = require('bcrypt');

// Number of rounds to salt
const saltRounds = 10;
// Adds arbitrary characters
const salt = bcrypt.genSaltSync(saltRounds);
// Hashes password
const hash = bcrypt.hashSync('thing', salt);
console.log(hash);

// compare entered value to hashed password value
const didMatch = bcrypt.compareSync('thingma', hash);
console.log(didMatch);
