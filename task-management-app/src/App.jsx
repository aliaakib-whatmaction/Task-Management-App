import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TaskCard from './components/TaskCard'

function App() {
  return (
    <div className="app-container">
      <Header />

      {/* Main content directly here */}
      <div className="content">
        {/* <h1>Welcome to Task Management App</h1> */}
        <TaskCard/>
      </div>

      <Footer />
    </div>
  )
}

export default App
