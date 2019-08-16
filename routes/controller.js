var express = require('express');
var router = express.Router();
var indexRoute = require('./index');

/* GET home page. */
router.use('/', indexRoute);

module.exports = router;
