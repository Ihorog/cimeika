import { Routes, Route, Link } from 'react-router-dom'
import Gallery from './pages/Gallery'
import MotionTest from './components/MotionTest'

function App() {
  return (
    <div className="min-h-screen">
      <nav className="p-4 flex gap-4 bg-gray-100">
        <Link className="text-blue-600" to="/">Home</Link>
        <Link className="text-blue-600" to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MotionTest />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App
