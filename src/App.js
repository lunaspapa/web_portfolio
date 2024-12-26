import './App.css';
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';
import Who from './Components/Who/Who';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Use Framer Motion to animate pages
import { AnimatePresence } from 'framer-motion';

// Framer Motion Routes
function AnimateRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/who" element={<Who />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="wp_app">
        <Nav />
        <main className="wp_content">
          <AnimateRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App;
