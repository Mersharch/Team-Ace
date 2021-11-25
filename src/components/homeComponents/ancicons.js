import { AiOutlineUser } from "react-icons/ai";
import '../../styles/ancicons.css'


function AnCIcons(){
    return(
        <div className="ancicons">
            <div className="dropdown">
                <AiOutlineUser size="23px" className="dropdown-trigger" style={{ marginRight: "35px", }} />
                <div className="dropdown-menu">
                    <div className="dropdown-content">

                        <hr className="dropdown-divider" /> 
                        <a href="/" className="dropdown-item">
                            Bag
                        </a>

                        <hr className="dropdown-divider" />
                        <a href="/" className="dropdown-item">
                            Saved Items
                        </a>

                        <hr className="dropdown-divider" />
                        <a href="/" className="dropdown-item">
                            Orders
                        </a>

                        <hr className="dropdown-divider" />
                        <a href="/" className="dropdown-item">
                            Account
                        </a>

                        <hr className="dropdown-divider" />
                        <a href="/signin" className="dropdown-item">
                            Sign in
                        </a>
                        
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AnCIcons;