import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewDetails() {

  const [user, setUser] = useState({
         sno:"",
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
  
  const {sno} = useParams();
  console.log(sno);
  
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/${sno}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Art Details</h2>

          <div className="card">
            <div className="card-header">
              Details Of Art Works:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>SNO: </b>
                  {user.sno}
                </li>
                <li className="list-group-item">
                  <b>Artist: </b>
                  {user.artist}
                </li>
                <li className="list-group-item">
                  <b>ArtType: </b>
                  {user.arttype}
                </li>
                <li className="list-group-item">
                  <b>ArtSize: </b>
                  {user.artsize}
                </li>
                <li className="list-group-item ">
                  <b>ArtName: </b>
                  {user.artname}
                </li>
                <li className="list-group-item">
                  <b>Exhibitions: </b>
                  {user.exhibitcount}
                </li>
                <li className="list-group-item">
                  <b>NoOfArtworks: </b>
                  {user.noofart}
                </li>
                <li className="list-group-item">
                  <b>Price: </b>
                  {user.price}
                </li>
                <li className="list-group-item">
                  <b>Contact: </b>
                  {user.contact}
                </li>
                <li className="list-group-item">
                  <b>Country: </b>
                  {user.country}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/main"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
  
}