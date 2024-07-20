import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='Login'>
      <div className='--Login-Header'>
        <h2>WELCOME BACK</h2>
        <div className='--Login-Form'>
          <form>
            <label htmlFor="Email">Email</label> <br />
            <input type="email" placeholder='Enter Your Email' /> <br />

            <label htmlFor="Password">Password</label> <br />
            <input type="password" placeholder='Enter Your Password' /> <br />

            <button type="submit">Login</button>

            <p>Don't have an account? <Link to='/register' style={{color: "red", marginLeft: '10px'}}>Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
