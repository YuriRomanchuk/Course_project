const express = require('express');
const router = express.Router();

// import controller
const { createSubject, getSubject } = require('../controllers/subjectController');

router.post('/',createSubject);
router.get('/', getSubject);

module.exports = router;
