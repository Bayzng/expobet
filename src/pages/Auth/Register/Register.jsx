import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className='Register'>
      <div className='--Register-Header'>
        <h2>WELCOME GENIUS</h2>
        <div className='--Register-Form'>
          <form>
            <label htmlFor="Name">Name</label> <br />
            <input type="text" placeholder='Enter Your Name' /> <br />

            <label htmlFor="Email">Email</label> <br />
            <input type="email" placeholder='Enter Your Email' /> <br />

            <label htmlFor="Password">Password</label> <br />
            <input type="password" placeholder='Enter Your Password' /> <br />

            <div className='--Register-Options'>
              <label>
                <input type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="other" />
                Other
              </label>
            </div>

            <div className='--Register-Checkbox'>
              <label>
                <input type="checkbox" />
                <h4>I AGREE WITH THE FORM AND BET RESPONSIBLY</h4>
              </label>
            </div>

            <button type="submit">Register</button>

            <p>Already have an account <Link to='/login' style={{color: "green", marginLeft: '10px'}}>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
