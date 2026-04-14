const express = require('express');
const router = express.Router();

const {createFaculty, getFaculty} = require("../controllers/facultyController"); // import controller

router.post('/',createFaculty);
router.get('/', getFaculty);

module.exports = router;
