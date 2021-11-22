import Navbar from "./navbar";
import AnCIcons from "./ancicons";
import '../../styles/header.css';
import Logo from "./logo";
import SearchBar from "./search";


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