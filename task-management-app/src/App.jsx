import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

function App() {
  // Global state for tasks
  const [tasks, setTasks] = useState([
  {
    id: 101,
    name: "Basic React Js",
    description: "Learn the fundamentals of React, including components, state, and rendering."
  },
  {
    id: 102,
    name: "JSX and its syntax",
    description: "Understand JSX syntax and how it simplifies writing React components."
  },
  {
    id: 103,
    name: "Form Handling in React",
    description: "Learn how to manage form inputs, controlled components, and form submissions in React."
  },
  {
    id: 104,
    name: "Event Handling",
    description: "Practice handling events like clicks, inputs, and custom events in React components."
  },
  {
    id: 105,
    name: "React Props",
    description: "Understand how to pass and use data between components using props."
  },
  {
    id: 106,
    name: "React State",
    description: "Master managing state in React components effectively."
  },
  {
    id: 107,
    name: "Conditional Rendering",
    description: "Learn to render different components based on conditions."
  },
  {
    id: 108,
    name: "React Lists and Keys",
    description: "Understand how to work with dynamic lists and unique keys."
  },
  {
    id: 109,
    name: "Component Lifecycle",
    description: "Dive into lifecycle methods and hooks for functional components."
  },
  {
    id: 110,
    name: "useEffect Hook Basics",
    description: "Understand how to use useEffect for side effects and data fetching."
  },
  {
    id: 111,
    name: "useState Hook Basics",
    description: "Learn to manage local state using the useState hook."
  },
  {
    id: 112,
    name: "Custom Hooks",
    description: "Build custom hooks to reuse logic across multiple components."
  },
  {
    id: 113,
    name: "useContext Hook",
    description: "Learn to manage global state using the useContext hook."
  },
  {
    id: 114,
    name: "React Router Basics",
    description: "Understand routing in React apps using React Router."
  },
  {
    id: 115,
    name: "Dynamic Routes",
    description: "Implement dynamic routing with URL parameters in React Router."
  },
  {
    id: 116,
    name: "Protected Routes",
    description: "Learn how to secure routes using authentication checks."
  },
  {
    id: 117,
    name: "API Fetching with Fetch API",
    description: "Learn to fetch data from APIs using the Fetch API in React."
  },
  {
    id: 118,
    name: "API Fetching with Axios",
    description: "Use Axios library to fetch and manage API requests."
  },
  {
    id: 119,
    name: "Error Handling in API Requests",
    description: "Handle errors gracefully while fetching data from APIs."
  },
  {
    id: 120,
    name: "React Query Basics",
    description: "Use React Query to manage server state and API caching."
  },
  {
    id: 121,
    name: "Redux Basics",
    description: "Learn the core principles of Redux for state management."
  },
  {
    id: 122,
    name: "Redux Toolkit",
    description: "Simplify Redux implementation using Redux Toolkit."
  },
  {
    id: 123,
    name: "useReducer Hook",
    description: "Manage complex component state with useReducer."
  },
  {
    id: 124,
    name: "Debouncing in React",
    description: "Implement debouncing to optimize performance in search and input handling."
  },
  {
    id: 125,
    name: "Throttling in React",
    description: "Use throttling to improve performance in event handling."
  },
  {
    id: 126,
    name: "React Memo",
    description: "Optimize component rendering using React.memo."
  },
  {
    id: 127,
    name: "useCallback Hook",
    description: "Prevent unnecessary re-renders with useCallback."
  },
  {
    id: 128,
    name: "useMemo Hook",
    description: "Improve performance by memoizing expensive calculations."
  },
  {
    id: 129,
    name: "Lazy Loading Components",
    description: "Implement code splitting and lazy loading for performance optimization."
  },
  {
    id: 130,
    name: "Error Boundaries",
    description: "Learn to handle component errors using error boundaries."
  },
  {
    id: 131,
    name: "Higher-Order Components",
    description: "Understand and implement Higher-Order Components in React."
  },
  {
    id: 132,
    name: "Render Props Pattern",
    description: "Learn how to use render props for reusability."
  },
  {
    id: 133,
    name: "React Portals",
    description: "Render children into a DOM node outside the parent component hierarchy."
  },
  {
    id: 134,
    name: "Framer Motion Basics",
    description: "Add animations to React components using Framer Motion."
  },
  {
    id: 135,
    name: "CSS Modules",
    description: "Scope CSS styles locally using CSS Modules."
  },
  {
    id: 136,
    name: "Styled Components",
    description: "Use styled-components for dynamic styling in React."
  },
  {
    id: 137,
    name: "Tailwind CSS Basics",
    description: "Integrate and use Tailwind CSS with React projects."
  },
  {
    id: 138,
    name: "Responsive Design",
    description: "Build fully responsive UI layouts in React."
  },
  {
    id: 139,
    name: "Dark Mode Implementation",
    description: "Implement dark mode toggling in React."
  },
  {
    id: 140,
    name: "Accessibility in React",
    description: "Ensure accessibility (a11y) in React applications."
  },
  {
    id: 141,
    name: "Unit Testing with Jest",
    description: "Test individual functions and components using Jest."
  },
  {
    id: 142,
    name: "Testing Library Basics",
    description: "Use React Testing Library for component testing."
  },
  {
    id: 143,
    name: "Snapshot Testing",
    description: "Write snapshot tests for consistent UI behavior."
  },
  {
    id: 144,
    name: "Cypress Testing",
    description: "Perform end-to-end testing with Cypress."
  },
  {
    id: 145,
    name: "React Performance Profiling",
    description: "Use React DevTools to profile and optimize performance."
  },
  {
    id: 146,
    name: "Webpack Basics",
    description: "Understand and configure Webpack for bundling React apps."
  },
  {
    id: 147,
    name: "Vite Setup",
    description: "Use Vite for faster React development and builds."
  },
  {
    id: 148,
    name: "TypeScript with React",
    description: "Integrate TypeScript into React for type safety."
  },
  {
    id: 149,
    name: "PropTypes Validation",
    description: "Validate component props with PropTypes."
  },
  {
    id: 150,
    name: "React App Deployment",
    description: "Deploy React applications to platforms like Netlify or Vercel."
  },
  {
    id: 151,
    name: "Git Basics",
    description: "Learn basic Git commands for version control."
  },
  {
    id: 152,
    name: "Branching and Merging in Git",
    description: "Master branching strategies in Git."
  },
  {
    id: 153,
    name: "GitHub Basics",
    description: "Learn to use GitHub for hosting repositories and collaboration."
  },
  {
    id: 154,
    name: "Pull Requests and Code Reviews",
    description: "Understand pull requests and perform effective code reviews."
  },
  {
    id: 155,
    name: "CI/CD Basics",
    description: "Learn Continuous Integration and Deployment workflows."
  },
  {
    id: 156,
    name: "REST API Basics",
    description: "Understand RESTful APIs and their architecture."
  },
  {
    id: 157,
    name: "CRUD Operations",
    description: "Perform CRUD operations using APIs in React."
  },
  {
    id: 158,
    name: "JWT Authentication",
    description: "Implement user authentication with JWT tokens."
  },
  {
    id: 159,
    name: "React with Firebase",
    description: "Integrate Firebase for authentication and database management."
  },
  {
    id: 160,
    name: "GraphQL Basics",
    description: "Learn GraphQL fundamentals and queries."
  },
  {
    id: 161,
    name: "Apollo Client Integration",
    description: "Use Apollo Client to manage GraphQL data in React."
  },
  {
    id: 162,
    name: "WebSockets Basics",
    description: "Understand WebSockets for real-time communication."
  },
  {
    id: 163,
    name: "Socket.IO with React",
    description: "Integrate Socket.IO for real-time features like chat."
  },
  {
    id: 164,
    name: "Service Workers",
    description: "Implement service workers for offline functionality."
  },
  {
    id: 165,
    name: "PWA Basics",
    description: "Convert React apps into Progressive Web Apps."
  },
  {
    id: 166,
    name: "Docker Basics",
    description: "Learn how to containerize React apps using Docker."
  },
  {
    id: 167,
    name: "Micro Frontends",
    description: "Understand and implement micro frontend architecture."
  },
  {
    id: 168,
    name: "Next.js Basics",
    description: "Learn the fundamentals of Next.js for server-side rendering."
  },
  {
    id: 169,
    name: "Static Site Generation",
    description: "Use Next.js for generating static sites."
  },
  {
    id: 170,
    name: "Server Components in React",
    description: "Explore the concept of React Server Components."
  },
  {
    id: 171,
    name: "React Native Basics",
    description: "Start building cross-platform mobile apps with React Native."
  },
  {
    id: 172,
    name: "Push Notifications",
    description: "Implement push notifications in React apps."
  },
  {
    id: 173,
    name: "OAuth 2.0 Authentication",
    description: "Set up authentication using OAuth 2.0 in React."
  },
  {
    id: 174,
    name: "Internationalization (i18n)",
    description: "Add support for multiple languages in React apps."
  },
  {
    id: 175,
    name: "Web Vitals Monitoring",
    description: "Monitor web vitals for performance metrics."
  },
  {
    id: 176,
    name: "SEO for React Apps",
    description: "Optimize React applications for search engines."
  },
  {
    id: 177,
    name: "Lazy Loading Images",
    description: "Implement lazy loading for images to improve performance."
  },
  {
    id: 178,
    name: "Infinite Scrolling",
    description: "Build infinite scroll functionality in React."
  },
  {
    id: 179,
    name: "Pagination",
    description: "Implement pagination for data-heavy React apps."
  },
  {
    id: 180,
    name: "Virtualized Lists",
    description: "Use libraries like react-window for large lists."
  },
  {
    id: 181,
    name: "Drag and Drop",
    description: "Implement drag-and-drop features in React."
  },
  {
    id: 182,
    name: "Clipboard API Integration",
    description: "Use the Clipboard API for copying and pasting data."
  },
  {
    id: 183,
    name: "Notifications API",
    description: "Show desktop notifications using the Notifications API."
  },
  {
    id: 184,
    name: "Geolocation API",
    description: "Access user location using the Geolocation API."
  },
  {
    id: 185,
    name: "WebRTC Basics",
    description: "Learn about peer-to-peer communication using WebRTC."
  },
  {
    id: 186,
    name: "Building a Chat App",
    description: "Create a real-time chat application using React and WebSockets."
  },
  {
    id: 187,
    name: "Building a Todo App",
    description: "Develop a simple CRUD-based Todo application."
  },
  {
    id: 188,
    name: "Building a Weather App",
    description: "Fetch and display weather data from a public API."
  },
  {
    id: 189,
    name: "Building a Blog",
    description: "Create a blog application with markdown support."
  },
  {
    id: 190,
    name: "Building an E-commerce App",
    description: "Develop an e-commerce platform with cart functionality."
  },
  {
    id: 191,
    name: "Building a Portfolio",
    description: "Design and deploy a personal portfolio using React."
  },
  {
    id: 192,
    name: "Building a Quiz App",
    description: "Create a quiz application with dynamic questions."
  },
  {
    id: 193,
    name: "Building a Movie Search App",
    description: "Fetch movie data from APIs like OMDb or TMDB."
  },
  {
    id: 194,
    name: "Building a Finance Tracker",
    description: "Track expenses and income with React."
  },
  {
    id: 195,
    name: "Building a Task Management App",
    description: "Develop a task manager with deadlines and priorities."
  },
  {
    id: 196,
    name: "Building a Real-Time Dashboard",
    description: "Create a dashboard with live data updates."
  },
  {
    id: 197,
    name: "Building a Booking System",
    description: "Develop a booking application for events or services."
  },
  {
    id: 198,
    name: "Building a Recipe App",
    description: "Fetch and display recipes from a public API."
  },
  {
    id: 199,
    name: "Building a Travel Planner",
    description: "Create a travel planning app with itinerary management."
  },
  {
    id: 200,
    name: "Final Capstone Project",
    description: "Combine all concepts learned into a full-fledged project."
  }
]);


  return (
    <Router>
      <div className="app-container">
        <Header />

        {/* Main content */}
        <div className="content">
          <Routes>
            {/* Task List Page */}
            <Route path="/" element={<TaskCard tasks={tasks} setTasks={setTasks} />} />

            {/* Add Task Page */}
            <Route path="/add-task" element={<TaskForm tasks={tasks} setTasks={setTasks} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
