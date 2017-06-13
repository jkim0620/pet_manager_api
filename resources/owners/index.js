const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/:id')
  .get(controller.show)
  .put(controller.update)
  .delete(controller.destroy);


router.route('/')
  .get(controller.index)
  .post(controller.create);

module.exports = router;
