import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { useNavigate, useParams } from "react-router-dom";

const DeleteTask = () => {
  const { id } = useParams(); // Task ID from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteTask(id));
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Delete Task</h1>
      <p>Are you sure you want to delete this task?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={handleCancel}>No, Cancel</button>
    </div>
  );
};

export default DeleteTask;
