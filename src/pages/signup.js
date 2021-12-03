import '.././styles/signup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



function SignUp() {

    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [success, setSuccess] = useState('');



    const onSubmit = (e) => {
        e.preventDefault();

        const User = {
            Firstname,
            Lastname,
            Email,
            Password,
        }

        console.log(User);

        axios.post('https://justhairandfashionwear.herokuapp.com/users/addUser', User)
            .then(res => { console.log(res.data); setSuccess(res.data); });

        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setSuccess("");
    }

    

    

    return (
        <div className="l-container">
        <div className="side-img"></div>
            <div className="signup">
            <h3 style={{position:"absolute", top:"5%",}}>{success}</h3>
            <h1>Shop With The Best</h1> 
            <p style={{color:"#808080"}}>Already have an account? <Link to="/signin">Login</Link></p>
            <form onSubmit={onSubmit} >
                <label>First Name</label>    
                <input type="text" className="input-box"  onChange={(e)=> setFirstname(e.target.value)} required />
                <label>Last Name</label>
                <input type="text" className="input-box"  onChange={(e)=> setLastname(e.target.value)} required />
                <label>Email</label>
                <input type="email" className="input-box"  onChange={(e)=> setEmail(e.target.value) } required />
                <label>Password(Use letters and numbers)</label>
                <input type="password" className="input box"  onChange={(e)=> setPassword(e.target.value)} required />
                <label>Confirm Password</label>
                <input type="password"  required/>
                <button className="Register" type="submit" value="submit" > Create Account </button>

            </form>

            </div> 
        </div>
    );
}
 
export default SignUp;
