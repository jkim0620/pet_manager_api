const db = require('../config/database');

const Owner = {};

Owner.findAll = () => {
  return db.manyOrNone(`
    SELECT * FROM owners
  `);
}

Owner.create = (owner) => {
  return db.one(`
    INSERT INTO owners (
      first_name,
      last_name,
      email,
      phone_number
    ) VALUES (
      $/first_name/,
      $/last_name/,
      $/email/,
      $/phone_number/
    )
    RETURNING *
  `, owner);
}

Owner.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM owners
    WHERE id = $1
  `, [id]);
}

Owner.update = (owner, id) => {
  return db.none(`
    UPDATE owners SET
    first_name = $1,
    last_name = $2,
    email = $3,
    phone_number = $4
    WHERE id = $5
  `, [owner.first_name, owner.last_name, owner.email, owner.phone_number, id]);
}

Owner.destroy = (id) => {
  return db.none(`
    DELETE FROM owners
    WHERE id = $1
  `, id);
}

module.exports = Owner;
