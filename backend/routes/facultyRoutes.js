const express = require('express');
const router = express.Router();

const {createFaculty, getFaculty, updateFaculty, deleteFaculty} = require("../controllers/facultyController"); // import controller

router.post('/',createFaculty);
router.get('/', getFaculty);
router.put('/:id', updateFaculty);
router.delete('/:id', deleteFaculty);

module.exports = router;
