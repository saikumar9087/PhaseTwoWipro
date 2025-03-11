import React from "react";
import TaskDashboard from "./TaskDashboard";
import ThemeToggle from "./ThemeToggle";

const App = () => {
    return (
        <ThemeToggle>
            <TaskDashboard />
        </ThemeToggle>
    );
};

export default App;
