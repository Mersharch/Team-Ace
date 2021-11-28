import { AiOutlineSearch } from "react-icons/ai";
import '../../styles/searchbar.css';



function SearchBar(){
    return(
        <div className="searchbar">
            <input type='text' placeholder='Search...' className="search-bar" />
            <AiOutlineSearch size="20px" />

        </div>
    )
}

export default SearchBar;