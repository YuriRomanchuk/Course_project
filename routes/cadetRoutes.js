const express = require('express');
const router = express.Router();

// import controller
const { createCadet, getCadet } = require('../controllers/cadetController');

router.post('/',createCadet);
router.get('/', getCadet);

module.exports = router;
