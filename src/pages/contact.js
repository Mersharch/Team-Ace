import logo from './logo.svg';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="main-container">
      <h1>Contact Us</h1>
      <p className="subtitle">lorem ipsum</p>
      <div className="contact-container">
          <div className="contact-info">
              <h4>
                  Contact Information
              </h4>
              <p>Fill up the form and then click send</p>
              <div className="icon-text">
              <i class="fa fa-phone" aria-hidden="true"></i>
                <span>Text</span>
              </div>
              <div className="icon-text">
              <i class="fa fa-phone" aria-hidden="true"></i>
                <span>Text</span>
              </div>
              <div className="icon-text">
              <i class="fa fa-phone" aria-hidden="true"></i>
                <span>Text</span>
              </div>
              <div className="social-media">
                <a>
                    icon
                </a>
                <a>
                    icon
                </a>
                <a>
                    icon
                </a>
                <a>
                    icon
                </a>
                  
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
                  <button>Send Message</button>
              </div>
              
        

      </form>
      </div>
          

      </div>
      
    
  );
}

export default Contact;
