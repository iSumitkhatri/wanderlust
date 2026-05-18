import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Post from './pages/Post'
import Login from './pages/Login'
import Admin from './pages/Admin'
import SignUp from './pages/SignUp'

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div style={{
      background: dark ? '#0f0f0f' : '#f9f9f7',
      color: dark ? '#e8e8e8' : '#1a1a18',
      minHeight: '100vh',
      transition: 'background 0.3s, color 0.3s'
    }}>
      <BrowserRouter>
        <Navbar dark={dark} setDark={setDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}