import '../../styles/navbar.css' ;



function Navbar(){
    return(
        <div className="navbar">
            <ul className="nav-list">
                <li className="nav-tabs"><a href="#" className="home">Home</a></li>
                <li className="nav-tabs"><a href="#" className="about">About</a></li>
                <li className="nav-tabs"><a href="#" className="contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;