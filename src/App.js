import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import LogIn from './pages/login';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<LogIn />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
