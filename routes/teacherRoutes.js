const express = require('express');
const router = express.Router();

// import controller
const { createTeacher, getTeacher } = require('../controllers/teacherController');

router.post('/',createTeacher);
router.get('/', getTeacher);

module.exports = router;
