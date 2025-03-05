import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ id: Date.now(), name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
