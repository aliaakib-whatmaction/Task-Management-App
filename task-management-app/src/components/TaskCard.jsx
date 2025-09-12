import React, { useState } from "react";
import "../styles/TaskCard.css"; // Import CSS for styling
import { findMax, findMin, reverseArray } from "../utils/arrayUtils";
import TaskList from "./TaskList";

const TaskCard = () => {
  const initialTasks = [
    { id: 101, name: "Basic React Js" },
    { id: 102, name: "JSX and its syntax" },
    { id: 103, name: "Form Handling in React" },
    { id: 104, name: "Event Handling" },
    { id: 105, name: "React Props" },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  //Reverse array
  // const handleReverse = () => {
  //   setTasks(reverseArray(tasks));
  //   if tasks === null();
  //   return alert('There is no Task!!');
  // };
  const handleReverse = () => {
    if (!tasks || tasks.length === 0) {
      return alert("There is no Task!!");
    }
    setTasks([...tasks].reverse());
  };

  //Find Max
  const handleFindMax = () => {
    alert(`Max Task ID: ${findMax(tasks)}`);
  };

  //Find Min
  const handleFindMin = () => {
    alert(`Min Task Id: ${findMin(tasks)}`);
  };

  //Add dummy task
  const handleAddTask = () => {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: `New Task ${tasks.length + 1}`,
    };
    setTasks([...tasks, newTask]);
  };

  //Linear search for task by id or name
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("Please enter a task name or ID to search");
      return;
    }

    // Linear search
    const foundTask = tasks.find(
      (task) =>
        task.id === Number(searchQuery) || // Match by ID
        task.name.toLowerCase() === searchQuery.toLowerCase() // Match by name (case insensitive)
    );

    if (foundTask) {
      setSearchResult(foundTask);
    } else {
      setSearchResult(null);
      alert("Task not found!");
    }
  };
  return (
    <section className="task-section">
      <h2 className="task-heading">Tasks</h2>

      <div className="search-bar">
        <input
          type="search"
          placeholder="search by task name or id"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Task List */}
      <TaskList tasks={tasks} />

      {/* Show search result */}
      {searchResult && (
        <div className="search-result">
          <h4>Search Result:</h4>
          <p>
            <strong>ID:</strong> {searchResult.id} <br />
            <strong>Name:</strong> {searchResult.name} <br />
          </p>
        </div>
      )}

      {/* <div className="task-card">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span className="task-id">{task.id}.</span> {task.name}
            </li>
          ))}
        </ul>
      </div> */}

      {/* Button for operations */}
      <div className="task-actions">
        <button onClick={handleReverse}>Reverse Order</button>
        <button onClick={handleFindMax}>Find Max</button>
        <button onClick={handleFindMin}>Find Min</button>

        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </section>
  );
};

export default TaskCard;
