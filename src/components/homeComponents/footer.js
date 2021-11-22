import '../../styles/footer.css';

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
                <p className="text2">About</p>
                <p className="text3">Terms of Use</p>
                <p className="text4">Privacy Policy</p> 
            </div>

            <div className="slist">
                <h2 className="text2">COMPANY</h2>
                <p className="text2">About Us</p>
                <p className="text3">Partnership</p>
                <p className="text4">Newletters</p> 
            </div>
            </div>
           
           <div className="last">
            <h3 className="text5">Follow US</h3>
            </div>
            
        </div>
     );
}
 
export default Footer;