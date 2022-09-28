import React from 'react'
import './css/navbar.css'
import myLogo from './css/images/logo.png';
import user from "../context/UserInfo";
import agency from "../context/AgencyInfo";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

import './css/navbar.css'
import Swal from 'sweetalert2';

function Navbar() {

  // const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  
  const pkges=async (e)=>{
    e.preventDefault();
    // console.log(agency.getId())
         await axios.get('http://localhost:8080/api/package')
    .then(res=>{
        sessionStorage.setItem('allpkgs', JSON.stringify(res.data));
        console.log(res.data);
         navigate("/packages");
    }).catch((err)=>{
      navigate(-1);
      Swal.fire("server connection timeout")
      console.log(err);});
}
  const vehicles=async (e)=>{
    e.preventDefault();
    // console.log(agency.getId())
         await axios.get('http://localhost:8080/api/vehicle')
    .then(res=>{
        sessionStorage.setItem('allvehicles', JSON.stringify(res.data));
        console.log(res.data);
         navigate("/vehicles");
    }).catch((err)=>{
      navigate(-1);
      Swal.fire("server connection timeout")
      console.log(err);});
}

  return (
    <header className='fixed-top'>
      <span style={{ marginLeft: '0px' }}>
        <Link to="/home">
          <img src={myLogo} width={'300px'} height={'150px'} /> </Link></span>
      <nav>
        <Link to="/home" >HOME</Link>
        <Link  onClick={pkges}>PACKAGES</Link>
        <Link onClick={vehicles} >VEHICLES</Link>
       
        {!user.IsLoggedIn() && (
            <Link to={"/login"} > LOGIN</Link>
        )}
        {user.IsTourist()  ? (
          <Link to="/userdash" >{user.getName()}</Link>
         
        ) : (
          user.IsLoggedIn() &&
          !user.IsAdmin() && (
            <Link to="/agencydash" >{user.getEmail()}</Link>
           
          )
        )}
            {!user.IsLoggedIn() ? (
          <Link to="/register" >REGISTER</Link>
    
        ):<Link to="/logout" >LOGOUT</Link>
        }
        <Link to="/about" > ABOUT US</Link>


      </nav>
    </header>

  )
}

export default Navbar