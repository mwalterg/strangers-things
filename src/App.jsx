import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from "./pages/Posts"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NavBar from "./components/NavBar"
import './App.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path='/posts' element={< Posts token={token} />} />
          <Route path='/profile' element={< Profile token={token} />} />
          <Route path='/login' element={< Login setToken={setToken} />} />
          <Route path='/register' element={< Register setToken={setToken} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
