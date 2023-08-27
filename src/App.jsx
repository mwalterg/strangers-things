import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Posts from "./pages/Posts"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/dashboard"
import NavBar from "./components/NavBar"
import './App.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
};

  return (
    <>
      <div>
        <NavBar token={token} onLogout={handleLogout} />
        <Routes>
          <Route path='/posts' element={< Posts token={token} />} />
          <Route path='/profile' element={< Profile token={token} />} />
          <Route path='/login' element={< Login setToken={setToken} />} />
          <Route path='/register' element={< Register setToken={setToken} />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </>
  )
}

export default App