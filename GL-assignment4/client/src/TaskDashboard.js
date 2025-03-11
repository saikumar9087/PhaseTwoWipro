import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const TaskDashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        // Load tasks when the component mounts
        socket.on("loadTasks", (loadedTasks) => setTasks(loadedTasks));

        // Listen for task updates
        socket.on("taskUpdated", (updatedTasks) => setTasks(updatedTasks));

        return () => {
            socket.off("loadTasks");
            socket.off("taskUpdated");
        };
    }, []);

    const addTask = () => {
        if (newTask.trim() !== "") {
            const task = { id: Date.now(), title: newTask };
            socket.emit("addTask", task);
            setNewTask(""); // Clear input field
        }
    };

    const deleteTask = (id) => {
        socket.emit("deleteTask", id);
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Task Dashboard</h1>

            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter task"
                className="border p-2 w-full mb-2"
            />
            <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 mb-4">Add Task</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between p-2 border mb-2">
                        {task.title}
                        <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-2">delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskDashboard;
