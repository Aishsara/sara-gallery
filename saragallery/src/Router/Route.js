import React from "react";
import {Route,Routes} from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import LandingPage from "../Home";
import ViewUser from "../View";
import EditDetails from "../Edit";
import AddDetails from "../Add";
import Mainpage from "../Mainpage";
import BlogPage from "../Blog";
import ArtistPage from "../Artist";
    const RouterDom = () =>
    {
    return(
    
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<LandingPage/>}></Route>
            <Route path="/view/:sno" element={<ViewUser/>}></Route>
            <Route path="/edit/:sno" element = {<EditDetails/>}></Route>
            <Route path="/add" element = {<AddDetails/>}></Route>
            <Route path="/main" element = {<Mainpage/>}></Route>
            <Route path="/blog" element={<BlogPage/>}></Route>
            <Route path="/artist" element={<ArtistPage/>}></Route>
          </Routes>
    
  
    )
}

export default RouterDom;