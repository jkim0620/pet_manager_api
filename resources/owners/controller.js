const Owner = require('../../models/owner');

const controller = {};

controller.index = (req, res) => {
  Owner
  .findAll()
  .then((owners) => {
    res
    .status(200)
    .json(owners);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.create = (req, res) => {
  Owner
  .create(req.body.owner)
  .then((owner) => {
    res
    .status(201)
    .json(owner);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.show = (req, res) => {
  Owner
  .findById(req.params.id)
  .then((owner) => {
    res
    .status(200)
    .json(owner);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.update = (req, res) => {
  Owner
  .update(req.body.owner, req.params.id)
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
  Owner
  .destroy(req.params.id)
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
