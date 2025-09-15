import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TaskForm.css";

const TaskForm = ({ tasks, setTasks }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate(); // For redirecting after submit

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please fill out both fields!");
      return;
    }

    // Create a new task
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: formData.title,
      description: formData.description,
    };

    // Add new task to state
    setTasks([...tasks, newTask]);

    alert("Task Added Successfully!");

    // Clear form
    setFormData({ title: "", description: "" });

    // Navigate back to home (task list page)
    navigate("/");
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <h4>Add New Task</h4>
        <input
          type="text"
          name="title"
          placeholder="Enter the title"
          value={formData.title}
          onChange={handleChange}
        />{" "}
        <br />
        <textarea
          name="description"
          placeholder="Enter the description"
          value={formData.description}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
