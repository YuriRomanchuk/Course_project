const express = require('express');
const router = express.Router();

// import controller
const { createCadet, getCadet, updateCadet, deleteCadet } = require('../controllers/cadetController');

router.post('/',createCadet);
router.get('/', getCadet);
router.put('/:id', updateCadet);
router.delete('/:id', deleteCadet);

module.exports = router;
