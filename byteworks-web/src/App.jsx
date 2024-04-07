import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import Register from './pages/Register/register'
import Enterprise from './pages/Enterprise/enterprise'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Profile from './pages/Talent/Profile'
import Apply from './pages/Talent/Apply'
import Users from './pages/Talent/Users'
import Context from './context/ByteContext'
import useData from './hooks/useData'

function App() {
  const globalState = useData()

  return (
    <Context.Provider value={globalState}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer/>
    </Context.Provider>
  )
}
export default App;