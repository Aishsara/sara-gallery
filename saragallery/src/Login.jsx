
import React from 'react';
import './Login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
  
function Login() {

  const [loginData, setLoginData] = useState({  username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
let nav = useNavigate();
    
  const onInputChange = (e) =>{

  const{name,value} =e.target;
  setLoginData((prevUser) => ({...prevUser,[name]: value}));
 }
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/gallery/login', loginData);

      if((response.data)==="Login Succefull")
      {
          alert("Login successfull");
          nav("/home");
      }
      else
      {
         console.log(response.data);
      }
      // Handle successful login, e.g., redirect to another page  
    } catch (error) {
      if (error.response)  {
        // Something else went wrong
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };
    return (
      <>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css?family=Arizonia&display=swap" rel="stylesheet" />
      <div className="login-container">
        <div className="login-card">
          <div className="login-card-inner">
            <div className="login-card-front">
              <h2>LOGIN</h2>
            </div>
            <div className="login-card-back">
              <form onSubmit={(e) => handleLoginFormSubmit(e)}>
                <input type="text" placeholder="Username" name="username" required value={loginData.username}
                 onChange={(e) =>
                  onInputChange(e)} />
                <input type="password" placeholder="Password"  name="password" required value={loginData.password}
                 onChange={(e) =>
                 onInputChange(e)} 
                  />
                <button type="submit" ><Link to='/home'>Login</Link></button>
                {errorMessage && <p className="error">{errorMessage}</p>}
              </form>
              <a href="#" value="text">Forgot password?</a>
              <p>
                Don't have an account? <Link to ="/signup">Signup</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  
export default Login;
