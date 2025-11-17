import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AuthoringTools from './pages/AuthoringTools'
import EngagementLab from './pages/EngagementLab'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authoring" element={<AuthoringTools />} />
          <Route path="/engagement" element={<EngagementLab />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
