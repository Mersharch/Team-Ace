import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import LogIn from './pages/login';
import SignUp from './pages/signup';
import Hair from './pages/hair';
import Clothes from './pages/clothes';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/hair" element={<Hair />} />
          <Route exact path="/clothes" element={<Clothes />} />


          
          


        </Routes>
      </div>
    </Router>
  );
}

export default App;
