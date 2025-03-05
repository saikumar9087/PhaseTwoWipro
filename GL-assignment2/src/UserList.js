import React, { Component } from 'react';

class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
