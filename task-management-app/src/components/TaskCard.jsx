import React, { useState } from 'react';
import '../styles/TaskCard.css'; // Import CSS for styling
import { findMax, findMin, reverseArray } from '../utils/arrayUtils';


const TaskCard = () => {
  const initialTasks = [
    { id: 101, name: "Basic React Js" },
    { id: 102, name: "JSX and its syntax" },
    { id: 103, name: "Form Handling in React" },
    { id: 104, name: "Event Handling" },
    { id: 105, name: "React Props" }
  ];

  const [tasks, setTasks] = useState(initialTasks);

  //Reverse array
  // const handleReverse = () => {
  //   setTasks(reverseArray(tasks));
  //   if tasks === null();
  //   return alert('There is no Task!!');
  // };
const handleReverse = () => {
  if (!tasks || tasks.length === 0) {
    return alert('There is no Task!!');
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

  return (
    <section className="task-section">
      <h2 className="task-heading">Tasks</h2>

      <div className="task-card">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span className="task-id">{task.id}.</span> {task.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Button for operations */}
      <div className="task-actions">
        <button onClick={handleReverse}>Reverse Order</button>
        <button onClick={handleFindMax}>Find Max</button>
        <button onClick={handleFindMin}>Find Min</button>

      </div>
    </section>
  );
};

export default TaskCard;
