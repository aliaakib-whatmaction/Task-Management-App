import React, { useState } from "react";
import "../styles/TaskCard.css";

const TaskList = ({ tasks }) => {
  const [openTaskId, setOpenTaskId] = useState(null); // Track which task is expanded

  const toggleTask = (taskId) => {
    setOpenTaskId(openTaskId === taskId ? null : taskId); // Close if same task clicked
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${openTaskId === task.id ? "expanded" : ""}`}
          >
            {/* Task Header */}
            <div className="task-header" onClick={() => toggleTask(task.id)}>
              <div className="task-title">
                <span className="task-id">{task.id}.</span>
                <span className="task-name">{task.name}</span>
              </div>

              {/* Arrow icon changes dynamically */}
              <span className="task-arrow">
                {openTaskId === task.id ? "˄" : "˅"}
              </span>
            </div>

            {/* Description - will expand smoothly */}
            <div
              className={`task-description-wrapper ${
                openTaskId === task.id ? "open" : ""
              }`}
            >
              <div className="task-description">{task.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
