import React from 'react'
import '../components/Login.css';

export default function () {
  return (
          <div className="login">
        <div className="login-box">
            <h1 className='heading'>Login</h1>
            <form>
                <label>Email :</label>
                <input type="email" placeholder=""/><br/>
                <label>Password :</label>
                <input type="password" placeholder=""/><br/>
                <input type="button" value="Submit"/>

            </form>
        </div>
        <p>Not have an account? <a href="#">Sign Up here</a>  </p>
        </div>

        
  );
}
