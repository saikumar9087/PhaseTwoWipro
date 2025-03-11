import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../redux/taskSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams(); // Task ID from URL
  const tasks = useSelector(state => state.tasks.tasks);
  const taskToEdit = tasks.find(task => task.taskId === id);
  const [task, setTask] = useState({ ...taskToEdit });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(editTask(task));
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <input name="taskId" value={task.taskId} readOnly />
      <input
        name="taskName"
        value={task.taskName}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <input
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="date"
        value={task.date}
        type="date"
        onChange={handleChange}
        placeholder="Date"
      />
      <input
        name="createdBy"
        value={task.createdBy}
        onChange={handleChange}
        placeholder="Created By"
      />
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
};

export default EditTask;
