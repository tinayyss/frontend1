import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Education from './pages/education';
import Hobbies from './pages/hobbies';
import Contact from './pages/contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
