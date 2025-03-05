import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <div>
      <h1>User Management System</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;


