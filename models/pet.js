const db = require('../config/database');

const Pet = {};

Pet.create = (pet, owner_id) => {
  return db.one(`
    INSERT INTO pets
    (pet_name, age, breed, photo, owner_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [pet.pet_name, pet.age, pet.breed, pet.photo, owner_id]);
}

Pet.findAll = (owner_id) => {
  return db.manyOrNone(`
    SELECT * FROM pets
    WHERE owner_id = $1
  `, [owner_id])
}

Pet.findById = (owner_id, id) => {
  return db.oneOrNone(`
    SELECT * FROM pets
    WHERE owner_id = $1
    AND id = $2
  `, [owner_id, id]);
}

Pet.update = (pet, owner_id, pet_id) => {
  return db.none(`
    UPDATE pets SET
    pet_name = $1,
    age = $2,
    breed = $3,
    photo = $4
    WHERE owner_id = $5
    AND id = $6
  `, [pet.pet_name, pet.age, pet.breed, pet.photo, owner_id, pet_id]);
}

Pet.destroy = (owner_id, pet_id) => {
  return db.none(`
    DELETE FROM pets
    WHERE owner_id = $1
    AND id = $2
  `, [owner_id, pet_id]);
}

module.exports = Pet;
