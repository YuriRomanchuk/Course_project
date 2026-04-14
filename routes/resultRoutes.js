const express = require('express');
const router = express.Router();

// import controller
const { createResult, getResult } = require('../controllers/resultController');

router.post('/',createResult);
router.get('/', getResult);

module.exports = router;
