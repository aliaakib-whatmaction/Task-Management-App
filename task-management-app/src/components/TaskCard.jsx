import React, { useEffect, useState } from "react";
import "../styles/TaskCard.css";
import { findMax, findMin, binarySearchById } from "../utils/arrayUtils";
import TaskList from "./TaskList";

const TaskCard = ({ tasks, setTasks }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchTime, setSearchTime] = useState(null);
  const [searchType, setSearchType] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortAlgorithm, setSortAlgorithm] = useState("");

  /* 📝 Save to LocalStorage whenever tasks change */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /* ---------------- Sorting Algorithms ---------------- */

  const bubbleSort = (arr, order) => {
    const sortedTasks = [...arr];
    let n = sortedTasks.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
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

  const selectionSort = (arr, order) => {
    const sortedTasks = [...arr];
    let n = sortedTasks.length;

    for (let i = 0; i < n - 1; i++) {
      let extremeIndex = i;
      for (let j = i + 1; j < n; j++) {
        const condition =
          order === "asc"
            ? sortedTasks[j].id < sortedTasks[extremeIndex].id
            : sortedTasks[j].id > sortedTasks[extremeIndex].id;

        if (condition) extremeIndex = j;
      }
      if (extremeIndex !== i) {
        [sortedTasks[i], sortedTasks[extremeIndex]] = [
          sortedTasks[extremeIndex],
          sortedTasks[i],
        ];
      }
    }
    return sortedTasks;
  };

  const nativeSort = (arr, order) => {
    return [...arr].sort((a, b) =>
      order === "asc" ? a.id - b.id : b.id - a.id
    );
  };

  /* ---------------- Sort Handler ---------------- */
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    if (!sortAlgorithm) {
      alert("Please select a sorting algorithm first!");
      return;
    }

    if (order) {
      let sorted = [];

      if (sortAlgorithm === "bubble") {
        sorted = bubbleSort(tasks, order);
      } else if (sortAlgorithm === "selection") {
        sorted = selectionSort(tasks, order);
      } else if (sortAlgorithm === "native") {
        sorted = nativeSort(tasks, order);
      }

      setTasks(sorted); // ✅ state updated
    }
  };

  /* ---------------- Delete Task ---------------- */
const handleDelete = (id) => {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  setTasks(updatedTasks); // ✅ Auto-saved to localStorage
};


  /* ---------------- Reverse Tasks ---------------- */
  const handleReverse = () => {
    if (!tasks || tasks.length === 0) {
      return alert("There is no Task!!");
    }
    setTasks([...tasks].reverse());
  };

  /* ---------------- Find Max & Min ---------------- */
  const handleFindMax = () => {
    alert(`Max Task ID: ${findMax(tasks)}`);
  };

  const handleFindMin = () => {
    alert(`Min Task ID: ${findMin(tasks)}`);
  };

  /* ---------------- Linear Search ---------------- */
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

  /* ---------------- Binary Search ---------------- */
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

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search by task name or ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleLinearSearch}>Linear Search</button>
        <button onClick={handleBinarySearch}>Binary Search (ID)</button>
      </div>

      {/* Time Result */}
      {searchTime && (
        <div className="time-results">
          <p>
            ⏱ {searchType === "linear" ? "Linear" : "Binary"} Search Time:{" "}
            <strong>{searchTime} ms</strong>
          </p>
        </div>
      )}

      {/* Sorting Algorithm Dropdown */}
      <div className="sorting-controls">
        <select
          value={sortAlgorithm}
          onChange={(e) => setSortAlgorithm(e.target.value)}
          className="sort-dropdown"
        >
          <option value="">Select Sorting Algorithm</option>
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="native">Native JS Sort</option>
        </select>

        {/* Ascending / Descending */}
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="sort-dropdown"
        >
          <option value="">Sort Order</option>
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
