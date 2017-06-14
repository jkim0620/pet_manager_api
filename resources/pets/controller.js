const Pet = require('../../models/pet');

const controller = {};

controller.index = (req, res) => {
  Pet
  .findAll(req.params.id)
  .then((pet) => {
    res
    .status(200)
    .json(pet);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.show = (req, res) => {
  Pet
  .findById(req.params.owner_id, req.params.id)
  .then((pet) => {
    res
    .status(200)
    .json(pet);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.create = (req, res) => {
  Pet
  .create(req.body.pet, req.params.owner_id)
  .then((pet) => {
    res
    .status(201)
    .json(pet);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.update = (req, res) => {
  Pet
  .update(req.body.pet, req.params.owner_id, req.params.id)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.destroy = (req, res) => {
  Pet
  .destroy(req.params.owner_id, req.params.id)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

module.exports = controller;
