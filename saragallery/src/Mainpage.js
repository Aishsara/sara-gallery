import React, { useEffect, useState } from 'react'
import axios from"axios";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigationBar from './Navbar';

export default function Mainpage() {

  
    const [user,setUser]=useState([])

    useEffect(()=>
    {
        loadUsers(); 
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/api/hi");
        setUser(result.data);
    };


const deleteid = async(sno) => {

       await axios.delete(`http://localhost:8080/api/${sno}`)
      loadUsers();
  }

  return (
      <div className='container'>

                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>Datas Of Gallery</Link>
            <NavigationBar/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="btn btn-outline-light" to = "/add">Add Details</Link>
            </div>
          </nav>
          </div>
              <div className='py-4'>
              <table className="table table-striped w-auto">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Artist</th>
                <th scope="col">Artwork name</th>
                <th scope="col">Artwork size</th>
                <th scope="col">Artwork type</th>
                <th scope="col-sm">No of Exhibitions</th>
                <th scope="col">No of Artworks</th>
                <th scope="col">Price</th>
                <th scope="col">Contact</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {
                  user.map((user,index)=>(
                      <tr>
                <th scope="row" key={index}>{index+1}</th>
                
                <td>{user.artist}</td>
                <td>{user.artname}</td>
                <td>{user.artsize}</td>
                <td>{user.arttype}</td>
                <td>{user.exhibitcount}</td>
                <td>{user.noofart}</td>
                <td>{user.price}</td>
                <td>{user.contact}</td>
                <td>{user.country}</td>
                <td>
                  <Link className="VisiblitiyIcon" to={`/view/${user.sno}`}><VisibilityIcon></VisibilityIcon></Link>
                  {console.log(user.sno)}
                  <Link className="btn btn-outline-primary btn-small" to={`/edit/${user.sno}`}><EditRoundedIcon color=""></EditRoundedIcon></Link>
                  <button className="btn btn-outline-danger btn-small" onClick={()=>deleteid(user.sno)}><DeleteIcon></DeleteIcon></button>

                </td>
              </tr>
              
                  ))
              }
            </tbody>
          </table>
              </div>
    </div>
  )
};


