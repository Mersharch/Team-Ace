import Navbar from "./navbar";
import SearchBar from "./search";
import AnCIcons from "./ancicons";
import '../../styles/header.css';
import Logo from "./logo";


function Header(){
    return (
        <div className="header">
            <Logo />
            <SearchBar />
            <Navbar />
            <AnCIcons />
        </div>
    )
}

export default Header;