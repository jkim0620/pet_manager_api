const express = require('express');
const controller = require('./controller');

const router = express.Router({mergeParams: true});
const AuthService = require('../../services/auth');

router.route('/')
  .all(AuthService.restrict)
  .get(controller.index)
  .post(controller.create);

router.route('/:id')
  .all(AuthService.restrict)
  .get(controller.show)
  .put(controller.update)
  .delete(controller.destroy);

module.exports = router;
