import '../../styles/navbar.css';
import { Link } from 'react-router-dom';



function Navbar(){
    return(
        <div className="navbar">
            <ul className="nav-list">
                <li className="nav-tabs"><Link to="/" className="home">Home</Link></li>
                <li className="nav-tabs"><Link to="/about" className="about">About</Link></li>
                <li className="nav-tabs"><Link to="/contact" className="contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;