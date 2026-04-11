const express = require('express');
const router = express.Router();

const {createFaculty} = require("../controllers/facultyController"); // import controller

router.post('/',createFaculty);

module.exports = router;
