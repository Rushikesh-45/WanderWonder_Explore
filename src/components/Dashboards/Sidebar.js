import React from 'react'
import axios from 'axios';
import logo from './../css/images/logo.png'
import { useNavigate } from 'react-router-dom';


function Sidebar() {
    const navigate=useNavigate();


const showOverview= (e)=> {
    e.preventDefault();
    navigate('/admin')
}

const showBookings=async(e)=> {
    e.preventDefault();
    // console.log(agency.getId())
         await axios.get('http://localhost:8080/api/booking')
    .then(res=>{
        sessionStorage.setItem('allbookings', JSON.stringify(res.data));
        console.log(res.data);
        // navigate("/pastpkgs");
    }).catch((err)=>{console.log(err);});
    navigate('/adminbookings')

      }
const showTourists=async(e)=> {
    e.preventDefault();
    // console.log(agency.getId())
         await axios.get('http://localhost:8080/api/tourist')
    .then(res=>{
        sessionStorage.setItem('alltourists', JSON.stringify(res.data));
        console.log(res.data);
        // navigate("/pastpkgs");
    }).catch((err)=>{console.log(err);});
    navigate('/admintourist')

      }

const showAgencies=async (e)=>{

    e.preventDefault();
    // console.log(agency.getId())
         await axios.get('http://localhost:8080/api/travel_agency')
    .then(res=>{
        sessionStorage.setItem('allagencies', JSON.stringify(res.data));
        console.log(res.data);
        // navigate("/pastpkgs");
    }).catch((err)=>{console.log(err);});
        navigate('/adminagencies');

}
const showPackages=async (e)=>{
    e.preventDefault();
    // console.log(agency.getId())
         await axios.get('http://localhost:8080/api/package')
    .then(res=>{
        sessionStorage.setItem('allpkgs', JSON.stringify(res.data));
        console.log(res.data);
        // navigate("/pastpkgs");
    }).catch((err)=>{console.log(err);});
        navigate('/adminpkg');
}
const showVehicles=async (e)=>{
    e.preventDefault();
    // console.log(agency.getId())
         await axios.get('http://localhost:8080/api/vehicle')
    .then(res=>{
        sessionStorage.setItem('allvehicles', JSON.stringify(res.data));
        console.log(res.data);
        // navigate("/pastpkgs");
    }).catch((err)=>{console.log(err);});
        navigate('/adminvehicles');

}
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: '#e3f2fd'}}>
  
                    
                    <ul className='navbar-nav mr-auto' style={{listStyle:'none', listStyleType:'none'}}>
                    
                        <img src={logo} width={'250px'} height={'100px'}/>
                    
                    <li className="nav-item">
                    {/* <button className='btn  btn-outline-secondary' style={{marginLeft:'10px', width:'120px'}} >Overview</button> */}
                    </li>
                    </ul>

                    <p className='nav-item'><button className='btn  btn-outline-secondary' style={{marginLeft:'10px', width:'120px'}}  onClick={showOverview}>Overview</button></p>
                    <p className='nav-item'><button className='btn  btn-outline-secondary' style={{marginLeft:'10px', width:'120px'}}  onClick={showBookings}>Bookings</button></p>
                    <p className='nav-item'><button className='btn  btn-outline-secondary' style={{marginLeft:'10px', width:'120px'}}  onClick={showTourists}>Tourists</button></p>
                    <p className='nav-item'><button className='btn  btn-outline-secondary' style={{marginLeft:'10px', width:'120px'}}  onClick={showAgencies}>Agencies</button></p>
                    <p className='nav-item'><button className='btn  btn-outline-secondary' style={{marginLeft:'10px', width:'120px'}}  onClick={showPackages}>Packages</button></p>
                    <p className='nav-item'><button className='btn  btn-outline-secondary' style={{marginLeft:'10px', width:'120px'}}  onClick={showVehicles}>Vehicles</button></p>
                    <p className='nav-item'><button className='btn  btn-outline-secondary' style={{marginLeft:'10px', width:'120px'}}  >Edit Profile</button></p>
 
</nav>
      
    </div>
  )
}

export default Sidebar
