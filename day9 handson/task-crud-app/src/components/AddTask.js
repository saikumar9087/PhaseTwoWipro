import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState({
    taskId: "",
    taskName: "",
    description: "",
    date: "",
    createdBy: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(addTask(task));
    navigate("/");
  };

  return (
    <div>
      <h1>Add Task</h1>
      <input name="taskId" onChange={handleChange} placeholder="Task ID" />
      <input name="taskName" onChange={handleChange} placeholder="Task Name" />
      <input name="description" onChange={handleChange} placeholder="Description" />
      <input name="date" type="date" onChange={handleChange} placeholder="Date" />
      <input name="createdBy" onChange={handleChange} placeholder="Created By" />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default AddTask;
