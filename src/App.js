import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
