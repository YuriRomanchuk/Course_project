const express = require('express');
const router = express.Router();

// import controller
const { createDepartment, getDepartments, updateDepartment, deleteDepartment } = require('../controllers/departmentControllers');

router.post('/',createDepartment);
router.get('/', getDepartments);
router.put('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);

module.exports = router;
