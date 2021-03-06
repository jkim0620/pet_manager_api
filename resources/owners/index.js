const express = require('express');
const controller = require('./controller');

const router = express.Router();
const AuthService = require('../../services/auth');

router.route('/:id')
  .all(AuthService.restrict)
  .get(controller.show)
  .put(controller.update)
  .delete(controller.destroy);


router.route('/')
  .all(AuthService.restrict)
  .get(controller.index)
  .post(controller.create);

module.exports = router;
