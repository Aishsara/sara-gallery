import React from 'react';
import './Signup.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
   


function Signup() {

 let navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    contact:"",
    city:"",
    email: "",
    username:"",
    password:"",
    address:""

  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
    const {
      firstname,
      lastname,
      contact,
      city,
      email,
      username,
      password,
      address
  
    } = user;
  const handleChange = async (e) => {
    e.preventDefault();
    try{
    const response = await axios.post("http://localhost:8080/gallery/add",user)
    console.log(response);
    navigate("/home");
  }
  catch(error){
    console.log(error);
  }
    
  };
    return (
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-card-inner">
            <div className="signup-card-front">
              <h2>SIGN UP</h2>
            </div>
            <div className="signup-card-back">
              <form onSubmit={(e) => handleChange(e)}>

                <input type="text" placeholder="First Name" name="firstname" value = {firstname} onChange={(e) => onInputChange(e)}/>

                <input type="text" placeholder="Last Name" name="lastname"
                 value={lastname} 
                 onChange={(e) => onInputChange(e)}/>

                <input type="email" placeholder="Email" name="email"
                 value={email} id ="email"
                onChange={ (e) =>onInputChange(e)} />
                <input type="text" placeholder="City" name ="city"
                value={city} id ="text"
                onChange={(e) => onInputChange(e)}/>
                <input type="tel" placeholder="Phone Number" name="contact"
                value={contact} id ="text"
                onChange={(e) => onInputChange(e)}/>
                <input type="text" placeholder="UserName" name="username"
                value={username} id ="text"
                onChange={(e) => onInputChange(e)}/>
                <input type="password" placeholder="Password" name="password"
                value={password} id ="password"
                onChange={(e) => onInputChange(e)}/>
                <textarea placeholder="Address" name="address"
                value={address} id ="text"
                onChange={(e) => onInputChange(e)}></textarea>
                <button type="submit"><Link to='/home'>Signup</Link></button>
              </form>
            <p>
              Already have an account?<Link to="/">Login</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Signup;

