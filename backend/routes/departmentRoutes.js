const express = require('express');
const router = express.Router();

// import controller
const { createDepartment, getDepartments } = require('../controllers/departmentControllers');

router.post('/',createDepartment);
router.get('/', getDepartments);

module.exports = router;
