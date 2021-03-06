import '../styles/loginstyle.css';
import { Link } from 'react-router-dom';



function LogIn() {
    return (
        
        <div className="l-container">


            <div className="side-img"></div>
       
       
            <form className="login-form">
                <div className="form-inner">
                    <h2>Sign in to your Account</h2>
                    <div className="form-group">
                        <label htmlFor="name">Email:</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Password:</label>
                        <input  type="password" name="password" id="password"/>
                        <div className="forgotPs">
                        <p>Forgot Password?</p>
                        </div>
                        
                        <div className="rmb">
                            
                            <input className="login-input" type="checkbox"/><span>Remember me</span>
                                                
                                
                        </div>
                        
                        <button type="submit" >Sign in</button>

                        <div className="dontHaveAcc">
                        <p>Don't have an Account?</p>
                        </div>

                        <Link to="/signup" >Create account</Link>


                        
                        
                    </div>
                    
                </div>
                


            </form>
      
     
       
            

        </div>
        
    );
}
 
export default LogIn;