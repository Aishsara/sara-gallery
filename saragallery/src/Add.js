
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddDetails() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
  
    artist:"",
    artname:"",
    arttype:"",
    artsize:"",
    price:"",
    contact:"",
    country:"",
    exhibitcount:"",
    noofart:""
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { artist, artname, arttype, artsize, price,contact,country,exhibitcount,noofart } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api",user);
    navigate('/main');
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Add Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               Artist
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Bus_NAME"
                name="artist"
                value={artist}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Art Name
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Bus_NUM"
                name="artname"
                value={artname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Art Type
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The StartPoint"
                name="arttype"
                value={arttype}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Art Size
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The End_Point"
                name="artsize"
                value={artsize}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               Exhibitions 
              </label>.
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Your Destination"
                name="exhibitcount"
                value={exhibitcount}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                No_Of_Artworks
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Total No of Passengers"
                name="noofart"
                value={noofart}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Give Us The Route"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Contact
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Ownership"
                name="contact"
                value={contact}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Time"
                name="country"
                value={country}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success my-2">
              Add Details
            </button>
            <Link className="btn btn-outline-danger my-2 mx-2" to={"/main"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}