import '../../styles/footer.css';
import { BsFacebook,BsWhatsapp,BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
        <div className="footer">
            
            <div className="flist">
                <h1 className="text1">Just Hair and Fashion Wear</h1>

            </div>
            <div className="align">
            <div className="slist">
                <h2 className="text2">MARKETPLACE</h2>
                <p className="text2">Form Templates</p>
                <p className="text3">Form Themes</p>
                <p className="text4">Form Widgets</p> 
            </div>

            <div className="slist">
                <h2 className="text2">SUPPORT</h2>
                <p className="text2">< Link to="/contact"> Contact Us </Link></p>
                <p className="text3">Terms of Use</p>
                <p className="text4">Privacy Policy</p> 
            </div>

            <div className="slist">
                <h2 className="text2">COMPANY</h2>
                <p className="text2">< Link to="/about">About Us</Link></p>
                <p className="text3">Partnership</p>
                <p className="text4">Newletters</p> 
            </div>
            </div>
           
           <div className="last">
            <h3 className="text5">Follow US</h3>
            
            <BsFacebook className="icons" />
            <BsWhatsapp className="icons"/>
            <BsInstagram className="icons"/>
            <BsTwitter className="icons"/>
            <BsYoutube className="icons"/>
    
            </div>
        </div>
     );
}
 
export default Footer;