import React, { useState } from "react";
import "../styles/TaskCard.css";
import { findMax, findMin, binarySearchById } from "../utils/arrayUtils";
import TaskList from "./TaskList";

const TaskCard = ({ tasks, setTasks }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchTime, setSearchTime] = useState(null);
  const [searchType, setSearchType] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // ✅ FIXED

  // Bubble Sort Function
  const bubbleSort = (arr, order) => {
    const sortedTasks = [...arr];
    let n = sortedTasks.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) { // ✅ FIXED
        const condition =
          order === "asc"
            ? sortedTasks[j].id > sortedTasks[j + 1].id
            : sortedTasks[j].id < sortedTasks[j + 1].id;

        if (condition) {
          [sortedTasks[j], sortedTasks[j + 1]] = [
            sortedTasks[j + 1],
            sortedTasks[j],
          ];
        }
      }
    }
    return sortedTasks;
  };

  // Sort Handler
  const handleSortChange = (e) => { // ✅ FIXED spelling
    const order = e.target.value;
    setSortOrder(order);
    if (order) {
      const sorted = bubbleSort(tasks, order);
      setTasks(sorted);
    }
  };

  // Delete Task by ID
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Reverse tasks
  const handleReverse = () => {
    if (!tasks || tasks.length === 0) {
      return alert("There is no Task!!");
    }
    setTasks([...tasks].reverse());
  };

  // Find Max ID
  const handleFindMax = () => {
    alert(`Max Task ID: ${findMax(tasks)}`);
  };

  // Find Min ID
  const handleFindMin = () => {
    alert(`Min Task ID: ${findMin(tasks)}`);
  };

  // Linear Search
  const handleLinearSearch = () => {
    if (!searchQuery.trim()) {
      alert("Please enter a task name or ID to search");
      return;
    }

    const startTime = performance.now();
    const foundTask = tasks.find(
      (task) =>
        task.id === Number(searchQuery) ||
        task.name.toLowerCase() === searchQuery.toLowerCase()
    );
    const endTime = performance.now();

    setSearchResult(foundTask || null);
    setSearchTime((endTime - startTime).toFixed(4));
    setSearchType("linear");

    if (!foundTask) alert("Task not found!");
  };

  // Binary Search
  const handleBinarySearch = () => {
    if (!searchQuery.trim() || isNaN(searchQuery)) {
      alert("Please enter a valid Task ID for Binary Search");
      return;
    }

    const sortedTasks = [...tasks].sort((a, b) => a.id - b.id);
    const startTime = performance.now();
    const foundTask = binarySearchById(sortedTasks, Number(searchQuery));
    const endTime = performance.now();

    setSearchResult(foundTask || null);
    setSearchTime((endTime - startTime).toFixed(4));
    setSearchType("binary");

    if (!foundTask) alert("Task not found using Binary Search!");
  };

  return (
    <section className="task-section">
      <h2 className="task-heading">Tasks</h2>

      {/* Search Bar + Sort Dropdown */}
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search by task name or ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleLinearSearch}>Linear Search</button>
        <button onClick={handleBinarySearch}>Binary Search (ID)</button>

        {/* Bubble Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="sort-dropdown"
        >
          <option value="">Sort by (Bubble Sort)</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Search Result */}
      {searchResult && (
        <div className="search-result">
          <h4>Search Result:</h4>
          <p>
            <strong>ID:</strong> {searchResult.id} <br />
            <strong>Name:</strong> {searchResult.name} <br />
            <strong>Description:</strong> {searchResult.description}
          </p>
        </div>
      )}

      {/* Task List */}
      {tasks.length === 0 ? (
        <div className="no-tasks-message">No tasks yet</div>
      ) : (
        <TaskList tasks={tasks} onDelete={handleDelete} />
      )}

      {/* Action Buttons */}
      <div className="task-actions">
        <button onClick={handleReverse}>Reverse Order</button>
        <button onClick={handleFindMax}>Find Max</button>
        <button onClick={handleFindMin}>Find Min</button>
      </div>
    </section>
  );
};

export default TaskCard;
