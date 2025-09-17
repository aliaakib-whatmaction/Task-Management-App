import React, { useState } from "react";
import "../styles/TaskCard.css";

const TaskList = ({ tasks, onDelete }) => {
  const [openTaskId, setOpenTaskId] = useState(null);

  const toggleTask = (taskId) => {
    setOpenTaskId(openTaskId === taskId ? null : taskId);
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${openTaskId === task.id ? "expanded" : ""}`}
          >
            <div className="task-header">
              <div className="task-title" onClick={() => toggleTask(task.id)}>
                <span className="task-id">{task.id}.</span>
                <span className="task-name">{task.name}</span>
              </div>

              <div className="task-actions-right">
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(task.id);
                  }}
                >
                  Delete
                </button>

                <span
                  className="task-arrow"
                  onClick={() => toggleTask(task.id)}
                >
                  {openTaskId === task.id ? "˄" : "˅"}
                </span>
              </div>
            </div>

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
