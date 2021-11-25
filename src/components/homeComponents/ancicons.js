import { AiOutlineUser } from "react-icons/ai";
import '../../styles/ancicons.css'


function AnCIcons(){
    return(
        <div className="ancicons">
            <div className="dropdown">
                <AiOutlineUser size="23px" className="dropdown-trigger" style={{ marginRight: "35px", }} />
                <div className="dropdown-menu">
                    <div className="dropdown-content">
                        <a href="/" className="dropdown-item">
                            Overview
                        </a>
                        <a href="/" className="dropdown-item">
                            Modifiers
                        </a>
                        <a href="/" className="dropdown-item">
                            Grid
                        </a>
                        <a href="/" className="dropdown-item">
                            Form
                        </a>
                        <a href="/" className="dropdown-item">
                            Elements
                        </a>
                        <a href="/" className="dropdown-item">
                            Components
                        </a>
                        <a href="/" className="dropdown-item">
                            Layout
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="/" className="dropdown-item">
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AnCIcons;