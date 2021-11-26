import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/home'
import About from './pages/about';
=======
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import LogIn from './pages/login';
import SignUp from './pages/signup';




>>>>>>> eb5b6455f0ee0482328bdc19399e03b8eab073d2


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
<<<<<<< HEAD
=======
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />


>>>>>>> eb5b6455f0ee0482328bdc19399e03b8eab073d2

        </Routes>
      </div>
    </Router>
  );
}

export default App;
