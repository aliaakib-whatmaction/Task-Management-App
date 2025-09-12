import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <div className='task-list'>
        <ul>
            {tasks.map((task) => (
                <li key = {task.id} className='task-item'>
                    <span className='task-id'>{task.id}.</span> {task.name}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TaskList