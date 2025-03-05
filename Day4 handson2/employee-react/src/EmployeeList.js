import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul className="list-group">
        {employees.map(emp => (
          <li key={emp.id} className="list-group-item">
            {emp.name} - {emp.dept} (Manager: {emp.manager})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
