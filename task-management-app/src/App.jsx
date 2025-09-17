import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

function App() {
  // ✅ Load tasks from localStorage or start with an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks change 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className="app-container">
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<TaskCard tasks={tasks} setTasks={setTasks} />} />
            <Route path="/add-task" element={<TaskForm tasks={tasks} setTasks={setTasks} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
