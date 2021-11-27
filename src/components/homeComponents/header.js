import Navbar from "./navbar";
import AnCIcons from "./ancicons";
import '../../styles/header.css';
import Logo from "./logo";


function Header(){
    return (
        <div className="header">
            <Logo />
            <Navbar />
            <AnCIcons />
        </div>
    )
}

export default Header;