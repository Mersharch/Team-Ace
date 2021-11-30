import { AiOutlineUser } from "react-icons/ai";
import '../../styles/ancicons.css'
import { Link } from "react-router-dom";


function AnCIcons(){
    return(
        <div className="ancicons">
            <div className="dropdown">
                <AiOutlineUser size="23px" className="dropdown-trigger" style={{ marginRight: "35px", }} />
                <div className="dropdown-menu">
                    <div className="dropdown-content">

                        <hr className="dropdown-divider" /> 
                        <Link to="/" className="dropdown-item">
                            Bag
                        </Link>

                        <hr className="dropdown-divider" />
                        <Link to="/" className="dropdown-item">
                            Saved Items
                        </Link>

                        <hr className="dropdown-divider" />
                        <Link to="/" className="dropdown-item">
                            Orders
                        </Link>

                        <hr className="dropdown-divider" />
                        <Link to="/" className="dropdown-item">
                            Account
                        </Link>

                        <hr className="dropdown-divider" />
                        <Link to="/signin" className="dropdown-item">
                            Sign in
                        </Link>
                        
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AnCIcons;