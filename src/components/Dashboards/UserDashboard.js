import React from 'react'
import axios from "axios";
import image from '../images/pic1.png'
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import user from "../../context/UserInfo";
import Navbar from '../Navbar';
import {useNavigate } from "react-router-dom";
import SearchList2 from '../SearchList/SearchList';


function UserDashboard() {
    const[show,setShow]=useState(true);
    
    const navigate= useNavigate();

    // const handleAllPkgs =async (e)=>{
    //     // handleSecond();
    //     e.preventDefault();
    //     const res = await axios.get("http://localhost:8080/api/package");
    //     sessionStorage.setItem('search', JSON.stringify(res.data));
    //       console.log(res.data);
    //       navigate("/pkglist");
    //   }
    const handleBookedPkg=async(e)=>{ 
        e.preventDefault();
        // console.log(agency.getId())
             await axios.get('http://localhost:8080/api/booking/10')
        .then(res=>{
            sessionStorage.setItem('userbookings', JSON.stringify(res.data));
            console.log(res.data);
            if(res.data==null||res.data==undefined || res.data==""){
                console.log("assas")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You Don`t have any bookings yet..!!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
                  navigate('/userdash')
            }
            // navigate("/pastpkgs");
        }).catch((err)=>{console.log(err);});
        navigate('/userdash')
      }
    const handleUpcoming=async(e)=>{ 
        e.preventDefault();
        // console.log(agency.getId())
             await axios.get('http://localhost:8080/api/booking/upcoming/'+user.getId())
        .then(res=>{
            sessionStorage.setItem('userbookings', JSON.stringify(res.data));
            console.log(res.data);
            if(res.data==null||res.data==undefined || res.data==""){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You Don`t have any upcoming bookings ..!!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
                  navigate('/userdash')
            }
            // navigate("/pastpkgs");
        }).catch((err)=>{console.log(err);});
        navigate('/userupbookings')
      }
    // const handlePastBooked=()=>{ }
    const handleEditProfile=()=>{ }
    // const handleViewAllVehicles=()=>{ }
    // const handleSecond=()=>{ 
    //     console.log("second")
    // }
    return (
        <>
        <Navbar/>
        <br /><br /><br /><br />
            <div className='container emp-profile'>
                <form>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-img'>

                            </div>
                                <img src={user.getImg()} alt={'img'} style={{width:'300px', height:'300px'}} />
                        </div>
                        <div className='col-md-6'>
                            <div className='profile-head'>
                                <h5>{}</h5>
                                <h3>{user.getName()}</h3>
                                <p className='profile-rating mt-3 mb-5'>{user.getRole()}<span style={{marginLeft:'25px'}}>{user.getId()}</span></p>
{/* export default {IsLoggedIn ,getImg, IsAdmin, getAddress, getEmail, getName, getId,getMobileNo, IsAgency, IsTourist, getGender, getDob, getRole, getLocation}; */}
                               
                                <p>Email: {user.getEmail()}</p>
                                <p>Mobile No.: {user.getMobileNo()}</p>
                                <p>Birth Date: {user.getDob()}</p>
                                <p>City: {user.getAddress()}</p>
                                <p>Gender: {user.getGender()}</p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                           <button className="btn btn-primary" onClick={handleEditProfile} >Edit Profile</button>
                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <br />
                            <div className='profile-work-container'>
                          
                            </div>
                        </div>

                        <div className="col-md-8 pl-5 about-info">
                        {/* <button className="btn btn-primary" onClick={handleAllPkgs} style={{width:'135px'}}> All Packages</button>
                        <button className="btn btn-primary" onClick={handleViewAllVehicles} style={{width:'135px', marginLeft:'20px'}}>All Vehicles</button> */}
                            <button className="btn btn-primary" onClick={handleBookedPkg} style={{width:'135px', marginLeft:'20px'}}>My Bookings</button>
                           <button className="btn btn-primary" onClick={handleUpcoming} style={{width:'170px', marginLeft:'20px', marginRight:'20px'}}>Upcoming Journeys</button>
                           <button ><a href='/logout' className='btn btn-danger' >LOG-OUT</a></button> 
                           
                           {/* <button className="btn btn-primary" onClick={handlePast} style={{width:'400px'}}>View Past Packages</button><br/><br /> */}
                        </div>
                        <br/><br/><br/>
                        </div>
                </form>
            </div>
        </>
    )
}

export default UserDashboard
