const express = require('express');
const router = express.Router();

// import controller
const { createSubject, getSubject, updateSubject, deleteSubject} = require('../controllers/subjectController');

router.post('/',createSubject);
router.get('/', getSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

module.exports = router;
