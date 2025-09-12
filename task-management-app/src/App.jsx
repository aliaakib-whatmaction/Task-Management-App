// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './components/Header'
// import Footer from './components/Footer'

// function App() {

//   return (
//     <>
//       <Header/>

//     <Footer/>
//     </>
//   )
// }

// export default App

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
