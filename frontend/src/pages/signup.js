import '.././styles/signup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';




function SignUp() {

    const [user, setUser] = useState({
        Firstname:"",
        Lastname:"",
        Email:"",
        Password:""
    });

    const handlelastname = (e) => (
        setUser({
            Lastname:e.target.value
        })
    )

    

    return (
        <div className="l-container">
        <div className="side-img"></div>
        <div className="signup">
           <i>  <h1>Shop With The Best</h1> </i>
            <p style={{color:"#808080"}}>Already have an account? <Link to="/signin">Login</Link></p>
            <form>
            <label>First Name</label>    
            <input type="First name" className="input-box" placeholder="" onChange={(val)=> setUser({Firstname:val})} />
            <label>Last Name</label>
            <input type="Last name" className="input-box" placeholder="" onChange={(e)=> handlelastname(e) } />
            <label>Email</label>
            <input type="Email" className="input-box" placeholder="" onChange={(val)=> setUser({Email:val})} />
            <label>Password(Use letters and numbers)</label>
            <input type="Password"className="input box" placeholder="" onChange={(val)=> setUser({Password:val})} />
            <label>Confirm Password</label>
            <input type="password" placeholder=""/>
            <button className="Register" type="submit" value="submit" > Create Account </button>

            </form>

            </div> 
        </div>
    );
}
 
export default SignUp;
