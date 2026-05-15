const express = require('express');
const router = express.Router();

// import controller
const { createTeacher, getTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherController');

router.post('/',createTeacher);
router.get('/', getTeacher);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

module.exports = router;
