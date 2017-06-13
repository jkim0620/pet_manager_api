const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Owner = require('../models/owner');

describe('Owners Resource', () => {

  let ownerRecord;

  before((done) => {
    Owner
    .create({
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      phone_number: '2121234567'
    })
    .then((owner) => {
      ownerRecord = owner;
      done();
    })
    .catch((err) => {
      console.log(err);
    });
  });

  // 1. GET /owners should return 200 status code and array of owners
  // 2. GET /owners/:id should return status 200 and object representing specific owner
  // 3. POST /owners should return status 201 and object representing new owner
  // 4. PUT /owners/:id should return status 200
  // 5. DELETE /owners/:id should return status 200

  it('GET /owners should return 200 status code and an array of owners', (done) => {
    request(app)
    .get('/owners')
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      done();
    });
  });

  it('GET /owners/:id should return 200 status code and object representing specific owner', (done) => {
    request(app)
    .get(`/owners/${ownerRecord.id}`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('POST /owners should return 201 status code and an object of the newly-created owner', (done) => {
    request(app)
    .post('/owners')
    .send({
      owner: {
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com',
        phone_number: '2121234567'
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('PUT /owners/:id should return 200 status code', (done) => {
    request(app)
    .put(`/owners/${ownerRecord.id}`)
    .send({
      owner: {
        phone_number: '5555555555'
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

  it('DELETE /owners/:id should return 200 status code', (done) => {
    request(app)
    .delete(`/owners/${ownerRecord.id}`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

});
