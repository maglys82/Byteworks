
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import Register from './pages/Register/register'
import Talent from './pages/Talent/talent'
import Enterprise from './pages/Enterprise/enterprise'
import JobDetails from './pages/JobDetails/jobs'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/jobs" element={<JobDetails />} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App;