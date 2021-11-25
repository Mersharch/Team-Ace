import '.././styles/signup.css';




function SignUp() {
    return (
        
        <div className="signup">
           <i>  <h1>Shop With The Best</h1> </i>
            <p style={{color:"#808080"}}>Already have an account? Login</p>
            <form>
            <label>First Name</label>    
            <input type="First name" class="input-box" placeholder=""/>
            <label>Last Name</label>
            <input type="Last name" class="input-box" placeholder=""/>
            <label>Email</label>
            <input type="Email" class="input-box" placeholder=""/>
            <label>Password(Use letters and numbers)</label>
            <input type="Password"class="input box" placeholder=""/>
            <label>Confirm Password</label>
            <input type="password" placeholder=""/>
            <input type="button" value="REGISTER"/>

            </form>

            
        </div>
    );
}
 
export default SignUp;