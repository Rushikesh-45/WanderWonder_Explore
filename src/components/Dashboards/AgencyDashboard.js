import React from 'react'
import image from '../images/pic1.png'
import { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import agency from "../../context/AgencyInfo";
import axios from "axios";
import Upcoming from '../SearchList/Upcoming';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import Swal from 'sweetalert2';


function AgencyDashboard() {
  const navigate = useNavigate()

 
  const showUpcoming =async (e)=>{
     e.preventDefault();
    // console.log("first")
    // const res = await axios.get("http://localhost:8080/api/package");
    // sessionStorage.setItem('pkgslist', JSON.stringify(res.data));
    //   console.log(res.data);
  }
  const handleAllPkgs =async (e)=>{
    e.preventDefault();
    console.log(agency.getId());
    await axios.get("http://localhost:8080/api/package/agency/"+agency.getId())
    .then(res=>{
        console.log(res);
        if(res.data==null || res.data.length==0 || res.data==undefined) {
            Swal.fire(' Sorry..!! Currently no packages available...')    
            return;
          }
        sessionStorage.setItem('allagencypkg', JSON.stringify(res.data));
        console.log(res.data);
        navigate("/agencypkg");
    }).catch((err)=>{console.log(err);});
  
  }
  const handleAddPkg =async (e)=>{
    e.preventDefault();
     navigate('/addpkg')
  }
  const handleAddVehicle =async (e)=>{
    e.preventDefault();
    navigate('/addvehicle')
  }
  const showAgecnyVehicles =async (e)=>{
    e.preventDefault();
    console.log(agency.getId())
     await axios.get("http://localhost:8080/api/vehicle/agency/"+agency.getId())
    .then(res=>{
        if(res.data==null || res.data.length==0 || res.data==undefined) {
            Swal.fire(' Sorry..!! Currently no Vehicles available...')    
            return;
          }
        sessionStorage.setItem('allagencyvehicles', JSON.stringify(res.data));
        console.log(res.data);
        navigate("/agencyvehicles");
    }).catch((err)=>{console.log(err);});
  }
  const handlePast =async (e)=>{
    e.preventDefault();
     await axios.get("http://localhost:8080/api/past/"+agency.getId())
    .then(res=>{
        sessionStorage.setItem('pkgslist', JSON.stringify(res.data));
        console.log(res.data);
        navigate("/pastpkgs");
    }).catch((err)=>{console.log(err);});
  }


    return (
        <>
        <Navbar/>
        <br /><br /><br /><br />
            <div className='container emp-profile'>
            <div className='row'>
                        <div className='col-md-6'>
                            <div className='profile-img'>

                            </div>
                                <img src={agency.getImg()} style={{width:'300px', height:'300px'}} alt={'img'} />
                        </div>
                        <div className='col-md-4'>
                            <div className='profile-head'>
                                <h5>{}</h5>
                                <h3>{agency.getName()}</h3>
                                <p className='profile-rating mt-3 mb-5'>{agency.getRole()}<span style={{marginLeft:'25px'}}>{agency.getId()}</span></p>
                                </div></div>
                                <div className='col-md-2'>
                            <button ><a href='/logout' className='btn btn-danger'>LOG-OUT</a></button> 
                         
                        </div>
            </div>
            <div className='row'>
                <div className='col-md-4'><br/>
                            <p>Email: {agency.getEmail()}</p> 
                            <p>Mobile No.:  {agency.getMobileNo()}</p>                         
                            <p>Location: {agency.getLocation()}</p>
                            <p >Licence No.:{agency.getLicenceNo()}</p>
                </div>
                <div className='col-md-8'>

                           <button className="btn btn-primary" onClick={handleAddPkg} style={{width:'400px' , marginRight:'25px'}}>Add New Package</button>
                            <button className="btn btn-primary" onClick={handleAddVehicle} style={{width:'400px'}}>Add New Vehicle</button><br/><br />
                           <button className="btn btn-primary" onClick={handleAllPkgs} style={{width:'400px',  marginRight:'25px'}}>My Packages</button>
                           <button className="btn btn-primary" onClick={showAgecnyVehicles} style={{width:'400px'}}>My Vehicles</button><br/><br />
                           <button className="btn btn-primary" onClick={handlePast} style={{width:'400px'}}>View Past Packages</button><br/><br />
                
                </div>

            </div>


                {/* <form>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-img'>

                            </div>
                                <img src={image} alt={'img'} />
                        </div>
                        <div className='col-md-6'>
                            <div className='profile-head'>
                                <h5>{}</h5>
                                <h3>{agency.getName()}</h3>
                                <p className='profile-rating mt-3 mb-5'>{agency.getRole()}<span style={{marginLeft:'25px'}}>{agency.getId()}</span></p>
                            
                                <ul className='nav nav-tabs' role="tablist" id='myTab'>

                                    
                            
                           <button className="btn btn-primary" onClick={handleAllPkgs}>View All Packages</button>
                           <button className="btn btn-primary" onClick={handleAllPkgs}>View All Packages</button>
                           <button className="btn btn-primary" onClick={handleAllPkgs}>View All Packages</button>

                                </ul>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <button ><a href='/logout' className='btn btn-primary'>LOG-OUT</a></button> 
                         
                        </div>
                    </div>
                    <div className=''>
                        
                            <br />
                            
                           <p>{agency.getEmail()}</p> 
                            <p >{agency.getMobileNo()}</p>
                         
                            <p>{agency.getLocation()}</p>
                            <p >{agency.getLicenceNo()}</p>

                         </div>
                         <div>
                            
                         </div>
                </form> */}
            </div>
        </>
    )
}

export default AgencyDashboard
