
// import React, { useState } from "react";
// import "../styles/TaskCard.css";
// import { findMax, findMin, binarySearchById } from "../utils/arrayUtils";
// import TaskList from "./TaskList";

// const TaskCard = ({ tasks, setTasks }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResult, setSearchResult] = useState(null);
//   const [linearTime, setLinearTime] = useState(null);
//   const [binaryTime, setBinaryTime] = useState(null);

//   // Reverse tasks
//   const handleReverse = () => {
//     if (!tasks || tasks.length === 0) {
//       return alert("There is no Task!!");
//     }
//     setTasks([...tasks].reverse());
//   };

//   // Find Max ID
//   const handleFindMax = () => {
//     alert(`Max Task ID: ${findMax(tasks)}`);
//   };

//   // Find Min ID
//   const handleFindMin = () => {
//     alert(`Min Task Id: ${findMin(tasks)}`);
//   };

//   // Linear search (ID or Name)
//   const handleLinearSearch = () => {
//     if (!searchQuery.trim()) {
//       alert("Please enter a task name or ID to search");
//       return;
//     }

//     const startTime = performance.now(); // Start timer

//     const foundTask = tasks.find(
//       (task) =>
//         task.id === Number(searchQuery) ||
//         task.name.toLowerCase() === searchQuery.toLowerCase()
//     );

//     const endTime = performance.now(); // End timer
//     setLinearTime((endTime - startTime).toFixed(4)); // Save time in ms

//     if (foundTask) {
//       setSearchResult(foundTask);
//     } else {
//       setSearchResult(null);
//       alert("Task not found!");
//     }
//   };

//   // Binary Search (Search by ID only)
//   const handleBinarySearch = () => {
//     if (!searchQuery.trim() || isNaN(searchQuery)) {
//       alert("Please enter a valid Task ID for Binary Search");
//       return;
//     }

//     // Sort tasks before binary search
//     const sortedTasks = [...tasks].sort((a, b) => a.id - b.id);

//     const startTime = performance.now(); // Start timer

//     const foundTask = binarySearchById(sortedTasks, Number(searchQuery));

//     const endTime = performance.now(); // End timer
//     setBinaryTime((endTime - startTime).toFixed(4)); // Save time in ms

//     if (foundTask) {
//       setSearchResult(foundTask);
//     } else {
//       setSearchResult(null);
//       alert("Task not found using Binary Search!");
//     }
//   };

//   return (
//     <section className="task-section">
//       <h2 className="task-heading">Tasks</h2>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="search"
//           placeholder="Search by task name or ID"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleLinearSearch}>Linear Search</button>
//         <button onClick={handleBinarySearch}>Binary Search (ID)</button>
//       </div>

//       {/* Search Result */}
//       {searchResult && (
//         <div className="search-result">
//           <h4>Search Result:</h4>
//           <p>
//             <strong>ID:</strong> {searchResult.id} <br />
//             <strong>Name:</strong> {searchResult.name} <br />
//             <strong>Description:</strong> {searchResult.description}
//           </p>
//         </div>
//       )}

//       {/* Time Results */}
//       <div className="time-results">
//         {linearTime && (
//           <p>
//             ⏱ Linear Search Time: <strong>{linearTime} ms</strong>
//           </p>
//         )}
//         {binaryTime && (
//           <p>
//             ⚡ Binary Search Time: <strong>{binaryTime} ms</strong>
//           </p>
//         )}
//       </div>

//       {/* Task List */}
//       <TaskList tasks={tasks} />

//       {/* Action Buttons */}
//       <div className="task-actions">
//         <button onClick={handleReverse}>Reverse Order</button>
//         <button onClick={handleFindMax}>Find Max</button>
//         <button onClick={handleFindMin}>Find Min</button>
//       </div>
//     </section>
//   );
// };

// export default TaskCard;

import React, { useState } from "react";
import "../styles/TaskCard.css";
import { findMax, findMin, binarySearchById } from "../utils/arrayUtils";
import TaskList from "./TaskList";

const TaskCard = ({ tasks, setTasks }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchTime, setSearchTime] = useState(null); // Only one time state
  const [searchType, setSearchType] = useState(""); // To track which search was used

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
    alert(`Min Task Id: ${findMin(tasks)}`);
  };

  // Linear search (ID or Name)
  const handleLinearSearch = () => {
    if (!searchQuery.trim()) {
      alert("Please enter a task name or ID to search");
      return;
    }

    const startTime = performance.now(); // Start timer

    const foundTask = tasks.find(
      (task) =>
        task.id === Number(searchQuery) ||
        task.name.toLowerCase() === searchQuery.toLowerCase()
    );

    const endTime = performance.now(); // End timer

    setSearchResult(foundTask || null);
    setSearchTime((endTime - startTime).toFixed(4)); // Save time
    setSearchType("linear"); // Indicate linear search

    if (!foundTask) alert("Task not found!");
  };

  // Binary Search (Search by ID only)
  const handleBinarySearch = () => {
    if (!searchQuery.trim() || isNaN(searchQuery)) {
      alert("Please enter a valid Task ID for Binary Search");
      return;
    }

    const sortedTasks = [...tasks].sort((a, b) => a.id - b.id);

    const startTime = performance.now(); // Start timer

    const foundTask = binarySearchById(sortedTasks, Number(searchQuery));

    const endTime = performance.now(); // End timer

    setSearchResult(foundTask || null);
    setSearchTime((endTime - startTime).toFixed(4));
    setSearchType("binary"); // Indicate binary search

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

      {/* Time Result - only ONE visible at a time */}
      {/* <div className="time-results">
        {searchTime && (
          <p>
            {searchType === "linear" ? "⏱ Linear Search Time: " : "⚡ Binary Search Time: "}
            <strong>{searchTime} ms</strong>
          </p>
        )}
      </div> */}

      {/* Task List */}
      <TaskList tasks={tasks} />

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
