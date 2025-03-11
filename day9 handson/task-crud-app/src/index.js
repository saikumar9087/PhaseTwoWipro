import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import taskReducer from "./redux/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// Use createRoot for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

