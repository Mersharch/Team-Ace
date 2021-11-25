import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../../styles/ancicons.css'


function AnCIcons(){
    return(
        <div className="ancicons">
            <div className="dropdown">
                <AiOutlineUser size="23px" className="dropdown-trigger" style={{ marginRight: "35px", }} />
                <div className="dropdown-menu">
                    <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                            Overview
                        </a>
                        <a href="#" class="dropdown-item">
                            Modifiers
                        </a>
                        <a href="#" class="dropdown-item">
                            Grid
                        </a>
                        <a href="#" class="dropdown-item">
                            Form
                        </a>
                        <a href="#" class="dropdown-item">
                            Elements
                        </a>
                        <a href="#" class="dropdown-item">
                            Components
                        </a>
                        <a href="#" class="dropdown-item">
                            Layout
                        </a>
                        <hr class="dropdown-divider" />
                        <a href="#" class="dropdown-item">
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AnCIcons;