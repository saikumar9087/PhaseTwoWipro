const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

let tasks = []; // In-memory task storage

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Send existing tasks when a user connects
    socket.emit("loadTasks", tasks);

    // Handle adding a task
    socket.on("addTask", (task) => {
        tasks.push(task);
        io.emit("taskUpdated", tasks); // Send updated tasks to all clients
    });

    // Handle deleting a task
    socket.on("deleteTask", (taskId) => {
        tasks = tasks.filter(task => task.id !== taskId);
        io.emit("taskUpdated", tasks); // Send updated tasks to all clients
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

server.listen(5000, () => console.log("✅ Server running on port 5000"));
