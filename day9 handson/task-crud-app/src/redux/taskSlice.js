import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
      {
        taskId: "1",
        taskName: "Task 1",
        description: "Description for Task 1",
        date: "2025-03-12",
        createdBy: "Deepak",
      },
    ],
  };
  

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.taskId === action.payload.taskId);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.taskId !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
