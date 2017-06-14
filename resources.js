const express = require('express');
const router = express.Router();

router.use('/owners', require('./resources/owners'));

router.use('/owners/:owner_id/pets', require('./resources/pets'));

router.use('/users', require('./resources/users'));

module.exports = router;
