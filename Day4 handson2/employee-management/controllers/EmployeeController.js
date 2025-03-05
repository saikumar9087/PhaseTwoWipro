const uuid = require('uuid').v4;

let employees = [
  { id: "1", name: "Sai", address: "Hyderabad", dept: "Project Engineer", manager: "P Sathwik" },
  { id: "2", name: "Sathwik", address: "Hyderabad", dept: "Salesforce", manager: "Aashrit" },
];

const getEmployees = (req, res) => {
  res.json(employees);
};

const getEmployeeById = (req, res) => {
  const employee = employees.find(emp => emp.id === req.params.id);
  res.json(employee);
};

const createEmployee = (req, res) => {
  const newEmployee = { id: uuid(), ...req.body };
  employees.push(newEmployee);
  res.json(newEmployee);
};

const updateEmployee = (req, res) => {
  const employee = employees.find(emp => emp.id === req.params.id);
  if (employee) {
    Object.assign(employee, req.body);
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};

const deleteEmployee = (req, res) => {
  employees = employees.filter(emp => emp.id !== req.params.id);
  res.json({ message: "Employee deleted" });
};

module.exports = { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };
