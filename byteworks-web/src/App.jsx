import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import Register from './pages/Register/register'
import Business from './pages/Register/Business/Business'
import People from './pages/Register/People/People'
import Enterprise from './pages/Enterprise/enterprise'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Profile from './pages/Talent/Profile'
import Apply from './pages/Talent/Apply'
import Users from './pages/Talent/Users'
import Context from './context/ByteContext'
import axios from 'axios'

const initialState = {
  user: null,
  axiosInstance: axios.create({}),
};

function App() {
  const [globalState, setGlobalState] = useState(initialState)

  const setData = (data) => setGlobalState({ ...globalState, user: data });

  return (
    <Context.Provider value={{ ...globalState, setData }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/people" element={<People />} />
        <Route path="/business" element={<Business />} />
        <Route path="/enterpise" element={<Enterprise />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </Context.Provider>
  );
}

export default App;
