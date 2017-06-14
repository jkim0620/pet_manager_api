const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Owner = require('../models/owner');
const Pet = require('../models/pet');

describe('Pets Resource', () => {

  let ownerRecord;
  let petRecord;

  before((done) => {
    Owner
    .create({
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bjones@gmail.com',
      phone_number: '2121234567'
    })
    .then((owner) => {
      ownerRecord = owner;
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  before((done) => {
    Pet
    .create({
      pet_name: 'Fido',
      age: 2,
      breed: 'Maltese',
      photo: 'someUrl',
      owner_id: ownerRecord.id
    }, ownerRecord.id)
    .then((pet) => {
      petRecord = pet;
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  it('GET /owners/:owner_id/pets/ should return a 200 status code and be an array', (done) => {
    request(app)
    .get(`/owners/${ownerRecord.id}/pets`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      done();
    });
  });

  it('GET /owners/:owner_id/pets/:id should return a 200 status code and be an object', (done) => {
    request(app)
    .get(`/owners/${ownerRecord.id}/pets/${petRecord.id}`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('POST /owners/:owner_id/pets should return 201 status code and an object of the newly-created pet', (done) => {
    request(app)
    .post(`/owners/${ownerRecord.id}/pets`)
    .send({
      pet: {
        pet_name: 'Fido',
        age: 2,
        breed: 'Maltese',
        photo: 'someUrl'
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('PUT /owners/:owner_id/pets/:id should return 200 status code', (done) => {
    request(app)
    .put(`/owners/${ownerRecord.id}/pets/${petRecord.id}`)
    .send({
      pet: {
        age: '5'
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

  it('DELETE /owners/:owner_id/pets/:id should return 200 status code', (done) => {
    request(app)
    .delete(`/owners/${ownerRecord.id}/pets/${petRecord.id}`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

});
