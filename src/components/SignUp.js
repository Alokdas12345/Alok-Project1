import React from 'react'
import './Signup.css';

function SignUp(){
  return(
    <div className="signup">
    
    <div className="signup-box">
      <h1>Sign Up</h1>
      <h4>Its free and only takes a minute</h4>
      <form>
        <label>First Name :</label>
        <input type="text" placeholder=""/><br/>
        <label>Last Name :</label>
        <input type="text" placeholder=""/><br/>
        <label id="email">Email :</label>
        <input type="email" placeholder=""/><br/>
        <label>Password :</label>
        <input type="password" placeholder=""/><br/>
        <label>Confirm Password :</label>
        <input type="password" placeholder=""/><br/>
        <input type="button" value="Submit"/>
          </form>
      
      <p>By Clicking Sign Up button,you agree to our <br/>
      <a href="#">Terms and Condition</a> and <a href="#">Policy and Privacy</a>

      </p>
      </div>

    
    
    <p>Already have an account?<a href="#">Login here</a> </p>
    </div>
  );

}
export default SignUp;
