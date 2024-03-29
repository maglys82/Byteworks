import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import Register from './pages/Register/register'
import Enterprise from './pages/Enterprise/enterprise'
import JobDetails from './pages/JobDetails/jobs'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Profile from './pages/Talent/Profile'
import Apply from './pages/Talent/Apply'
import Users from './pages/Talent/Users'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/jobs" element={<JobDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App;