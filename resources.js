const express = require('express');
const router = express.Router();

router.use('/owners', require('./resources/owners'));

module.exports = router;
