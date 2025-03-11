import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);

  return (
    <div>
      <h1>Task List</h1>
      <Link to="/add">Add New Task</Link>
      <table border="1">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.taskId}>
              <td>{task.taskId}</td>
              <td>{task.taskName}</td>
              <td>{task.description}</td>
              <td>{task.date}</td>
              <td>{task.createdBy}</td>
              <td>
                <Link to={`/edit/${task.taskId}`}>Edit</Link> |
                <Link to={`/delete/${task.taskId}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
