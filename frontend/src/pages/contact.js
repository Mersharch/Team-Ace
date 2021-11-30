import Footer from '../components/homeComponents/footer';
import { BsFacebook,BsWhatsapp,BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import {BiPhoneCall} from "react-icons/bi";
import {CgMail} from "react-icons/cg";
import {HiLocationMarker} from "react-icons/hi";
import Header from '../components/homeComponents/header';
import '../styles/contact.css';

function Contact() {

    return (
        <div>
         <Header />

        <div
            className="main-container">
            <h1 className="h1">Contact Us</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <h4 className="h4">
                        Contact Information
                    </h4>
                    <p className="p">Fill up the form and then click send</p>
                    <div className="icon-text">
                    <BiPhoneCall className="icon"/>
                        <span>+233 24 431 1059</span>
                    </div>
                    <div className="icon-text">
                    <CgMail className="icon"/>
                        <span>Email address</span>
                    </div>
                    <div className="icon-text">
                    <HiLocationMarker className="icon"/>
                        <span>No. 4 Pretoria Avenue East Legon</span>
                    </div>
                    <div className="social-media">
                        <a href="https://www.instagram.com/justhairextensions4u/" className="insta" target="_blank"><BsFacebook className="icons" /></a>
                        <a href="https://www.instagram.com/justhairextensions4u/" className="insta" target="_blank"><BsWhatsapp className="icons"/></a>
                        <a href="https://www.instagram.com/justhairextensions4u/" className="insta" target="_blank"> <BsInstagram className="icons"/> </a> 
                        <a href="https://www.instagram.com/justhairextensions4u/" className="insta" target="_blank"><BsTwitter className="icons"/></a> 
                        <a href="https://www.instagram.com/justhairextensions4u/" className="insta" target="_blank"><BsYoutube className="icons"/></a> 
                            
                    </div>
                    
                </div>
                <form className="form-2">
                    <div className="col">
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" />
                        </div>
                        <div className="form-group">
                            <label>Phone #</label>
                            <input type="tel" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group solo">
                            <label>Message</label>
                            <textarea></textarea>
                        </div>
                        
                    </div>
                    
                    <div className="container-button">
                            <button className="button">Send Message</button>
                    </div>
                    
                

                </form>
            </div>
          
        </div>
        <Footer />
 
        </div>
      
    
    );
}

export default Contact;
