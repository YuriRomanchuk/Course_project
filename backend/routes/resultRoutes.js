const express = require('express');
const router = express.Router();

// import controller
const { createResult, getResult , deleteResult} = require('../controllers/resultController');

router.post('/',createResult);
router.get('/', getResult);
router.delete('/:id', deleteResult);

module.exports = router;
