const express = require('express');
const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeeController');
const router = express.Router();

router.get('/', getEmployees);
router.get('/:id', getEmployeeById);
router.post('/add', createEmployee);
router.put('/edit/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

module.exports = router;
